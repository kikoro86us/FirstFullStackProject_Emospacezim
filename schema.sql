CREATE TABLE services(
id serial PRIMARY key,
option VARCHAR(5) UNIQUE ,
price INT,
highlight VARCHAR(5) ,
phototime VARCHAR(5),
wedding VARCHAR(5),
waitingroom VARCHAR(5),
traditional VARCHAR(5),
interview VARCHAR(5),
reception VARCHAR(5),
makeup VARCHAR(5)
)

INSERT INTO services(option,price,highlight,phototime,wedding,waitingroom,traditional,interview,reception,makeup)
VALUES
('a',500,'y','y','y','y','n','n','n','n'),
('b',600,'y','y','y','y','y','n','n','n'),
('c',650,'y','y','y','y','y','y','y','n'),
('d',700,'y','y','y','y','n','n','n','y'),
('e',750,'y','y','y','y','y','n','n','y'),
('f',800,'y','y','y','y','y','y','y','y');

CREATE TABLE customer
(
id serial PRIMARY key,
name varchar(20),
email VARCHAR(30),
option VARCHAR (5)REFERENCES services(option),
phonenumber VARCHAR (20)
)


INSERT INTO customer(name,email,option,phonenumber)
VALUES
('Matt','kikoro86us@gmail.com','d','801-123-4567'),
('Chester','bowwowbowwow@gmail.com','c','801-233-1111'),
('Chance','chanceccc@gmail.com','f','801-888-2222'),
('Lee','leeleelee@gmail.com','e','801-666-7777'),
('Park','parkparkpark@gmail.com','b','801-999-3333'),
('Sosoon','sosoon@gmail.com','a','010-333-6666'),
('Choi','choi@gmail.com','f','010-666-0000');