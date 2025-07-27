import express from 'express';
import bookRoutes from './routes/bookRoutes.js'

const app=express();

const port=5000
app.use(express.json())
app.use('/api/books', bookRoutes)
app.listen(port,()=>{
    console.log(`Server running at http://localhost: ${port}`)
})