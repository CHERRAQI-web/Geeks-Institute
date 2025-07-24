import express from 'express';
const router=express.Router();

const blogs =[]

router.get('/posts',(req,res)=>{
    res.status(200).json(blogs)
})
router.get('/posts/:id',(req,res)=>{
    const blogId=parseInt(req.params.id);
    const blog=blogs.find(b=>b.id===blogId);
    if(!blog){
       return res.status(404).json({message:"Article non trouvé"})
    }
    res.status(200).json(blog)
})
router.post('/posts',(req,res)=>{
    const {title, content}=req.body;
    if(!title||!content){
      return  res.status(400).json({message:"requis"})
    }
    const newBlog={
        id:blogs.length+1,
        title,
        content,
        timestamp:new Date().toISOString()
    }
      blogs.push(newBlog);

    res.status(201).json({message:"ajout avec succes",newBlog})
});

router.put('/posts/:id',(req,res)=>{
    const blogId=parseInt(req.params.id);
    const blog=blogs.find(b=>b.id===blogId);
    if(!blog){
        return res.status(404).json({message:"Article non trouvé"})
    }
    const {title, content}=req.body;
    if(!title||!content){
       return res.status(400).json({message:"requis"})
    }
    blog.title=title;
    blog.content=content;

    res.status(201).json({message:"modification avec succes",blog})
});

router.delete('/posts/:id',(req,res)=>{
    const blogId=parseInt(req.params.id);
    const blog=blogs.find(b=>b.id===blogId);
    if(!blog){
       return res.status(400).json({message:"existe pas"})
    }
    const index = blogs.findIndex(b => b.id === blogId);
const deletBlog = blogs.splice(index, 1)[0];
    res.status(200).json({message:"blog supprimer",deletBlog})


})
export default router;