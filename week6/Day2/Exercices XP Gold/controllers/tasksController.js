import tasksModel from "../models/tasksModel.js";

const getAlltasks=async(req,res)=>{
    try{
        const task=await tasksModel.getAlltasks();
        res.status(200).json(task)
    }catch(error){
         console.error('Error fetching task:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
const getTaskById=async(req,res)=>{
    try{
        const taskId=parseInt(req.params.id);
        const task=await tasksModel.getTaskById(taskId);
         res.status(200).json(task)
    }catch(error){
         console.error('Error fetching task:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
const createTask=async(req,res)=>{
    try{
        const {title,completed}=req.body;
          if (!title || completed === undefined) { 
            return res.status(400).json({ message: 'Title and completed are required' });
        }
        const task=await tasksModel.creatTask(title,completed);
        res.status(200).json({message:"task est creer"},task)
    }catch(error){
         console.error('Error creating task:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
const updateTask=async(req,res)=>{
    try{
        const taskId=parseInt(req.params.id);
        const {title,completed}=req.body;
        const task=await tasksModel.updateTask(taskId,title,completed);
        res.status(200).json({message:"task est modifier"},task)
    }catch(error){
         console.error('Error modifier task:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
const deleteTask=async(req,res)=>{
    try{
        const taskId=parseInt(req.params.id);
      
        const task=await tasksModel.deleteTask(taskId);
        res.status(200).json({message:"task est supprimer"},task)
    }catch(error){
         console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

export default{getAlltasks,getTaskById,createTask,updateTask,deleteTask}