select *from students order by  last_name limit 4
select * from students where birth_date=(select min(birth_date) from students)
select * from students where id in(3,4,5)