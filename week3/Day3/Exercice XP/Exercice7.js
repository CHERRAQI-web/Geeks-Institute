let allBooks=[ {
        titre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        image: "https://upload.wikimedia.org/wikipedia/fr/7/70/Le_Petit_Prince.jpg",
        alreadyRead: true
    },
    {
        titre: "L'Étranger",
        auteur: "Albert Camus",
        image: "https://upload.wikimedia.org/wikipedia/fr/1/10/L%27%C3%89tranger_-_Albert_Camus.png",
        alreadyRead: false
    }]

let listBooks = document.getElementsByClassName("listBooks")[0]
for(let i=0;i<allBooks.length;i++){
    let book = allBooks[i];
    let bookDiv = document.createElement("div");
        let bookText = document.createElement("p");

    bookDiv.textContent = `${book.titre}, écrit par ${book.auteur}`;
    // Créer l'image
    let bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.style.width = "100px";

     if (book.alreadyRead) {
        bookText.style.color = "red";
    }
     bookDiv.appendChild(bookText);
    bookDiv.appendChild(bookImage);

    // Ajouter le div dans la liste
    listBooks.appendChild(bookDiv);
}