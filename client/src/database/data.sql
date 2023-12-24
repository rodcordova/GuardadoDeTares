--  Base de datos
CREATE DATABASE IF NOT EXISTS tasksdata;
DROP DATABASE tasksdata;

use tasksdata;

-- Tacla
CREATE TABLE task(
	id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) DEFAULT NULL UNIQUE,
    description VARCHAR(45),
    PRIMARY KEY(id)
);
ALTER TABLE task ADD dificult VARCHAR(20); -- AGREGAR
ALTER TABLE task MODIFY COLUMN dificult INT;-- MODIFICAR
DROP TABLE task;

INSERT INTO task VALUES
(1,'las abejas',"son perezosas"),
(2,'henry',"es un manco"),
(3,'sam',"no sabe");

-- Vistas
CREATE VIEW todo AS SELECT * FROM task;
DROP VIEW todo;

SELECT *FROM task;