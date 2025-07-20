--1
select * from language
select * from film
--2
select f.title,f.description ,l.name from film f inner join language l on l.language_id=f.language_id
--3
select f.title,f.description ,l.name from language l left join film f on l.language_id=f.language_id
--4
create table new_film(id_film serial primary key,nom varchar(255))
insert into new_film(nom) values('Maleficent'),('cruella')
--5
create table customer_review (review_id serial primary key,
film_id int,language_id int,titre varchar(255),score int check (score between 1 and 10),
review_text varchar(255),last_update date,foreign key(film_id)references new_film (id_film)on delete cascade
,
foreign key (language_id)references language(language_id)on delete cascade
 )

--6
drop table customer_review
select * from customer_review
insert into customer_review(film_id,language_id,titre,score,review_text,last_update)values(2,1,' Maléfique : la lumière derrière l’ombre Maléfique : la lumière derrière l’ombre',9,'Un film magnifique. Angelina Jolie incarne une Maléfique complexe et touchante. ','15/04/2025')
insert into customer_review (film_id,language_id,titre,score,review_text,last_update)values(1,2,'Cruella : entre couture et vengeance ',6,' " est un film qui redonne vie à un personnage maléfique sous un angle humain. ','26/06/2025')

--7
delete from new_film where id_film=2
select * from customer_review
-- Toutes les critiques liées à ce film (avec film_id = 2) seront supprimées automatiquement.




