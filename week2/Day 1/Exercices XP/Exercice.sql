SELECT version();
CREATE DATABASE public;
create table items(article VARCHAR(255) , prix int);
insert into items values('Petit bureau' ,100),
						('Grand bureau' ,300),
						('Ventilateur' ,80)


create table customers(first_name VARCHAR(255) , last_name VARCHAR(255) );
insert into customers values('Greg' ,'Jones'),
							('Sandra' ,'Jones'),
							('Scott' ,'Scott'),
							('Trevor' ,'Green'),
							('Melanie ','Johnson')

select * from items
select * from items where prix >80
select * from items where prix <=300

select * from customers where last_name='Smith'
select * from customers where last_name='Jones'

select * from customers where not first_name = 'Scott'

alter table items add column id int GENERATED ALWAYS as IDENTITY  primary key
alter table customers add column id int GENERATED ALWAYS as IDENTITY  primary key

