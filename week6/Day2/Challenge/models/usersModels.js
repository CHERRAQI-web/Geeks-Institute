import bcrypt from "bcrypt";
import client from "../config/db.js"; // Connexion à la base de données

const registerUser = async (
  username,
  password,
  email,
  first_name,
  last_name
) => {
  try {
    // Vérifier si l'email ou le nom d'utilisateur existe déjà
    const userCheck = await client.query(
      "SELECT * FROM users WHERE username = $1 OR email = $2",
      [username, email]
    );
    if (userCheck.rows.length > 0) {
      throw new Error("This username or email is already taken.");
    }

    // Hacher le mot de passe
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insérer l'utilisateur dans la table users
    const userResult = await client.query(
      "INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING id",
      [email, username, first_name, last_name]
    );
    const userId = userResult.rows[0].id;

    // Insérer le mot de passe haché dans la table hashpwd
    const passwordResult = await client.query(
      "INSERT INTO hashpwd (username, password) VALUES ($1, $2) RETURNING id",
      [username, hashedPassword]
    );

    return {
      userId,
      message: "User registered successfully.",
    };
  } catch (error) {
    console.error(error.message);
    throw new Error("Error during registration process.");
  }
};

const loginUser = async (username, password) => {
  try {
    const userCheck = await client.query(
      "SELECT * FROM hashpwd WHERE username = $1",
      [username]
    );
    if (userCheck.rows.length === 0) {
      throw new Error("Utilisateur non trouvé.");
    }
    const user = userCheck.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Mot de passe incorrect.");
    }

    return {
      username: user.username,
      message: "Connexion réussie.",
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message || "Erreur lors de la connexion.");
  }
};

const getAllUsers = async () => {
  try {
    const result = await client.query("SELECT * FROM users");
    return result.rows;
  } catch (error) {
    console.error("Error fetching users:", error); // Log des erreurs
    throw new Error("Failed to retrieve users from the database");
  }
};
const getUsersById = async (id) => {
  const result = await client.query("SELECT * FROM users WHERE id=$1", [id]);
  return result.rows[0];
};

const updateUsers = async (id, username, password, email, first_name, last_name) => {
  let hashedPassword = null;

  try {
    console.log("Starting transaction...");
    await client.query('BEGIN');

    if (password) {
      const saltRounds = 10;
      hashedPassword = await bcrypt.hash(password, saltRounds);
      console.log("Password hashed");
    }

    // Récupérer l'utilisateur actuel avant de mettre à jour
    const currentUser = await client.query(
      "SELECT * FROM users WHERE id = $1",
      [id]
    );

    if (currentUser.rows.length === 0) {
      throw new Error('User not found');
    }

    const oldUsername = currentUser.rows[0].username;

    // Supprimer l'ancien username dans hashpwd
    if (oldUsername) {
      console.log('Deleting old username reference in hashpwd...');
      await client.query(
        "DELETE FROM hashpwd WHERE username=$1",
        [oldUsername]
      );
      console.log('Old username removed from hashpwd');
    }

    // Mettre à jour l'utilisateur dans users
    const updateUserResult = await client.query(
      "UPDATE users SET username=$1, email=$2, first_name=$3, last_name=$4 WHERE id=$5 RETURNING *",
      [username, email, first_name, last_name, id]
    );

    if (updateUserResult.rows.length === 0) {
      throw new Error('User not found');
    }

    console.log('User updated in users table:', updateUserResult.rows[0]);

    // Insérer ou mettre à jour le mot de passe dans hashpwd
    if (password) {
      console.log('Updating password in hashpwd table...');
      await client.query(
        "INSERT INTO hashpwd (username, password) VALUES ($1, $2) ON CONFLICT (username) DO UPDATE SET password=$2",
        [username, hashedPassword]
      );
      console.log('Password updated in hashpwd table');
    } else {
      console.log('Username updated without password change');
    }

    await client.query('COMMIT');
    console.log('Transaction committed');

    return updateUserResult.rows[0];
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error updating user:', error);
    throw new Error('Failed to update user');
  }
};



export default {
  registerUser,
  loginUser,
  getAllUsers,
  getUsersById,
  updateUsers,
};
