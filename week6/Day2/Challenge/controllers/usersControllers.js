import userModels from '../models/usersModels.js'

const registerUser = async (req, res) => {
  const { username, password, email, first_name, last_name } = req.body;
  try {
    const user = await userModels.registerUser(username, password, email, first_name, last_name);
    res.status(200).json(user);
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(400).json({ message: error.message }); // Afficher un message d'erreur plus précis
  }
};


const getLoginUser=async(req,res)=>{
    const{username,password}=req.body;
    if(!username||!password){
     return res.status(400).json({ message: "Username or password missing" });
    }
    try {
        const user=await userModels.loginUser(username,password)
         if (user) {
      res.status(200).json({
        message: 'Connexion réussie',
        user: user,
      });
    } else {
      return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }
    }catch(error){
        return res.status(400).json({ message: error.message }); 
    }
}
const getAllUsers = async (req, res) => {
  try {
    const users = await userModels.getAllUsers(); 
    res.status(200).json(users);  
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Failed to retrieve users' }); 
  }
};
const getUsersById=async(req,res)=>{
    const userId= parseInt(req.params.id)
     try{
        const user=await userModels.getUsersById(userId)
         if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }
        res.status(200).json(user)
    }catch(error){
         console.error('Error fetching User:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
const updateUsers = async (req, res) => {
  const userId = parseInt(req.params.id);  // ID passé dans l'URL
  const { username, password, email, first_name, last_name } = req.body; // Données envoyées dans le corps de la requête

  try {
    const updatedUser = await userModels.updateUsers(userId, username, password, email, first_name, last_name);
    if (updatedUser) {
      res.status(200).json({ message: "User updated successfully", updatedUser });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Error updating user" });
  }
};

export default {registerUser,getLoginUser,getAllUsers,getUsersById,updateUsers}