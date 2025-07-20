---partie I
create table Customer (id serial primary key,first_name varchar(255),last_name  varchar(255) not null)
create table Customer_profile(id serial primary key,isLoggedIn BOOLEAN DEFAULT false, customer_id int, foreign key (customer_id) references Customer(id))
insert into Customer (first_name,last_name )values('John','Doe'),('Jerome','Lalu'),('Lea','Rive')
insert into Customer_profile(isLoggedIn,customer_id)values(true,1),(false,2)

select c.first_name from Customer c inner join Customer_profile cp on cp.customer_id=c.id where cp.isLoggedIn=true
select c.first_name from Customer c left join Customer_profile cp on cp.customer_id=c.id 
select sum(c.id) from Customer c where c.id in (select cp.customer_id from Customer_profile cp where  cp.isLoggedIn=false) 

---partie II
create table book (book_id SERIAL PRIMARY KEY,title varchar(255) NOT NULL,author varchar(255) NOT NULL)
insert into book(title,author)values('Alice In Wonderland','Lewis Carroll'),
									('Harry Potter','J.K Rowling'),
									('To kill a mockingbird','Harper Lee')

create table student (student_id SERIAL PRIMARY KEY,name varchar(255) NOT NULL UNIQUE, age int check( age<15))
insert into student(name,age) values('John',12),('Lera',11),('Patrick',10),('Bob',14)
CREATE TABLE library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

---6
insert into library values (1,1,'2022-02-15')
insert into library values (3,4,'2021-03-03'),(1,2,'2021-05-23'),(2,4,'2021-08-12')
--7
select * from library

select s.name,b.title from student s inner join library l on l.student_fk_id=s.student_id inner join book b on b.book_id=l.book_fk_id

select avg(s.age)as age_moyen from student s inner join library l on l.student_fk_id=s.student_id inner join book b on b.book_id=l.book_fk_id 
where b.title='Alice In Wonderland'

delete from student where student_id=1
select * from library
---student supprimer aussi sur la table library car on utilise cascade




