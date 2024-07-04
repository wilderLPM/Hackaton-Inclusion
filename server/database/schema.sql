DROP DATABASE IF EXISTS echo;
CREATE DATABASE echo;

USE echo;

CREATE TABLE cv (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    tel VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    experience TEXT NOT NULL,
    formation TEXT NOT NULL,
    skills TEXT NOT NULL,
    profil TEXT NOT NULL,
    age INT NOT NULL,
    musique TEXT
)