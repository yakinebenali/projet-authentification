   /*Generation Time*/
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
--
-- Database: `projetdsi2`
--

-- --------------------------------------------------------

--
--
-- Table structure for table `Users`
--

CREATE TABLE Users(
   userName VARCHAR(50),
   password VARCHAR(50) ,
   
   PRIMARY KEY(userName)
);

--
-- AUTO_INCREMENT for table `Users`
--
