CREATE TABLE
    users (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        email varchar(255) NOT NULL,
        password varchar(255) NOT NULL,
        role varchar(255) NOT NULL,
        location varchar(255) NOT NULL,
        nameU varchar(255) NOT NULL,
        firstnameU varchar(255)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO users(email,password,role,location,nameU,firstnameU)VALUES ("jeandupond@gmail.com","password123","Administration","Paris","Dupond", "Jean");
INSERT INTO users(email,password,role,location,nameU,firstnameU)VALUES ("Moviecarscentral@gmail.com","password123","Entreprise","Moissy-Cramayel","Movie cars central", "");
INSERT INTO users(email,password,role,location,nameU,firstnameU)VALUES ("Seriecars@gmail.com","password123","Entreprise","Lille","Serie cars", "");
INSERT INTO users(email,password,role,location,nameU,firstnameU)VALUES ("Specific cars@gmail.com","password123","Entreprise","Nantes","Specific cars", "");
INSERT INTO users(email,password,role,location,nameU,firstnameU)VALUES ("isabellefournier@gmail.com","password123","Utilisateur","Nantes","Fournier", "Isabelle");
INSERT INTO users(email,password,role,location,nameU,firstnameU)VALUES ("vincentdurand@gmail.com","password123","Utilisateur","Lyon","Durand", "Vincent");
INSERT INTO users(email,password,role,location,nameU,firstnameU)VALUES ("pascalMartin@gmail.com","password123","Utilisateur","Strasbourg","Martin", "Pascal");

CREATE TABLE
    vehicule (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        lieu varchar(255) NOT NULL,
        dateDispo DATE NOT NULL,
        disp BOOLEAN NOT NULL,
        typeV varchar(255) NOT NULL,
        prix INT NOT NULL,
        photo VARCHAR(1000) NOT NULL,
        ficheTech varchar(255),
        nameV varchar(255) NOT NULL,
        film varchar(255) NOT NULL,
        id_users INT NOT NULL,
        FOREIGN KEY (id_users) REFERENCES users(id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Moissy-Cramayel',"2023-01-10",1,"Voiture",50,"public/assets/images/Aston_Martin_James_Bond.jpg","public/assets/ft/Aston_Martin_DB5.pdf","Aston Martin DB5","James Bond",2);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Moissy-Cramayel',"2023-01-10",1,"Voiture",50,"public/assets/images/bullit.jpg","public/assets/ft/bullit.pdf","Ford Mustang GT","Bullit",2);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Paris',"2023-01-10",1,"Voiture",50,"public/assets/images/Chevrolet-Camaro-Transformers.jpg","public/assets/ft/camaro_transformers.pdf","Bumblebee","Transformers",4);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Paris',"2023-01-10",1,"Moto",30,"public/assets/images/chips.jpg","public/assets/ft/chips.pdf","Kawazaki","Chips",3);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Moissy-Cramayel',"2023-01-10",1,"Voiture",20,"public/assets/images/choupette.jpg","public/assets/ft/Choupette.pdf","Choupette","Un amour de coccinelle",2);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Paris',"2023-01-10",1,"Voiture",35,"public/assets/images/christine.jpg","public/assets/ft/Christine.pdf","Christine","Christine",4);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Paris',"2023-01-10",1,"Voiture",15,"public/assets/images/colombo.jpg","public/assets/ft/colombo.pdf","Peugeot 403","Colombo",3);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Moissy-Cramayel',"2023-01-10",1,"Voiture",50,"public/assets/images/delorean.jpg","public/assets/ft/delorean.pdf","Delorean","Retour vers le futur",2);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Paris',"2023-01-10",1,"Voiture",50,"public/assets/images/Dodge-Charger_Fast-Furious.jpg","public/assets/ft/DODGE_CHARGER_fast_furius.pdf","Dodge Charger","Fast and furious",4);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Moissy-Cramayel',"2023-01-10",1,"Voiture",55,"public/assets/images/eleanor.jpg","public/assets/ft/eleanor.pdf","Eleanor","60 secondes chronos",2);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Paris',"2023-01-10",1,"Voiture",85,"public/assets/images/ford-gt40.jpg","public/assets/ft/FORD_GT40.pdf","Ford GT 40","Le Mans 66",4);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Paris',"2023-01-10",1,"Voiture",35,"public/assets/images/General-Lee.jpg","public/assets/ft/General_Lee.pdf","Dodge Charger","Cherif fait moi peur",3);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Moissy-Cramayel',"2023-01-10",1,"Voiture",25,"public/assets/images/sos-fantome.jpg","public/assets/ft/ghostbuster.pdf","Cadillac Miller-Meteor Futura","Ghostbusters",2);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Paris',"2023-01-10",1,"Fourgon",35,"public/assets/images/agence_toutrisque.jpg","public/assets/ft/GMC_Vandura.pdf","GMC Vantura","L'agence tous risques",3);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Paris',"2023-01-10",1,"4x4",15,"public/assets/images/Jurassic_parc.jpg","public/assets/ft/jurassic_parc.pdf","Jeep Wrangler","Jurassic parc",4);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Paris',"2023-01-10",1,"Voiture",25,"public/assets/images/KITT-K2000.jpg","public/assets/ft/k2000.pdf","Kitt","K2000",3);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Paris',"2023-01-10",1,"Voiture",45,"public/assets/images/Magnum.jpg","public/assets/ft/Magnum.pdf","Ferrari","Magnum",3);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Paris',"2023-01-10",1,"Voiture",25,"public/assets/images/starsky-hutch.jpg","public/assets/ft/starky_hutch.pdf","Ford Grand Torino","Starsky et Hutch",3);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Moissy-Cramayel',"2023-01-10",1,"Voiture",35,"public/assets/images/peugeot_406_taxi.jpg","public/assets/ft/taxi.pdf","Peugeot 406","Taxi",2);
INSERT INTO vehicule (lieu,dateDispo,disp,typeV,prix,photo,ficheTech,nameV,film,id_users)VALUES ('Paris',"2023-01-10",1,"Voiture",50,"public/assets/images/batmobile.jpg","","Batmobile","Batman",4);

CREATE TABLE
    commentary (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        id_users INT NOT NULL,
        Foreign Key (id_users) REFERENCES users(id),
        id_vehicule INT NOT NULL,
        Foreign Key (id_vehicule) REFERENCES vehicule(id),
        commentV varchar(255)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO commentary(id_users,id_vehicule,commentV)VALUES (5,1,"Voiture trés propre, aucune rayure. Mais manque un peu de frein. Je recommande");
INSERT INTO commentary(id_users,id_vehicule,commentV)VALUES (5,6,"");
INSERT INTO commentary(id_users,id_vehicule,commentV)VALUES (6,3,"Quelques rayures invisibles à l'écran.");
INSERT INTO commentary(id_users,id_vehicule,commentV)VALUES (6,8,"Problème sur l'ouverture de la portière papillon de droite. Tous les gadgets fonctionnent");
INSERT INTO commentary(id_users,id_vehicule,commentV)VALUES (6,12,"");
INSERT INTO commentary(id_users,id_vehicule,commentV)VALUES (7,10,"Voiture impecable.");
INSERT INTO commentary(id_users,id_vehicule,commentV)VALUES (7,15,"La voiture était trés bien comme le service de livraison.");
INSERT INTO commentary(id_users,id_vehicule,commentV)VALUES (7,18,"");
INSERT INTO commentary(id_users,id_vehicule,commentV)VALUES (7,19,"Voiture trés propre. Aucun problème mécanique");

