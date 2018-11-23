-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2018 at 11:12 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10
--
-- Database: `catalogue`
--
CREATE SCHEMA IF NOT EXISTS `catalogue` DEFAULT CHARACTER SET utf8 ;
-- --------------------------------------------------------
--
-- Table structure for table `book`

CREATE TABLE `catalogue`.`book` (
  `Title` text NOT NULL,
  `Author` text NOT NULL,
  `Format` text NOT NULL,
  `Pages` text NOT NULL,
  `Publisher` text NOT NULL,
  `Language` text NOT NULL,
  `ISBN10` text NOT NULL,
  `ISBN13` text NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book`
--

INSERT INTO `catalogue`.`book` (`Title`, `Author`, `Format`, `Pages`, `Publisher`, `Language`, `ISBN10`, `ISBN13`, `id`) VALUES
('microsoft Azure1', 'Harper Lee', 'Paperback ', '260', 'Oxford University Press', 'French', '1524796978', '978-1524796982', 42),
('Dot Net', 'Nora Roberts', 'Paperback ', '220', 'Bloomsbury', 'French', '1524796979', '978-1524796983', 43),
('Operating Systems', 'Homer', 'Paperback', '190', 'Simon & Schuster', 'French', '1524796980', '978-1524796984', 44),
('Computer Networks', 'Anne Rice', 'Paperback', '310', 'John Wiley & Sons', 'English', '1524796981', '978-1524796985', 45),
('TIME2', 'Stefen King', 'Paperback', '268', 'Penguin Random House ', 'French', '1524796973', '978-1524796977', 49),
('Java Beginners', 'Jane Austen', 'Paperback', '250', 'Hachette Livre (UK)', 'English', '1524796974', '978-1524796978', 50),
('Do Dream of Electric Sheep?', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 59),
('1', '1', '1', '1', '1', '1', '1', '1', 62),
('1', '1', '1', '1', '1', '1', '1', '1', 63),
('1', '1', '1', '1', '1', '1', '1', '1', 64),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 65),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 80),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 81),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 82),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 83),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 84),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 85),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 86),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 87),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 88),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 89),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 90),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 91),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 92),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 93),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 94),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 95),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 96),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 97),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 98),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 99),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 100),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 101),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 102),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 103),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 104),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 105),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 106),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 107),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 108),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 109),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 110),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 111),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 112),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 113),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 114),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 115),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 116),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 117),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 118),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 119),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 120),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 121),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 122),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 123),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 124),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 125),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 126),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 127),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 128),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 129),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 130),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 131),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 132),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 133),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 134),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 135),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 136),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'Philip K. Dick', 'Paperback', '240', 'Del Rey; Reprint edition (Sept. 26 2017)', 'English', '1524796972', '978-1524796976', 137);

-- --------------------------------------------------------

--
-- Table structure for table `magazine`
--

CREATE TABLE `catalogue`.`magazine` (
  `Title` text NOT NULL,
  `Publisher` text NOT NULL,
  `Language` text NOT NULL,
  `ISBN10` text NOT NULL,
  `ISBN13` text NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `magazine`
--

INSERT INTO `catalogue`.`magazine` (`Title`, `Publisher`, `Language`, `ISBN10`, `ISBN13`, `id`) VALUES
('Java Beginners', 'English', 'Hachette Livre (UK)1', '1524796974', '978-1524796978', 8),
('Do Jaskaran Dream of Electric Sheep?fsdfsdfsdf', 'English', 'Del Rey; Reprint edition (Sept. 26 2017)', '1524796972', '978-1524796976', 9),
('cloud', 'Pan Macmillan', 'English', '1524796976', '978-1524796980', 10),
('devops', 'Pearson Education', 'English', '1524796977', '978-1524796981', 11),
('microsoft Azure', 'Oxford University Press', 'French', '1524796978', '978-1524796982', 12),
('Dot Net', 'Bloomsbury', 'French', '1524796979', '978-1524796983', 13),
('Sql Database', 'Egmont', 'English', '1524796982', '978-1524796986', 14),
('Data Structures', 'Faber Alliance', 'English', '1524796983', '978-1524796987', 15),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'English', 'Del Rey; Reprint edition (Sept. 26 2017)', '1524796972', '978-1524796976', 16),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'English', 'Del Rey; Reprint edition (Sept. 26 2017)', '1524796972', '978-1524796976', 17),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'English', 'Del Rey; Reprint edition (Sept. 26 2017)', '1524796972', '978-1524796976', 18),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'English', 'Del Rey; Reprint edition (Sept. 26 2017)', '1524796972', '978-1524796976', 19),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'English', 'Del Rey; Reprint edition (Sept. 26 2017)', '1524796972', '978-1524796976', 20),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'English', 'Del Rey; Reprint edition (Sept. 26 2017)', '1524796972', '978-1524796976', 21),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'English', 'Del Rey; Reprint edition (Sept. 26 2017)', '1524796972', '978-1524796976', 22),
('Mrs.', 'Canada', 'sina', '123456', '123123242423423', 23),
('Mrs.', 'Canada', 'sina', '123456', '123123242423423', 24),
('Mrs.', 'Canada', 'sina', '1524796976', '123123242423423', 25),
('Mrs.', 'Canada', 'sina', '1524796976', '123123242423423fds', 26);

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `catalogue`.`movie` (
  `Title` text NOT NULL,
  `Director` text NOT NULL,
  `Producers` text NOT NULL,
  `Actors` text NOT NULL,
  `Language` text NOT NULL,
  `Subtitles` text NOT NULL,
  `Dubbed` text NOT NULL,
  `Release_Date` text NOT NULL,
  `Run_Time` text NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movie`
--

INSERT INTO `catalogue`.`movie` (`Title`, `Director`, `Producers`, `Actors`, `Language`, `Subtitles`, `Dubbed`, `Release_Date`, `Run_Time`, `id`) VALUES
('Java Beginners1', 'David Fincher1', 'Richard', 'Tom Cruise, Adam and Smith', 'English', 'English', 'English and French', '2008-09-13', '150 Minutes', 37),
('Java Intermediate', 'Ridley Scott', 'Jason', 'Leonardo, Samuel and Robert', 'English', 'English', 'English and French', '2001-02-09', '130 Minutes', 38),
('cloud', 'Trivakram', 'Don Simpson', 'Vin Diesel, Morgan and Gary', 'English', 'English', 'English and French', '2015-08-06', '120 Minutes', 39),
('devops', 'Rajamouli', 'John', 'Steven, Anthony and Russell', 'English', 'English', 'English and French', '2013-09-22', '145 Minutes', 40),
('microsoft Azure', 'Woody Allen', 'Samuel', 'Liam and Kevin', 'French', 'English', 'English and French', '2019-07-11', '168 Minutes', 41),
('Dot Net', 'Tim Burton ', 'Brad Pitt', 'Heath, Cate and Ben', 'French', 'English', 'English and French', '2010-04-20', '179 Minutes', 42),
('Operating Systems', 'Billy Wider', 'David', 'Bardley, Charlie and Emma', 'French', 'English', 'English and French', '2017-09-20', '190 Minutes', 43),
('Computer Networks', 'Joel Coen', 'Spike Lee', 'Amithab, Scarlette and Heath', 'English', 'English', 'English and French', '2009-02-20', '133 Minutes', 44),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'dfsf', 'sdfds', 'sdfs', 'English,sdfsf', 'sdfsg', 'awerwer', 'fdsfsdf,erwrwe', 'werwer', 45),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'dfsf', 'sdfds', 'sdfs', 'English,sdfsf', 'sdfsg', 'awerwer', 'fdsfsdf,erwrwe', 'werwer', 46),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'dfsf', 'sdfds', 'sdfs', 'English,sdfsf', 'sdfsg', 'awerwer', 'fdsfsdf,erwrwe', 'werwer', 47),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'dfsf', 'sdfds', 'sdfs', 'English,sdfsf', 'sdfsg', 'awerwer', 'fdsfsdf,erwrwe', 'werwer', 48),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'dfsf', 'sdfds', 'sdfs', 'English,sdfsf', 'sdfsg', 'awerwer', 'fdsfsdf,erwrwe', 'werwer', 49),
('Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'dfsf', 'sdfds', 'sdfs', 'English,sdfsf', 'sdfsg', 'awerwer', 'fdsfsdf,erwrwe', 'werwer', 50);

-- --------------------------------------------------------

--
-- Table structure for table `music`
--

CREATE TABLE `catalogue`.`music` (
  `id` int(11) NOT NULL,
  `Type` text NOT NULL,
  `Title` text NOT NULL,
  `Artist` text NOT NULL,
  `Label` text NOT NULL,
  `Release_Date` text NOT NULL,
  `ASIN` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `music`
--

INSERT INTO `catalogue`.`music` (`id`, `Type`, `Title`, `Artist`, `Label`, `Release_Date`, `ASIN`) VALUES
(15, 'Pen Drive', 'cloud', 'Dion', 'EMI Group', '2015-06-08', 'B008FOB128'),
(16, 'CD', 'Java Intermediate', 'Mariah', 'Independent', '2001-02-09', 'B008FOB127'),
(17, 'Floppy', 'Java Beginners', 'Adele', 'Warner Music Group', '2008-09-13', 'B008FOB126'),
(20, 'Mp3', 'Faded', 'ALan Walker', 'Universal', '2014', '53489589347'),
(21, 'undefined', 'Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'undefined', 'undefined', 'undefined', 'undefined'),
(22, 'undefined', 'Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'undefined', 'undefined', 'undefined', 'undefined'),
(23, 'undefined', 'Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'undefined', 'undefined', 'undefined', 'undefined'),
(24, 'undefined', 'Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'undefined', 'undefined', 'undefined', 'undefined'),
(25, 'undefined', 'Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'undefined', 'undefined', 'undefined', 'undefined'),
(26, 'undefined', 'Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'undefined', 'undefined', 'undefined', 'undefined'),
(27, 'fsdfd', 'Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'dsfsdfsddsf', 'dfsdfsd1', 'fdsfsdf,erwrwe', 'gdfgd'),
(28, 'fsdfd', 'Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'dsfsdfsddsf', 'dfsdfsd1', 'fdsfsdf,erwrwe', 'gdfgd'),
(29, 'fsdfd', 'Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'dsfsdfsddsf', 'dfsdfsd1', 'fdsfsdf,erwrwe', 'gdfgd'),
(30, 'fsdfd', 'Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'dsfsdfsddsf', 'dfsdfsd1', 'fdsfsdf,erwrwe', 'gdfgd'),
(31, 'fsdfd', 'Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'dsfsdfsddsf', 'dfsdfsd1', 'fdsfsdf,erwrwe', 'gdfgd'),
(32, 'fsdfd', 'Do claudiaDream of Electric Sheep?fsdfsdfsdf', 'dsfsdfsddsf', 'dfsdfsd1', 'fdsfsdf,erwrwe', 'gdfgd'),
(33, 'fdsf', 'fsdf', 'fdsf', 'fsdf', 'dsf', 'fsdf'),
(34, 'fdsf', 'fsdf', 'fdsf', 'fsdf', 'dsf', 'fsdf');

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `catalogue`.`person` (
  `ID` int(11) NOT NULL,
  `FirstName` text,
  `LastName` text,
  `UserName` varchar(255) DEFAULT NULL,
  `Password` text,
  `PhoneNumber` text,
  `Email` varchar(255) DEFAULT NULL,
  `Discriminator` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `person`
--

INSERT INTO `catalogue`.`person` (`ID`, `FirstName`, `LastName`, `UserName`, `Password`, `PhoneNumber`, `Email`, `Discriminator`) VALUES
(1, 'Jaskaran', 'Singh', 'j_kukrej', '123456', '5145499680', 'jaskaransingh_17@yahoo.com', 'A'),
(4, 'Jaskaran', 'kukreja', 'j_kukrej134', '123456', '5145499680', 'jaskaran31019334@gmail.com', 'S'),
(9, 'Jaskaran', 'kukreja', 'j_kukrej123', '123456', '5145499680', 'jaskaran31019312@gmail.com', 'S'),
(11, 'Jaskaran', 'kukreja', 'j_kukrej12345', '123456', '5145499680', 'jaskaran3101sds93@gmail.com', 'A');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `catalogue`.`book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `magazine`
--
ALTER TABLE `catalogue`.`magazine`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movie`
--
ALTER TABLE `catalogue`.`movie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `music`
--
ALTER TABLE `catalogue`.`music`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `person`
--
ALTER TABLE `catalogue`.`person`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UserName` (`UserName`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `catalogue`.`book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT for table `magazine`
--
ALTER TABLE `catalogue`.`magazine`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `catalogue`.`movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `music`
--
ALTER TABLE `catalogue`.`music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `person`
--
ALTER TABLE `catalogue`.`person`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;


