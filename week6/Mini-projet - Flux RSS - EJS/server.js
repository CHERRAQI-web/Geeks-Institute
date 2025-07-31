import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Parser from 'rss-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Middlewares pour parser le corps des requêtes - DOIVENT être avant les routes
app.use(express.json()); // Pour parser le JSON
app.use(express.urlencoded({ extended: true })); // Pour parser les formulaires
app.use(cors()); // Pour gérer les CORS

let parser = new Parser();
(async () => {
  let feed = await parser.parseURL('https://thefactfile.org/feed/');
  console.log(feed.title);
  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });
})();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/pages')); // Définir le dossier des pages

async function getArticles() {
    try {
        const rssUrl = 'https://thefactfile.org/feed/';
        const feed = await parser.parseURL(rssUrl);
        
        return feed.items.map(item => ({
            title: item.title,
            link: item.link,
            postDate: new Date(item.pubDate).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }),
            creator: item.author || 'Auteur inconnu',
            category: item.categories ? item.categories.join(', ') : 'Non spécifiée',
            content: item.contentSnippet || 'Aucun contenu disponible'
        }));
    } catch (error) {
        console.error('Erreur lors de la récupération du flux RSS:', error);
        return [];
    }
}

// Route principale
app.get('/', async (req, res) => {
    try {
        const articles = await getArticles();
        res.render('index', { articles, title: 'Accueil' });
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).send('Une erreur est survenue');
    }
});

app.get('/search', async (req, res) => {
    try {
        // Afficher la page de recherche sans message au départ
        res.render('search', { 
            articles: [], 
            title: 'Recherche'
        });
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).send('Une erreur est survenue');
    }
});

app.post('/search/title', async (req, res) => {
    try {
        console.log('=== Traitement de /search/title ===');
        console.log('req.body:', req.body);
        
        // Vérification plus détaillée
        if (!req.body) {
            console.log('req.body est undefined');
            return res.status(400).render('search', { 
                articles: [], 
                title: 'Recherche',
                searchMessage: 'Erreur: req.body est undefined. Vérifiez les middlewares.'
            });
        }
        
        if (Object.keys(req.body).length === 0) {
            console.log('req.body est vide');
            return res.status(400).render('search', { 
                articles: [], 
                title: 'Recherche',
                searchMessage: 'Erreur: req.body est vide. Vérifiez le formulaire.'
            });
        }
        
        const { title } = req.body;
        console.log('Titre extrait:', title);
        
        if (!title || title.trim() === '') {
            return res.render('search', { 
                articles: [], 
                title: 'Recherche',
                searchMessage: 'Veuillez entrer un titre pour la recherche.'
            });
        }
        
        const articles = await getArticles();
        const filteredArticles = articles.filter(article =>
            article.title.toLowerCase().includes(title.toLowerCase())
        );
        
        let searchMessage;
        if (filteredArticles.length === 0) {
            searchMessage = `Aucun article trouvé avec le titre contenant "${title}".`;
        } else {
            searchMessage = `${filteredArticles.length} article(s) trouvé(s) avec le titre contenant "${title}".`;
        }
        
        console.log('Résultats trouvés:', filteredArticles.length);
        
        res.render('search', { 
            articles: filteredArticles, 
            title: 'Résultats de recherche',
            searchMessage
        });
    } catch (error) {
        console.error('Erreur lors de la recherche par titre:', error);
        res.status(500).render('search', { 
            articles: [], 
            title: 'Erreur',
            searchMessage: 'Une erreur est survenue lors de la recherche'
        });
    }
});

app.post('/search/category', async (req, res) => {
    try {
        console.log('Requête reçue:', req.body); // Débuggage
        
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).render('search', { 
                articles: [], 
                title: 'Recherche',
                searchMessage: 'Erreur: Les données du formulaire n\'ont pas été reçues.'
            });
        }
        
        const { category } = req.body;
        
        if (!category || category.trim() === '') {
            return res.render('search', { 
                articles: [], 
                title: 'Recherche',
                searchMessage: 'Veuillez sélectionner une catégorie pour la recherche.'
            });
        }
        
        const articles = await getArticles();
        const filteredArticles = articles.filter(article =>
            article.category.toLowerCase().includes(category.toLowerCase())
        );
        
        let searchMessage;
        if (filteredArticles.length === 0) {
            searchMessage = `Aucun article trouvé dans la catégorie "${category}".`;
        } else {
            searchMessage = `${filteredArticles.length} article(s) trouvé(s) dans la catégorie "${category}".`;
        }
        
        res.render('search', { 
            articles: filteredArticles, 
            title: 'Résultats de recherche',
            searchMessage
        });
    } catch (error) {
        console.error('Erreur lors de la recherche par catégorie:', error);
        res.status(500).render('search', { 
            articles: [], 
            title: 'Erreur',
            searchMessage: 'Une erreur est survenue lors de la recherche'
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});