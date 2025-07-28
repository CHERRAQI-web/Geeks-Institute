import express from 'express';
const app=express();
import taskRoute from './routes/tasksRoutes.js';


app.use(express.json());
app.use('/api/todos', taskRoute)
const port=3000;
app.listen(port,()=>{
      console.log(`Server running at http://localhost:${port}`)
})