--1
select * from store
select * from address
select * from address
select * from customer

select s.store_id,c.city,co.country from store s 
inner join address a on a.address_id=s.address_id 
inner join city c on c.city_id=a.city_id
inner join country co on co.country_id=c.country_id

---2
select s.store_id ,sum(round(f.length/60.0, 2)) as Total_heure from film f inner join inventory i on i.film_id=f.film_id
inner join store s on s.store_id=i.store_id group by s.store_id

---3
select i.* from inventory i WHERE i.inventory_id NOT IN (
    SELECT r.inventory_id
    FROM rental r
    WHERE r.return_date IS NULL
);
---4
select c.* from customer c
inner join address a on a.address_id=c.address_id where a.city_id in
(select a.city_id from store s inner join address a on a.address_id=s.address_id)


--5

SELECT DISTINCT cu.*
FROM customer cu
JOIN address ca ON cu.address_id = ca.address_id
JOIN city c_city ON ca.city_id = c_city.city_id
WHERE c_city.country_id IN (
    SELECT DISTINCT s_city.country_id
    FROM store s
    JOIN address sa ON s.address_id = sa.address_id
    JOIN city s_city ON sa.city_id = s_city.city_id
);
---6
select * from category
select SUM(f.length) AS total
FROM film f
INNER JOIN film_category fc ON fc.film_id = f.film_id
INNER JOIN category c ON c.category_id = fc.category_id
WHERE 
    c.name != 'Horror'
    AND f.title NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
    AND f.description NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%']);
---7
select SUM(f.length) AS total_minute,  SUM(f.length) / 60.0 AS total_hours,
    SUM(f.length) / 1440.0 AS total_days
FROM film f
INNER JOIN film_category fc ON fc.film_id = f.film_id
INNER JOIN category c ON c.category_id = fc.category_id
WHERE 
    c.name != 'Horror'
    AND f.title NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
    AND f.description NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%']);
---list general
SELECT 
    SUM(length) AS total_minutes,
    SUM(length) / 60.0 AS total_hours,
    SUM(length) / 1440.0 AS total_days
FROM film;
