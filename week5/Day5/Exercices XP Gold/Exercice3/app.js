import express from 'express';
const app = express();
const port = 5000;
app.use(express.json());


const Todos=[
    {
        id:1,
        title:"Faire les courses 1",
        completed:false
    },
    {
        id:2,
        title:"Faire les courses 2",
        completed:false
    }
]

app.post("/api/todos", (req, res) => {
  const { title, completed } = req.body;

  if (!title || completed === undefined) {
    return res.status(400).json({ message: "Titre et statut de complétion sont requis" });
  }

  const newTodo = {
    id: Todos.length + 1,
    title,
    completed
  };

  Todos.push(newTodo);
  res.status(201).json(newTodo);
});


app.get("/api/todos",(req,res)=>{
    res.json(Todos);
});

app.get("/api/todos/:todoId",(req,res)=>{
    const todoId=parseInt(req.params.todoId);
    const todo=Todos.find(t=>t.id===todoId);
    if(!todo){
        return res.status(404).json({message:"Todo non trouvé"});

    }
    res.status(200).json(todo);
});

app.put("/api/todos/:id", (req, res) => {
    const TodoId=parseInt(req.params.id);
    const {title,completed}=req.body;
    const todoIndex=Todos.findIndex(t=>t.id===TodoId);
    if(todoIndex===-1){
        return res.status(404).json({message:"Todo non trouvé"});
    }
    if(!title || completed === undefined){
        return res.status(400).json({message:"Titre et statut de complétion sont requis"});
    }
    Todos[todoIndex]={id:TodoId,title,completed};
    res.status(200).json(Todos[todoIndex]);
});

app.delete("/api/todos/:id",(req,res)=>{
    const TodoId=parseInt(req.params.id);
    const todoIndex=Todos.findIndex(t=>t.id===TodoId);
    if(todoIndex===-1){
        return res.status(404).json({message:"Todo non trouvé"});
    }
    
    const todoI= Todos[todoIndex];
    Todos.splice(todoIndex, 1);    
    res.status(200).json({message:"Todo supprimé avec succès", todo: todoI});
})


app.listen(port,()=>{
    console.log(`Le serveur est en cours d'exécution sur : http://localhost:${port}`);
})
