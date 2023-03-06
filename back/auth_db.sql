  /*Generation Time*/
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
--
-- Table structure for table `etudiants`
--


CREATE TABLE etudiants(
   id VARCHAR(50),
   name VARCHAR(50),
   email VARCHAR(50)unique ,
   password VARCHAR(255),
   
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(id)
   
);


--
-- AUTO_INCREMENT for table `etudiants`
--
ALTER TABLE `etudiants`
   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;