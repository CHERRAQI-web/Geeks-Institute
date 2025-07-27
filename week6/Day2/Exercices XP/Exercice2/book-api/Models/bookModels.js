import client from '../config/db.js';

const getAllBooks =async()=>{
    const result=await client.query("SELECT * FROM books")
    return result.rows;
}
const getBooksById=async(id)=>{
    const result=await client.query("SELECT * FROM books WHERE id = $1", [id])
    return result.rows[0]
}
const createBooks=async(title,author,publishedYear)=>{
    const result=await client.query('INSERT INTO books (title, author,publishedYear) VALUES ($1, $2,$3) RETURNING *',
            [title, author,publishedYear] );
    return result.rows[0];
}
const updateBook = async (id, title, author, publishedYear) => {
    const result = await client.query(
        'UPDATE books SET title=$1, author=$2, publishedYear=$3 WHERE id=$4 RETURNING *',
        [title, author, publishedYear, id]  // Ensure the correct order of arguments
    );
    return result.rows[0];
};
const deleteBook=async(id)=>{
    const result= await client.query('DELETE FROM books WHERE id=$1 RETURNING *',[id]);
    return result.rows[0]
}

export default {getAllBooks,getBooksById,createBooks,updateBook,deleteBook};