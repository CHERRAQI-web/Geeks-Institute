---1
select * from customer
--2
select  ( first_name , last_name ) as full_name from customer
--3
select distinct create_date from customer
--4
select * from customer order by first_name desc
--5
select * from film
select film_id,title,description,release_year,rental_rate from film order by rental_rate 
--6
select *from address
select address,phone from address where district='Texas'
--7
select * from film where film_id in(15,150)
--8
select film_id,title,description,length,rental_rate from film where title='maleficent'
--9
select film_id,title,description,length,rental_rate from film where title='ma%'
--10
select * from film order by rental_rate asc limit 10
--11
select * from film order by rental_rate asc offset 10 rows fetch next 10 rows only
--12
select * from payment 
select c.customer_id ,c.last_name,c.first_name,p.amount from customer c
inner join payment p on c.customer_id=p.customer_id order by c.customer_id;
--13
select * from inventory

select * from film where film_id not in (select distinct film_id from inventory )

--14
select * from city
select * from country

--15
select * from customer