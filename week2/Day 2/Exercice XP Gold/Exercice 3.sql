create table purchases (id  SERIAL primary key ,customer_id int,item_id int,
quantity_purchased int,foreign key (customer_id) references customers(id), 
foreign key (item_id) references items(id))

select * from customers
select * from items
insert into purchases (customer_id, item_id, quantity_purchased)
values (
    (select id from customers where first_name = 'Scott' and last_name = 'Scott'),
    (select id from items where article = 'Ventilateur'),
    1
);

insert into purchases (customer_id, item_id, quantity_purchased)
values (
    (select id from customers where first_name='Melanie ' and last_name='Johnson'),
    (select id from items where article = 'Grand bureau'),
    10
);
insert into purchases (customer_id, item_id, quantity_purchased)
values (
    (select id from customers where first_name = 'Greg' and last_name = 'Jones'),
    (select id from items where article = 'Petit bureau'),
   2
); 
select * from purchases
select c.first_name,C.last_name,p.item_id,p.quantity_purchased from purchases p join customers c on c.id=p.customer_id
select * from purchases where customer_id=5
select p.* from purchases p join items i on i.id=p.item_id where article in ('Petit bureau','Grand bureau')

select c.first_name,c.last_name,i.article from customers c 
join purchases p on p.customer_id=c.id join items i on i.id=p.item_id

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (3, NULL, 1);
--