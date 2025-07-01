CREATE TABLE IF NOT EXISTS pays (
    id SERIAL PRIMARY KEY,
    nom TEXT UNIQUE,
    capitale TEXT,
    drapeau TEXT,
    sous_region TEXT,
    population BIGINT
);
