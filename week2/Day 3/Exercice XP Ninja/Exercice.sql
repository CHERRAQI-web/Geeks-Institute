select * from film
select * from rental
select * from inventory

SELECT DISTINCT f.title
FROM film f
JOIN inventory i ON i.film_id = f.film_id
LEFT JOIN rental r ON r.inventory_id = i.inventory_id AND r.return_date IS NULL
WHERE f.rating IN ('G', 'PG')
  AND r.rental_id IS NULL;

CREATE TABLE enfants (
    enfant_id SERIAL PRIMARY KEY,
    nom TEXT NOT NULL
); 

CREATE TABLE liste_attente (
    attente_id SERIAL PRIMARY KEY,
    enfant_id INT REFERENCES enfants(enfant_id),
    film_id INT REFERENCES film(film_id),
    date_demande TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    statut TEXT DEFAULT 'en_attente'
);

select f.title, count(l.attente_id) as nombre_personnes from liste_attente l 
inner join film f on f.film_id=l.film_id where statut='en_attente' group by f.title


-- Ajouter des enfants
INSERT INTO enfants (nom) VALUES ('AZIZA'), ('MARIEM'), ('MAROUA');

-- Simuler des demandes d'attente
INSERT INTO liste_attente (enfant_id, film_id) VALUES
														(1, 42), 
														(2, 42),
														(3, 51); 
