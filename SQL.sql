Create table Employee_detail(
Employee_id int primary key,
Firest_name varchar(88),
Last_name varchar,
Age int,
Email_id varchar)

Insert into Employee_detail values
(1, 'Gerald', 'Briyolan', 23, 'gerald@gmail.com');

insert into Employee_detail (Employee_id,
Firest_name,
Last_name,
Age,
Email_id)values
(2, 'Ger', 'Briyo', 24, 'ger@gmail.com');

insert into Employee_detail values
(3, 'Ram', 'Kumar', 23, 'Ram@gmail.com'),
(4, 'A', 'B', 27, 'AB@gmail.com'),
(5, 'C', 'D', 26, 'CD@gmail.com'),
(6, 'E', 'F', 27, 'EF@gmail.com');

ALTER TABLE Employee_detail RENAME COLUMN Firest_name TO First_name;

-- To add a column
Alter table Employee_detail
add phone varchar;

-- For updating a values
update Employee_detail set first_name ='gerald b' where age =23;

--to drop a column
ALTER TABLE Employee_detail
DROP COLUMN Age;

Delete from Employee_detail
where first_name='Ram';

-- conditions
select * from Employee_detail
where age>20;
where age<25
where age=23
where age!=23
where age between 23 and 30

-- select
select first_name from Employee_detail;
select distinct first_name from Employee_detail
select count(distinct last_name) from Employee_detail

--Orderby
select * from Employee_detail
order by first_name;
order by first_name Desc;
order by first_name asc;

--limit
select * from Employee_detail
LIMIT 2;
LIMIT 20 OFFSET 40;  --limit is 20 but it starts from 41

select MIN(age)FROM Employee_detail;
select Max(age)FROM Employee_detail;

select SUM(quantity)FROM Employee_detail;
select AVG(quantity)FROM Employee_detail;

select * from Employee_detail
WHERE country IN ('Germany', 'France', 'UK');
WHERE country NOT IN ('Germany', 'France', 'UK');

SELECT * FROM customers
JOIN orders ON customers.customer_id = orders.customer_id;

SELECT customers.name, orders.product
FROM customers
INNER JOIN orders ON customers.customer_id = orders.customer_id;

SELECT customers.name, orders.product
FROM customers
LEFT JOIN orders ON customers.customer_id = orders.customer_id;

SELECT customers.name, orders.product
FROM customers
RIGHT JOIN orders ON customers.customer_id = orders.customer_id;

SELECT COUNT(customer_id), country FROM customers
GROUP BY country;

SELECT product, SUM(quantity) AS total_quantity FROM sales
GROUP BY product;

SELECT product, SUM(quantity) AS total_quantity FROM sales
GROUP BY product
HAVING SUM(quantity) > 4;

Create table Employee_detail(
Employee_id int primary key,
Firest_name varchar(88),
Last_name varchar)

CREATE TABLE employees (
    department_id INT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL
    employee_id INT,
    FOREIGN KEY (employee_id) REFERENCES departments(employee_id)
);
