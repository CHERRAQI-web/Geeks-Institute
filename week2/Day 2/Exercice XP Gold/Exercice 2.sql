--Mise à jour
update students set birth_date= '02/11/1998' where first_name in ('Marc','Léa')and last_name='Bénichou'
select * from students 
update students set last_name='Guez' where first_name='David'
--Supprimer
delete from students where first_name='Léa' and last_name='Bénichou' 
--Compter
select count(*) as "Nombre d'étudiants" from students
select count(*) as "Nombre d'étudiants" from students where birth_date>'01/01/2000'
--Insérer / Modifier
alter table students add column math_grade int
update students set math_grade =80 where id=1
update students set math_grade =90 where id in(2,4)
update students set math_grade =80 where id=6
select count(*) from students where math_grade>83

insert into students(last_name,first_name,birth_date,math_grade)values('Simpson','Omer','03/10/1980',70)
select first_name,last_name,count(*) as total_grade from students
group by first_name,last_name 

select first_name,last_name,sum(math_grade) as total_grade from students
group by first_name,last_name
