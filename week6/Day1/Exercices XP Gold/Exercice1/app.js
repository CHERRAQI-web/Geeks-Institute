import express from "express";
import index from "./routes/post.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use("/", index);

app.listen(port, () => {
console.log(`http://localhost:${port}`);
});
