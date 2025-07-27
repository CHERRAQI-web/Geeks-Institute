// import express from 'express';
// import {Client, Result} from 'pg';

// const app=express();
// const port=3000;

// const client=new Client({
//         user:"postgres",
//         host:"localhost",
//         database:"data",
//         password:"cherraqi",
//         port: 5432   
// } )

// client.connect().then(()=>console.log("Connected to PostgreSQL"))
// .catch((error)=>console.error('Error connecting to PostgreSQL', error));



// app.use(express.json())


// app.get('/posts',async(req,res)=>{
//     try{
//         const result=await client.query("select * from posts");
//         res.status(200).json(result.rows)
//     }catch(error){
//         console.error("Error fetching posts:", error);
//         res.status(400).json({message:"Error fetching posts", error})
//     }
    
// })
// app.get('/posts/:id',async(req,res)=>{
//     try{
//         const PostId=parseInt(req.params.id)
        
//         // Vérifier si l'ID est valide
//         if (isNaN(PostId)) {
//         return res.status(400).json({ message: "Invalid ID format" });
//         }
//     const result = await client.query("SELECT * FROM posts WHERE id = $1", [PostId]);
//          if (result.rows.length === 0) {
//         return res.status(404).json({ message: "Post not found" });
//     }
//         res.status(200).json(result.rows[0])
//     }   catch(error){
//         console.error("Error fetching posts:", error);
//         res.status(400).json({message:"Error fetching posts", error})
//     }
// })

// app.post('/posts', async(req,res)=>{
//     try{
//     const {title,content}=req.body;
//     if(!title||!content){
//        return res.status(400).json({ message: "Please provide both title and content." });
//     }
//     const insertion=await client.query("INSERT INTO posts(title,content)  values($1, $2) RETURNING *",[title ,content])
//      res.status(201).json(insertion.rows[0])
//     }catch(error){
//         console.error("Error inserting post::", error);
//         res.status(400).json({message:"Error inserting post", error})
//     }
// })
// app.put('/posts/:id',async(req,res)=>{
//     try{
//         const postId=parseInt(req.params.id)
//         if(!title||!content){
//             return res.status(400).json({ message: "Please provide both title and content." });
//     //         const {title,content}=req.body;
    // }
// const modification = await client.query(
//             "UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *", 
//             [title, content, postId]
//         );  
//           res.status(201).json(modification.rows);
//     }catch(error){
//          console.error("Error modification post::", error);
//         res.status(400).json({message:"Error modification post", error})
//     }
// })

// app.delete('/posts/:id',async(req,res)=>{
//     try{
//     const postId=parseInt(req.params.id)
        
//          const result = await client.query(
//             "DELETE FROM posts WHERE id = $1 RETURNING *", 
//             [postId]
//         );  
//           res.status(201).json({message:"post est supprimer"});
//     }catch(error){
//          console.error("Error Deleting post::", error);
//         res.status(400).json({message:"Error Deleting post", error})
//     }
// })
// app.listen(port,()=>{
//     console.log(`vous avez connecter sur http://localhost:${port}`)
// })

import express from 'express';
import postRoutes from './routes/postRoutes.js'
const app = express();
const port = 3000;

app.use(express.json());

app.use('/posts', postRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
