create table product_orders(orders_id serial primary key)
create table items(item_id serial primary key,prix float,orders_id int ,foreign key (orders_id) references product_orders(orders_id))

--function

create or replace function total_commande(id_commande int)
returns float AS $$
declare
    total float;
begin
    select sum(i.prix)
    INTO total
    FROM items i
    WHERE i.orders_id = orders_id;

    RETURN total;
END;
$$ LANGUAGE plpgsql;
--appel de function 

SELECT total_commande(1);
--4

create table users (users_id serial primary key,name varchar(255))
alter table product_orders add column user_id int

create or replace function total_commande_Users(id_commande int,user_id int)
returns float AS $$
declare
    total float;
begin
    select sum(i.prix)
    INTO total
    FROM items i
	join product_orders p on i.orders_id = p.orders_id
    WHERE i.orders_id = id_commande
	and p.user_id=users_id;

    RETURN COALESCE(total, 0);
END;
$$ LANGUAGE plpgsql;