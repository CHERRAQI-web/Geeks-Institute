import Option from '../models/Option.js';
import Question from '../models/question.js';
import mongoose from 'mongoose';
import QuestionOption from '../models/QuestionOption.js';

const createOption = async (req, res) => {
  const { optionText } = req.body; // Recevoir l'option via le corps de la requête

  try {
    // Créer une nouvelle option
    const newOption = new Option({
      option: optionText
    });

    // Sauvegarder l'option dans la base de données
    await newOption.save();

    // Répondre avec l'option créée
    res.status(201).json({
      message: 'Option créée avec succès',
      option: newOption
    });
  } catch (error) {
    console.error('Erreur lors de la création de l\'option:', error);
    res.status(500).json({ message: 'Erreur serveur lors de la création de l\'option' });
  }
};

const createQuestion = async (req, res) => {
  const { questionText, options, correctOptionIndex } = req.body;

  // Validation de base
  if (!questionText || !Array.isArray(options) || options.length === 0 || correctOptionIndex === undefined) {
    return res.status(400).json({ message: 'Données invalides. Assurez-vous de fournir questionText, options et correctOptionIndex.' });
  }

  if (correctOptionIndex < 0 || correctOptionIndex >= options.length) {
    return res.status(400).json({ message: 'L\'index de la réponse correcte est invalide.' });
  }

  try {
    console.log("Requête reçue :", req.body); // Affiche tout le corps de la requête

    // Créer les options de réponse
    const createdOptions = await Option.insertMany(
      options.map(optionText => ({ option: optionText }))
    );
    console.log("Options créées :", createdOptions);

    // Vérifier si le correctOptionIndex est valide
    const correctOption = createdOptions[correctOptionIndex];
    if (!correctOption) {
      return res.status(400).json({ message: 'L\'option correcte est invalide.' });
    }

    // Créer la question avec la bonne réponse
    const question = new Question({
      question: questionText,
      correctAnswerId: correctOption._id // L'option correcte
    });

    // Vérifie si la question a bien été définie avec les valeurs attendues
    console.log("Données de la question avant sauvegarde :", question);

    // Sauvegarder la question
    await question.save();

    // Associer les options à la question via QuestionOption
    const questionOptions = createdOptions.map(option => ({
      insertOne: {
        document: {
          question_id: question._id,
          option_id: option._id,
        }
      }
    }));

    // Exécution en batch pour améliorer la performance
    await QuestionOption.bulkWrite(questionOptions);

    // Répondre avec un message de succès
    res.status(201).json({
      message: 'Question créée avec succès',
      question: {
        id: question._id,
        questionText: question.question,
        correctAnswerId: question.correctAnswerId
      },
      options: createdOptions
    });
  } catch (error) {
    console.error('Erreur lors de la création de la question:', error);
    res.status(500).json({ message: 'Erreur serveur lors de la création de la question', error: error.message });
  }
};


// Récupérer la question et ses options
const getQuestion = async (req, res) => {
  try {
    // Récupérer la première question
    const question = await Question.findOne().populate('correctAnswerId');
    if (!question) {
      return res.json({ quizComplete: true, score: 0 });
    }

    // Récupérer les options associées à cette question
    const questionOptions = await QuestionOption.find({ question_id: question._id });
    const options = await Option.find({
      _id: { $in: questionOptions.map(option => option.option_id) }
    });

    console.log("Question:", question);
    console.log("Options:", options);

    // Retourner la question et ses options
    res.json({
      question: question.question,
      options: options,
      questionId: question._id
    });
  } catch (error) {
    console.error('Erreur lors de la récupération de la question:', error);
    res.status(500).send('Erreur serveur');
  }
};

// Soumettre la réponse
const submitAnswer = async (req, res) => {
  const { questionId, selectedAnswerId } = req.body;

  try {
    // Convertir selectedAnswerId en ObjectId
    const selectedAnswerObjectId = new mongoose.Types.ObjectId(selectedAnswerId);

    // Récupérer la question
    const question = await Question.findById(questionId).populate('correctAnswerId');

    if (!question) {
      return res.status(400).send('Question non trouvée');
    }

    // Vérifier si la réponse est correcte
    const isCorrect = question.correctAnswerId.toString() === selectedAnswerObjectId.toString();
    const score = isCorrect ? 1 : 0;

    res.json({
      message: isCorrect ? 'Bonne réponse!' : 'Mauvaise réponse!',
      score: score,
      nextQuestion: true
    });
  } catch (error) {
    console.error('Erreur lors de la soumission de la réponse:', error);
    res.status(500).send('Erreur serveur');
  }
};

// Exporter les fonctions
export default { createQuestion, getQuestion, submitAnswer , createOption };
