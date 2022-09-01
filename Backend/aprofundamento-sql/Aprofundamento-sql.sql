USE`hooks-4313439-leandro-jesus`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Projects(
id VARCHAR(10) NOT NULL,
name VARCHAR(25) NOT NULL UNIQUE,
title VARCHAR(25) NOT NULL,
date DATE NOT NULL,

PRIMARY KEY(id)
);

INSERT INTO Projects (id, name, title, date)
VALUE("001", "LabeSky", "LSy", "2023/10/05"),
	 ("002", "LabeFy", "LFy", "2024/01/06"),
     ("003", "AstroZoom", "AZm", "2022/12/20");

ALTER TABLE Projects DROP COLUMN title;
ALTER TABLE Projects CHANGE date dueDate DATE NOT NULL;	
ALTER TABLE Projects ADD email VARCHAR(40) UNIQUE;
ALTER TABLE Projects ADD description VARCHAR(255) NOT NULL;

DESCRIBE Projects;

UPDATE Projects
SET description = "Cloud management system developed by Labenu."
WHERE id = "001";

UPDATE Projects
SET description = "Music management system developed by Labenu."
WHERE id = "002";

UPDATE Projects
SET description = "Class management system developed by Labenu."
WHERE id = "003";

SELECT *
FROM Projects
ORDER BY dueDATE DESC;

SELECT name, dueDate
FROM Projects
ORDER BY dueDATE ASC
LIMIT 2;

SELECT * FROM Projects

     