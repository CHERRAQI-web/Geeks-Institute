import axios from "axios";

async function getPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // Afficher le titre de chaque publication
    response.data.forEach(post => {
      console.log('- ' + post.title);
    });

  } catch (error) {
    console.error(' Erreur lors de la requête :', error.message);
  }
}

export default getPosts;
