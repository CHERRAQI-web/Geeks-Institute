import express from 'express';
const router=express.Router();
const todos = [];

// Get all to-do items

router.get('/todos',(req,res)=>{
    res.json(todos)
});


// Add a new to-do item
router.post('/todos',(req,res)=>{
   const {title}=req.body
   if(!title){
    return res.status(400).json({message:"title sont requis"})
   }
   const newTodo=
    {
        id:todos.length+1,
        title
    }
   todos.push(newTodo);
   res.status(201).json(newTodo)
})

// Update a to-do item by ID
router.put('/todos/:id',(req,res)=>{
    const TodoId=parseInt(req.params.id);
    const todo=todos.find(t=>t.id===TodoId)
    const {title}=req.body;
    if(!todo){
        return res.status(400).json({message:"Article Non trouvé"})
    }
    if(title) todo.title=title; 
     res.json({ message: 'Article mis à jour', todo });

})
// Delete a to-do item by ID

router.delete('/todos/:id',(req,res)=>{
    const todoId=parseInt(req.params.id);
    const todo=todos.find(t=>t.id===todoId);
    if(!todo){
        return res.status(400).json({message:"Article Non trouvé"})
    }
    const deletTodo=todos.splice(todo,1)[0];
    res.status(400).json({message:"todo supprime",deletTodo})
})
export default router