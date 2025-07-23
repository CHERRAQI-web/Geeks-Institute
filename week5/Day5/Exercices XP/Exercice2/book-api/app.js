import express, { application } from 'express';
const app = express();
const port = 5000;
const books=[
    {
        id:1,
        title:"Premier livre",
        author:"Auteur 1",
        publishedYear: 2020
    },
    {
        id:2,
        title:"Deuxième livre",
        author:"Auteur 2",
        publishedYear: 2025
    }
]
app.listen(port, () => {
  console.log(` le serveur est en cours d'exécution sur :  http://localhost:${port}`);
});

app.get("/api/books",(req,res)=>{
    res.json(books);
})

app.get("/api/books/:bookId",(req,res)=>{
    const bookId=parseInt(req.params.bookId);
    const book=books.find(b=>b.id===bookId);
    if(!book){
        return res.status(404).json({message:"Livre non trouvé"});

    } return res.status(200).json({
    message: "Le livre est trouvé",
    book}); 
});
app.use(express.json());

app.post("/api/books",(req,res)=>{
    
    const {title,author,publishedYear}=req.body;

    if(!title || !author || !publishedYear){
        return res.status(400).json({message:"Titre, auteur et année de publication sont requis"});
    }

    const newBook={
        id: books.length + 1,
        title,
        author,
        publishedYear
    };

    books.push(newBook);
    res.status(201).json(newBook);

});