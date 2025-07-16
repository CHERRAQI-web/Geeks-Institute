const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums"
      ];
const getData = async function() {
    try {
        const [usersResponse, postsResponse, albumsResponse] = await Promise.all(
            urls.map(async (url) => {
                const response = await fetch(url); 
                return await response.json(); 
            })
        );

        // Log des données récupérées
        console.log ('oooooops')
        console.log('users', usersResponse);
        console.log('posts', postsResponse);
        console.log('albums', albumsResponse);
    } catch (error) {
        console.error('Une erreur est survenue:', error);
    }
}

getData()