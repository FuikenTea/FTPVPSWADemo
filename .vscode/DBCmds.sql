
DROP TABLE communities;


CREATE TABLE Communities (
     community_id INT PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR (50),
     about VARCHAR (50),
     logo VARCHAR (50)
    
     );

CREATE TABLE Leagues (
     league_id INT PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR (50),
     team_size INT,
     community_id INT, 
     slotToMetaMap VARCHAR(500)
    
     );

CREATE TABLE Tournaments ( 
    tournament_id INT PRIMARY KEY AUTO_INCREMENT,
    tournament_name VARCHAR(50),
    nu_of_teams INT, 
    format_id INT,
    metas VARCHAR(50)
);


CREATE TABLE Metas(
    meta_id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(50), 
    cp_limit INT
    
);

CREATE TABLE Teams ( 
    team_id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(50),
    activeTournaments VARCHAR(50)

);

CREATE TABLE Player ( 
    player_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(500),
    member_Of INT,
    discordId VARCHAR,
    friendCode VARCHAR

);


DELETE 
FROM communities


INSERT INTO communities (Name)
VALUES ('Battle Frontier'),('Gym Breakers'),('Merciless');

INSERT INTO Leagues (Name,community_id)
VALUES ('Battle Frontier Team',1),('Gym Breakers Team',2), ('Mercielss Team',3),('Battle Frontier Solo',1);

INSERT INTO metas (  name, cp_limit)
VALUES ('Open Great League', 1500),('Open Ultra League', 2500), ('Open Master League',10000),('Savannah',1500),('Aurora',1500),('Merciless',1500)

INSERT INTO Tournaments (tournament_name,nu_of_teams,metas,format_id)
VALUES ('BattleFrontier-Legendary-Cycle1',8,'1,2,3,4,5',1),('BattleFrontier-Champion-Cycle1',8,'1,2,3,4,5',1),('BattleFrontier-Elite-Cycle1',8,'1,2,3,4,5',1),('BattleFrontier-Expert-Cycle1',8,'1,2,3,4,5',1),('Merciless Cup',500,'6',3)

INSERT INTO Teams (name, activeTournaments)
VALUES ('Bark Town Boomers',2),('TSwift Fan Club',4),('Enter the 151 Chambers',5)

