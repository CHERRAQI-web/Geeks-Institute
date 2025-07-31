import express from 'express';
import userRoute from './routes/usersRoutes.js';


const app=express();
app.use(express.json());
app.use('/', userRoute)
const port=3000;
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})