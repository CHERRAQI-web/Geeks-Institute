import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://cherraqi:Louis2020@data.jofdmf0.mongodb.net/Quiz?retryWrites=true&w=majority&appName=Data", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connecté avec succès à MongoDB");
    
  } catch (error) {
    console.error("Erreur de connexion à MongoDB", error);
    process.exit(1);  // Arrêter le processus si la connexion échoue
  }
};

export default connectDB;

