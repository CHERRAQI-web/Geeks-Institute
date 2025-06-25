create database bootcamp
create table students(id int GENERATED ALWAYS as IDENTITY  primary key ,
last_name varchar(255)not null,
first_name varchar(255)not null,birth_date date)

insert into students(last_name,first_name,birth_date) values
							('Bénichou','Marc','02/11/1998'),
							('Cohen	','Yoan','03/12/2010'),
							('Bénichou','Léa','27/07/1987'),
							('Dux','Amélie','07/04/1996'),
							('Grez	','David','14/06/2003'),
							('Simpson','Omer','03/10/1980')

select * from students
select last_name , first_name from students
select last_name , first_name from students where id=2
select last_name , first_name from students where last_name='Bénichou' and first_name='Marc'
select last_name , first_name from students where last_name='Bénichou' Or first_name='Marc'
select last_name , first_name from students where last_name='Bénichou' and first_name='Marc'
select last_name , first_name from students where first_name like '%a%'
select last_name , first_name from students where first_name like 'a%'
select last_name , first_name from students where first_name like '%a'
select last_name , first_name from students where first_name like '%a_'
select last_name , first_name from students where id=1 or id=3
select * from students where birth_date >='01/01/2000'