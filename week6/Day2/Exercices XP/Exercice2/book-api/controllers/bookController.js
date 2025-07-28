import bookModel from "../Models/bookModels.js";

const getAllBooks = async (req, res) => {
  try {
    const book = await bookModel.getAllBooks();
    if (!book) {
      res.status(404).json({ message: "task not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Server error" });
  }
};
const getBooksById = async (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const book = await bookModel.getBooksById(bookId);
    if (!book) {
      res.status(404).json({ message: "task not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const createBooks = async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }
    const book = await bookModel.createBooks(title, author, publishedYear);

    res.status(200).json({ Message: "Book créer" }, book);
  } catch (error) {
    console.error("Error creating books:", error);
    res.status(500).json({ message: "Server error" });
  }
};
const updateBook = async (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
      return res
        .status(400)
        .json({ message: "Title, author, and published year are required" });
    }

    const book = await bookModel.updateBook(
      bookId,
      title,
      author,
      publishedYear
    ); // Correct argument order
    res.status(200).json({ Message: "Book modifier " }, book);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookId = parseInt(req.params.id); // Correctly parse the id
    const book = await bookModel.deleteBook(bookId);
    res.status(200).json({ Message: "Book supprimer" }, book);
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export default {
  getAllBooks,
  getBooksById,
  createBooks,
  updateBook,
  deleteBook,
};
