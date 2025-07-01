CREATE TABLE IF NOT EXISTS utilisateurs (
    id SERIAL PRIMARY KEY,
    nom TEXT UNIQUE,
    mot_de_passe TEXT
);
