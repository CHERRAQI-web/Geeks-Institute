--1
select * from customers order by first_name offset (select count(*) - 2 from customers
)limit 2
--2
delete from purchases p where p.customer_id in (select id from customers where first_name='Scott')
--3
select * from customers where first_name='Scott'
--4
--Type de jointure utilisé : LEFT JOIN
select p.id,c.first_name,c.last_name,p.quantity_purchased
from purchases p left join customers c on c.id=p.customer_id
--5
--Type de jointure utilisé : inner join
select c.first_name,c.last_name,p.id from customers c inner join purchases p on c.id=p.customer_id where c.first_name<>'Scott'
