--1
select count(*),rating from film group by rating
--2
select * from film where rating in ('G','PG-13')and length<120 and rental_rate<3.0 order by title
--3
select * from customer where customer_id=1
update customer set first_name='AZIZA' where customer_id=1
--4
update address set address='24 ANASSI CASA' where address_id=1
select * from address where address_id=1
