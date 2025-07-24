import express from 'express';
const router=express.Router();
const books = [];
// Get all books
router.get('/books',(req,res)=>{
    res.status(400).json(books)
})

// Add a new book
router.post('/books',(req,res)=>{
    const {title,author}=req.body;
    if(!title ||!author){
       return res.status(400).json({message:"book sont requit"})
    }
    const newBook={
        id:books.length+1,
        title,
        author
    }
    books.push(newBook);
    res.status(200).json({message:"Book ajouter avec succes",newBook})
})

// Update a book by ID
router.put('/books/:id',(req,res)=>{
    const bookId=parseInt(req.params.id);
    const book=books.find(b=>b.id===bookId);
    const {title,author}=req.body
    if(!book){
        return res.status(400).json({message:"ce book n\'existe pas"})
    }
    if(title) book.title=title;
    if(author)book.author=author;
    res.status(200).json({message:"Book modifier avec succes",book})
})

// Delete a book by ID
router.delete('/books/:id',(req,res)=>{
    const bookId=parseInt(req.params.id);
    const book=books.find(b=>b.id===bookId);
    if(!book){
        return res.status(400).json({message:"ce book n\'existe pas"})
    }
    const deletBook=books.splice(book,1)[0];
    res.status(200).json({message:"book supprimer avec succes",deletBook})
})

export default router