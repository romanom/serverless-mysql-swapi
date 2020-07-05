CREATE TABLE `db_swapi`.`people` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `birth_year` VARCHAR(100) NOT NULL,
  `eye_color` VARCHAR(100) NOT NULL,
  `gender` VARCHAR(100) NOT NULL,
  `hair_color` VARCHAR(100) NOT NULL,
  `height` VARCHAR(100) NOT NULL,
  `homeworld` VARCHAR(100) NOT NULL,
  `mass` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `skin_color` VARCHAR(100) NOT NULL,
  `created` VARCHAR(100) NOT NULL,
  `edited` VARCHAR(100) NULL DEFAULT NULL,
  `url` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=100;
  
  
  CREATE TABLE `db_swapi`.`people_relation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `people_id` VARCHAR(100) NOT NULL,
  `relation` VARCHAR(100) NOT NULL,
  `relation_id` VARCHAR(100) NOT NULL,
  `created` VARCHAR(100) NOT NULL,
  `edited` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`));
  
  
  CREATE TABLE `db_swapi`.`film` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created` VARCHAR(100) NOT NULL,
  `director` VARCHAR(100) NOT NULL,
  `edited` VARCHAR(100) NULL DEFAULT NULL,
  `episode_id` VARCHAR(100) NULL DEFAULT NULL,
  `opening_crawl` VARCHAR(100) NULL DEFAULT NULL,
  `producer` VARCHAR(100) NOT NULL,
  `release_date` VARCHAR(100) NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `url` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=10;
  
  CREATE TABLE `db_swapi`.`film_relation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `film_id` VARCHAR(100) NOT NULL,
  `relation` VARCHAR(100) NOT NULL,
  `relation_id` VARCHAR(100) NOT NULL,
  `created` VARCHAR(100) NOT NULL,
  `edited` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `db_swapi`.`planet` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `climate` VARCHAR(100) NOT NULL,
  `created` VARCHAR(100) NOT NULL,
  `diameter` VARCHAR(100) NOT NULL,
  `edited` VARCHAR(100) NULL DEFAULT NULL,
  `gravity` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `orbital_period` VARCHAR(100) NOT NULL,
  `population` VARCHAR(100) NOT NULL,
  `rotation_period` VARCHAR(100) NOT NULL,
  `surface_water` VARCHAR(100) NOT NULL,
  `terrain` VARCHAR(100) NOT NULL,
  `url` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`));
  
  
  
  
  CREATE TABLE `db_swapi`.`specie` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `average_height` VARCHAR(100) NOT NULL,
  `average_lifespan` VARCHAR(100) NOT NULL,
  `classification` VARCHAR(100) NOT NULL,
  `created` VARCHAR(100) NULL NULL,
  `designation` VARCHAR(100) NOT NULL,
  `edited` VARCHAR(100) NULL DEFAULT NULL,
  `eye_color` VARCHAR(100) NOT NULL,
  `hair_color` VARCHAR(100) NOT NULL,
  `homeworld` VARCHAR(100) NOT NULL,
  `language` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `skin_colors` VARCHAR(100) NOT NULL,
  `url` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`));
  
  
  CREATE TABLE `db_swapi`.`starship` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `MGLT` VARCHAR(100) NOT NULL,
  `cargo_capacity` VARCHAR(100) NOT NULL,
  `consumables` VARCHAR(100) NOT NULL,
  `cost_in_credits` VARCHAR(100) NOT NULL,
  `created` VARCHAR(100) NULL NULL,
  `crew` VARCHAR(100) NOT NULL,
  `edited` VARCHAR(100) NULL DEFAULT NULL,
  `hyperdrive_rating` VARCHAR(100) NOT NULL,
  `length` VARCHAR(100) NOT NULL,
  `manufacturer` VARCHAR(100) NOT NULL,
  `max_atmosphering_speed` VARCHAR(100) NOT NULL,
  `model` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `passengers` VARCHAR(100) NOT NULL,
  `startship_class` VARCHAR(100) NOT NULL,
  `url` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`));
  
	CREATE TABLE `db_swapi`.`vehicle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cargo_capacity` VARCHAR(100) NOT NULL,
  `consumables` VARCHAR(100) NOT NULL,
  `cost_in_credits` VARCHAR(100) NOT NULL,
  `created` VARCHAR(100) NULL NULL,
  `crew` VARCHAR(100) NOT NULL,
  `edited` VARCHAR(100) NULL DEFAULT NULL,
  `length` VARCHAR(100) NOT NULL,
  `manufacturer` VARCHAR(100) NOT NULL,
  `max_atmosphering_speed` VARCHAR(100) NOT NULL,
  `model` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `passengers` VARCHAR(100) NOT NULL,
  `vehicle_class` VARCHAR(100) NOT NULL,
  `url` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`));
  
  

  
  

