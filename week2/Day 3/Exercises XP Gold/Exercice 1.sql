select * from film
select * from rental
select * from customer
---1
select distinct f.* from film f  
join inventory i on f.film_id=i.film_id 
join rental r on r.inventory_id=i.inventory_id
where r.return_date is null

---2	
select  c.customer_id, c.first_name, c.last_name from customer c inner join  rental r on c.customer_id=r.customer_id
where r.return_date is null group by  c.customer_id, c.first_name, c.last_name

----3
--Commencer par la table film
--Joindre film_actor pour associer chaque film à ses acteurs
--Joindre actor pour filtrer Joe Swank
--Joindre film_category pour les catégories du film
--Joindre category pour filtrer Action
select f.* from film f inner join film_actor fa on fa.film_id=f.film_id inner join actor a on a.actor_id=fa.actor_id 
inner join film_category fc on fc.film_id=f.film_id inner join category c on c.category_id=fc.category_id where a.first_name='Joe' and a.last_name='Swank'

