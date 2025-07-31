import mongoose from 'mongoose';

const QuestionOptionSchema = new mongoose.Schema({
  question_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  option_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Option', required: true },
});

const QuestionOption = mongoose.model('QuestionOption', QuestionOptionSchema);
export default QuestionOption;
