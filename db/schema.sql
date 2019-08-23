DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;

create table burgers (
	id integer(10) auto_increment not null,
    burger_name varchar(150) not null,
    devoured boolean not null default 0,
    primary key (id)
);