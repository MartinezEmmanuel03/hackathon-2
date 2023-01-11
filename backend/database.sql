CREATE TABLE
    vehicule (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        lieu varchar(255) NOT NULL,
        dateDispo DATE NOT NULL,
        disp BOOLEAN NOT NULL,
        typeV varchar(255) NOT NULL,
        prix INT NOT NULL,
        photo VARCHAR(1000) NOT NULL,
        ficheTech varchar(255) NOT NULL,
        squad INT NOT NULL,
        nameV varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    vehicule (
        id,
        lieu,
        dateDispo,
        disp,
        typeV,
        prix,
        photo,
        ficheTech,
        squad,
        nameV
    )
VALUES (
        1,
        'somwhere',
        "2010-10-10",
        1,
        "futur",
        10,
        "https://trustmyscience.com/wp-content/uploads/2016/12/star-wars-%C3%A9toile-noire-816x625.jpg",
        "description",
        150,
        "Etoile noire"
    );

CREATE TABLE
    users (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        email varchar(255) NOT NULL,
        password varchar(255) NOT NULL,
        role varchar(255) NOT NULL,
        location varchar(255) NOT NULL,
        name varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    users(
        id,
        email,
        password,
        role,
        location,
        name
    )
VALUES (
        1,
        "jean@gmail.com",
        "password123",
        1,
        "mars",
        "jean"
    );

CREATE TABLE
    commentary (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        id_users INT NOT NULL,
        Foreign Key (id_users) REFERENCES users(id),
        id_vehicule INT NOT NULL,
        Foreign Key (id_vehicule) REFERENCES vehicule(id),
        commentV varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;