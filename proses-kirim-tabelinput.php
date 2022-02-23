<?php
include 'koneksi.php';
// menyimpan data kedalam variabel
$nama1          = $_POST['nama'];
$h_kesehatan    = $_POST['h_kesehatan'];
$h_pekerjaan    = $_POST['h_pekerjaan'];
$h_pendidikan    = $_POST['h_pendidikan'];
$h_sifat    = $_POST['h_sifat'];
$h_tatakrama    = $_POST['h_tatakrama'];
$h_hasilakhir    = $_POST['h_hasilakhir'];
$h_kesehatanbaik    = $_POST['h_kesehatanbaik'];
$h_pekerjaanlayak    = $_POST['h_pekerjaanlayak'];
$h_pendidikanbaik    = $_POST['h_pendidikanbaik'];
$h_sifatbaik    = $_POST['h_sifatbaik'];
$h_tatakramabaik    = $_POST['h_tatakramabaik'];
$h_kesehatantidakbaik    = $_POST['h_kesehatantidakbaik'];
$h_pekerjaantidaklayak    = $_POST['h_pekerjaantidaklayak'];
$h_pendidikantidakbaik    = $_POST['h_pendidikantidakbaik'];
$h_sifattidakbaik    = $_POST['h_sifattidakbaik'];
$h_tatakramatidakbaik    = $_POST['h_tatakramatidakbaik'];
$h_hasilseleksi = $_POST['h_hasilseleksi'];
// query SQL untuk insert data
$query="INSERT INTO tabel_input VALUES ('','$nama1','$h_kesehatan','$h_pekerjaan ','$h_pendidikan','$h_sifat ','$h_tatakrama')";
$hasil=mysqli_query($koneksi,$query);
if ($hasil) {
	echo "Berhasil insert data";
  }
else {
	echo "Gagal insert data";
    echo $query;
}
// query SQL untuk insert data
$query2="INSERT INTO proses VALUES ('','$nama1','$h_kesehatanbaik','$h_kesehatantidakbaik','$h_pekerjaanlayak','$h_pekerjaantidaklayak','$h_pendidikanbaik','$h_pendidikantidakbaik','$h_sifatbaik','$h_sifattidakbaik','$h_tatakramabaik','$h_tatakramatidakbaik','$h_hasilakhir,'$h_hasilseleksi'')";
$hasil2=mysqli_query($koneksi,$query2);
if ($hasil2) {
	echo "Berhasil insert data";
  }
else {
	echo "Gagal insert data";
    echo $query;
}  
// mengalihkan ke halaman index.php
 header("location:index.php");
?>