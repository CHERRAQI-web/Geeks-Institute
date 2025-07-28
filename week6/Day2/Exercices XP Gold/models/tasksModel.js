import client  from "../config/db.js";

const getAlltasks=async()=>{
    const result =await client.query("SELECT * FROM tasks");
    return result.rows
}
const getTaskById=async(id)=>{
    const result= await client.query("SELECT * FROM tasks WHERE id=$1",[id])
    return result.rows[0]
}
const creatTask=async(title,completed)=>{
    const result=await client.query("INSERT INTO tasks (title,completed) VALUES ($1,$2) RETURNING *",[title,completed])
    return result.rows[0]
}
const updateTask=async(id,title,completed)=>{
    const result=await client.query("UPDATE tasks SET title=$1,completed=$2 WHERE id=$3 RETURNING *",[title,completed,id])
    return result.rows[0]
}
const deleteTask=async(id)=>{
    const result=await client.query("DELETE FROM tasks WHERE id=$1",[id]);
    return result.rows[0]
}
export default {getAlltasks,getTaskById,creatTask,updateTask,deleteTask}