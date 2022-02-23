-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2022 at 05:47 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `proses`
--

CREATE TABLE `proses` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `kesehatan_baik` float NOT NULL,
  `kesehatan_tidakbaik` float NOT NULL,
  `pekerjaan_layak` float NOT NULL,
  `pekerjaan_tidaklayak` float NOT NULL,
  `pendidikan_baik` float NOT NULL,
  `pendidikan_tidakbaik` float NOT NULL,
  `sifat_baik` float NOT NULL,
  `sifat_buruk` float NOT NULL,
  `tatakrama_baik` float NOT NULL,
  `tatakrama_tidakbaik` float NOT NULL,
  `hasil_defuzzyfikasi` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proses`
--

INSERT INTO `proses` (`id`, `nama`, `kesehatan_baik`, `kesehatan_tidakbaik`, `pekerjaan_layak`, `pekerjaan_tidaklayak`, `pendidikan_baik`, `pendidikan_tidakbaik`, `sifat_baik`, `sifat_buruk`, `tatakrama_baik`, `tatakrama_tidakbaik`, `hasil_defuzzyfikasi`) VALUES
(5, 'Delviro', 0.8, 0.2, 0.4, 0.6, 1, 0, 0.666667, 0.333333, 1, 0, 1.24324),
(6, 'kaka', 1, 0, 1, 0, 1, 0, 0.833333, 0.166667, 0.25, 0.75, 2.0625),
(7, 'yuli', 0.86, 0.14, 1, 0, 1, 0, 0.666667, 0.333333, 1, 0, 2.41146);

-- --------------------------------------------------------

--
-- Table structure for table `tabel_input`
--

CREATE TABLE `tabel_input` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `nilai_kesehatan` int(10) NOT NULL,
  `nilai_pekerjaan` int(10) NOT NULL,
  `nilai_pendidikan` int(10) NOT NULL,
  `nilai_sifat` int(10) NOT NULL,
  `nilai_tatakrama` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tabel_input`
--

INSERT INTO `tabel_input` (`id`, `nama`, `nilai_kesehatan`, `nilai_pekerjaan`, `nilai_pendidikan`, `nilai_sifat`, `nilai_tatakrama`) VALUES
(6, 'Delviro', 115, 60, 65, 80, 80),
(7, 'kaka', 150, 75, 55, 85, 45),
(8, 'yuli', 118, 95, 55, 80, 75);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `proses`
--
ALTER TABLE `proses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tabel_input`
--
ALTER TABLE `tabel_input`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `proses`
--
ALTER TABLE `proses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tabel_input`
--
ALTER TABLE `tabel_input`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
