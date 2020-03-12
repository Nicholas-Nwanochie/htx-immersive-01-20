
-- CREATE DATABASE secondDB;

-- CREATE TABLE student (

--     name varchar,
--     website varchar,
--     github_username varchar,
--     points integer,
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean

-- );


-- CREATE TABLE student4 (
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar(15),
--     website varchar NOT NULL,
--     github_username varchar,
--     points integer,
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean

-- );

-- INSERT INTO student2 VALUES 

-- (DEFAULT,'Alina','digitalcrafts.com','AlinaNBelova', 5,'f', '2020-03-09', FALSE),
-- (DEFAULT,'Sean','digitalcrafts.com','SeanPage', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Alex','digitalcrafts.com','AlexFisher', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Richard','digitalcrafts.com','RichardZ', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Kazim','digitalcrafts.com','Kazim', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Alex','digitalcrafts.com','AlexPlaezer', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Austin','digitalcrafts.com','Austin', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Foorkan','digitalcrafts.com','FoorkanTwin', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Jaye','digitalcrafts.com','JayeJensen', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'John','digitalcrafts.com','JohnKearney', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Matthew','digitalcrafts.com','MatthewR', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Daniel','digitalcrafts.com','DanielD', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Diego','digitalcrafts.com','DiegoRivera', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Jesse','digitalcrafts.com','JesseM', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Meryem','digitalcrafts.com','Meryem', 5,'f', '2020-03-09', FALSE),
-- (DEFAULT,'Nicholas','digitalcrafts.com','Nwanochie', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Steven','digitalcrafts.com','StevenJ', 5,'m', '2020-03-09', FALSE),
-- (DEFAULT,'Daniela','digitalcrafts.com','DanielaA', 5,'f', '2020-03-09', FALSE),
-- (DEFAULT,'Veronica','digitalcrafts.com','veronicalino2015', 5,'f', '2020-03-09', FALSE);


-- SELECT * FROM student2


-- SELECT * FROM student2  WHERE gender= 'm' AND name='Alex';

-- INSERT INTO student2 (name, github_username) VALUES('Josh', 'Joshua');

-- UPDATE student2 SET points = 100;

-- DELETE FROM student2 WHERE id = 24;

-- INSERT INTO student2 (name, points) VALUES ('Josh', 100);


-- CREATE TABLE student4 (
--   id SERIAL NOT NULL PRIMARY KEY,
--   name UNIQUE VARCHAR,
--   github VARCHAR,
--   points INTEGER DEFAULT 0,
--   start_date DATE,
--   graduated BOOLEAN DEFAULT FALSE
-- );

-- INSERT INTO student4 (name, github) VALUES ('Jason', 'JEphraim');

-- SELECT name, github_username FROM student2 WHERE name='Alex';

-- SELECT name, points  FROM student2 WHERE points > 50;

-- SELECT * FROM student2 WHERE name ilike '%al%';

-- SELECT * FROM student2 WHERE website is NULL

-- ALTER TABLE student2 ADD last_name varchar(15);

-- ALTER TABLE student2 DROP COLUMN last_name;

-- ALTER TABLE student2 ALTER COLUMN name TYPE varchar(15);

-- SELECT COUNT(*) FROM student2 WHERE name='Alex';

-- SELECT MIN(points) FROM student2;

-- SELECT * FROM student2 ORDER BY name ASC LIMIT 5 OFFSET 5;

-- SELECT * FROM student2 ORDER BY name ASC LIMIT 5 OFFSET 5;




