CREATE DATABASE Challenge
create Table actors(nom VARCHAR(255),prenom VARCHAR(255))
insert into actors values('Greg' ,'Jones'),
					('Sandra' ,'Jones')

select count(*) as "le nombre des acteurs" from actors

insert into actors values('' ,'') 
--Les champs ont accepté des valeurs nulles car je n’ai pas précisé qu’ils ne doivent pas accepter les valeurs nulles.
select * from actors