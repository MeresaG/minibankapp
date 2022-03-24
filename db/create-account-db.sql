DROP DATABASE IF EXISTS MiniBankApp;   
CREATE DATABASE IF NOT EXISTS MiniBankApp;   
USE MiniBankApp; 

DROP TABLE IF EXISTS Account; 

CREATE TABLE IF NOT EXISTS Account 
  ( 
     id         Varchar(11) PRIMARY KEY, 
     name   VARCHAR(25) NOT NULL, 
     accountType   VARCHAR(60) NOT NULL
  ); 