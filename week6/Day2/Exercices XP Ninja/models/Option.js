import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  correctAnswerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Option', required: true }
});

const Question = mongoose.model('Question', QuestionSchema);

export default Question;
