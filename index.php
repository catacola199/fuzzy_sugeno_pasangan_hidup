<!doctype html>
<html style="height: 100%;">
<head>

  <title>Pemilihan Pasangan Filosofi Jawa</title>

  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

  <script type="text/javascript" src="fuzzy-sugeno.js"> </script>
  <style>
     body{
        /* background-image: linear-gradient(0deg, #7950f2 5%, #f783ac 95%); */
        background-image: linear-gradient(315deg, #4b6cb7 10%, #182848 90%);
     }
     .inputan{
        height:4rem;
     }
     .btnnn{
         width:10rem;
         background-image: linear-gradient(135deg, #4b6cb7 10%, #182848 90%);
     }
    </style>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <!-- <link href="assets/css/login-register.css" rel="stylesheet" /> -->
  <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</head>

<body>
  <div style="overflow: hidden;">
            <svg
                preserveAspectRatio="none"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style="fill: #ffffff; width: 133%; height: 112px;"
            >
                <path
                d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
                opacity=".25"
            />
            <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
            />
            <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
            </svg>
        </div>
        <form action="proses-kirim-tabelinput.php" method="post">
        <div class="container position-absolute top-50 start-50 translate-middle">
            
            <div class="row text-center justify-content-center"> 
            <h5 style="color:white;">Pemilihan Pasangan Dengan Filosofi Jawa Menggunakan</h5>
            <h5 style="color:white;"> Metode Fuzzy Sugeno</h5>  
                <div class="col-6 mt-4">
                    <input type="text" class="form-control inputan" id="nama" name="nama" style="border-radius:30px; padding: 30px; font-size: 1.2rem;color:#6e6e6e; " placeholder="Masukkan Nama">
                    
                    <button type="button" id= "btn_mulai" class="btn btn-secondary mt-2 btnnn" style=" border-radius: 12px; font-size: 1.2rem;border: transparent;" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Mulai</button>  
                </div>  
            </div>
        </div>   
  <div class="container">
    
    
    <input type="hidden" class="form-control" id="n_kesehatan" name="h_kesehatan" value="0">
      <input type="hidden" class="form-control" id="n_pekerjaan" name="h_pekerjaan" value="0">
      <input type="hidden" class="form-control" id="n_pendidikan" name="h_pendidikan" value="0">
      <input type="hidden" class="form-control" id="n_sifat" name="h_sifat" value="0">
      <input type="hidden" class="form-control" id="n_tatakrama" name="h_tatakrama" value="0">
      <input type="hidden" class="form-control" id="n_hasilakhir" name="h_hasilakhir" value="0">
      <input type="hidden" class="form-control" id="n_kesehatanbaik" name="h_kesehatanbaik" value="0">
      <input type="hidden" class="form-control" id="n_pekerjaanlayak" name="h_pekerjaanlayak" value="0">
      <input type="hidden" class="form-control" id="n_pendidikanbaik" name="h_pendidikanbaik" value="0">
      <input type="hidden" class="form-control" id="n_sifatbaik" name="h_sifatbaik" value="0">
      <input type="hidden" class="form-control" id="n_tatakramabaik" name="h_tatakramabaik" value="0">
      <input type="hidden" class="form-control" id="n_kesehatantidakbaik" name="h_kesehatantidakbaik" value="0">
      <input type="hidden" class="form-control" id="n_pekerjaantidaklayak" name="h_pekerjaantidaklayak" value="0">
      <input type="hidden" class="form-control" id="n_pendidikantidakbaik" name="h_pendidikantidakbaik" value="0">
      <input type="hidden" class="form-control" id="n_sifattidakbaik" name="h_sifattidakbaik" value="0">
      <input type="hidden" class="form-control" id="n_tatakramatidakbaik" name="h_tatakramatidakbaik" value="0">
      <input type="hidden" class="form-control" id="n_hasilseleksi" name="h_hasilseleksi" value="">
   
    <div class="modal fade" id="exampleModalToggle0" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel">Chart Fuzzy</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body ">
          <div class="row text-center justify-content-center mb-2">
              <div class="col">
              <div class="card" style>
                <div class="card-header">Kesehatan</div>
                <div class="card-body" >
                  <canvas id="myChart"></canvas>
                </div>
              </div>
              </div>
              <div class="col">
              <div class="card">
                <div class="card-header">Pekerjaan</div>
                <div class="card-body">
                  <canvas id="myChart1"></canvas>
                </div>
              </div>
              </div>
              <div class="col">
              <div class="card">
                <div class="card-header">Pendidikan</div>
                <div class="card-body">
                  <canvas id="myChart2"></canvas>
                </div>
              </div>
              </div>
            </div>

            <div class="row text-center justify-content-center  mb-2">
              <div class="col">
              <div class="card">
                <div class="card-header">Sifat</div>
                <div class="card-body" >
                  <canvas id="myChart3"></canvas>
                </div>
              </div>
              </div>

              <div class="col">
              <div class="card">
                <div class="card-header">Tatakrama</div>
                <div class="card-body">
                  <canvas id="myChart4"></canvas>
                </div>
              </div>
              </div>

              <div class="col">
              <div class="card">
                <div class="card-header">Rule Base</div>
                <div class="card-body">
                <table class="table">
                  <tr>
                    <th>Nilai</th>
                    <th>Hasil</th>
                  </tr>
                  <tr>
                    <td>Tidak Direkomendasi</td>
                    <td  >0 >= x <= 1.9</td>
                  </tr>
                  <tr>
                    <td>Direkomendasi</td>
                    <td >2 >= x <= 2.9</td>
                  </tr>
                  <tr>
                    <td >Sangat Direkomendasi</td>
                    <td>x => 3</td>
                  </tr>
                </table>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal">Next</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
      <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <img src="..." class="rounded me-2" alt="...">
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
    </div>  -->

    <!-- Modal -->
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <div class="row">
            <div class="col">
            <h5 class="modal-title" id="exampleModalToggleLabel">Kesehatan</h5>
            </div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <?php include 'assets/php/Pertanyaan_kesehatan.php'; ?>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" onClick=value_kesehatan() id="modal_kesehatan" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Next</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel2">Pekerjaan</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <?php include 'assets/php/Pertanyaan_pekerjaan.php'; ?>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" href="#exampleModalToggle" data-bs-toggle="modal">Back</button>
            <button type="button" class="btn btn-primary" onClick=value_pekerjaan() id="modal_pekerjaan" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">Next</button>

          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel2">Pendidikan</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <?php include 'assets/php/Pertanyaan_pendidikan.php'; ?>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" href="#exampleModalToggle2" data-bs-toggle="modal">Back</button>
            <button type="button" class="btn btn-primary" onClick=value_pendidikan() id="modal_pendidikan" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal">Next</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel2">Sifat</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <?php include 'assets/php/Pertanyaan_sifat.php'; ?>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" href="#exampleModalToggle3" data-bs-toggle="modal">Back</button>
            <button type="button" class="btn btn-primary" onClick=value_sifat() id="modal_sifat" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal">Next</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalToggle5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel2">Tatakrama</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <?php include 'assets/php/Pertanyaan_tatakrama.php'; ?>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" href="#exampleModalToggle4" data-bs-toggle="modal">Back</button>
            <button type="button" class="btn btn-primary" onClick=value_tatakrama() id="modal_tatakrama" data-bs-target="#exampleModalToggle0" data-bs-toggle="modal">Next</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalToggle6" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel2">Fuzzy Inference</h5>
            <p id=""></p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-center">
              <div class="col-2">
                <div class="card" style="width: 10rem;">
                  <div class="card-header text-center">Kesehatan</div>
                  <div class="card-body">
                    <table class="table table-striped">
                      <tr >
                        <th>Buruk</th>
                      </tr>
                      <tr>
                        <td><p id="output_KS"></p></td>
                      </tr>
                      <tr >
                        <th>Baik</th>
                      </tr>
                      <tr>
                        <td><p id="output_KS1"></p></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 10rem;">
                  <div class="card-header text-center">Pekerjaan</div>
                  <div class="card-body">
                    <table class="table table-striped">
                      <tr >
                        <th>Buruk</th>
                      </tr>
                      <tr>
                        <td><p id="output_PJ"></p></td>
                      </tr>
                      <tr >
                        <th>Baik</th>
                      </tr>
                      <tr>
                        <td><p id="output_PJ1"></p></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 10rem;">
                  <div class="card-header text-center">Pendidikan</div>
                  <div class="card-body">
                    <table class="table table-striped">
                      <tr >
                        <th>Buruk</th>
                      </tr>
                      <tr>
                        <td><p id="output_P"></p></td>
                      </tr>
                      <tr >
                        <th>Baik</th>
                      </tr>
                      <tr>
                        <td><p id="output_P1"></p></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 10rem;">
                  <div class="card-header text-center">Sifat</div>
                  <div class="card-body">
                    <table class="table table-striped">
                      <tr >
                        <th>Buruk</th>
                      </tr>
                      <tr>
                        <td><p id="output_S"></p></td>
                      </tr>
                      <tr >
                        <th>Baik</th>
                      </tr>
                      <tr>
                        <td><p id="output_S1"></p></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 10rem;">
                  <div class="card-header text-center">Tatakrama</div>
                  <div class="card-body">
                    <table class="table table-striped">
                      <tr >
                        <th>Buruk</th>
                      </tr>
                      <tr>
                        <td><p id="output_T"></p></td>
                      </tr>
                      <tr >
                        <th>Baik</th>
                      </tr>
                      <tr>
                        <td><p id="output_T1"></p></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center mt-4">
              <div class="card" style="width: 20rem;">
                  <div class="card-header text-center">Hasil Defuzzyfikasi</div>
                  <div class="card-body">
                    <table class="table table-striped">
                      <tr >
                        <th>Nilai</th>
                        <th>Hasil</th>
                      </tr>
                      <tr>
                        <td><p id="output_hasil"></p></td>
                        <td><p id="output_seleksi"></p></td>
                      </tr>
                    </table>
                  </div>
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary"  data-bs-dismiss="modal">close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="progress fixed-bottom">
      <div class="progress-bar" id="progress" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </form>
    <script src="chart.min.js"></script>
    <!-- PROGRESSBAR         -->
    <script>

      var btn_mulai1 = document.getElementById('btn_mulai');
      var M_K = document.getElementById('modal_kesehatan');
      var M_PJ = document.getElementById('modal_pekerjaan');
      var M_PD = document.getElementById('modal_pendidikan');
      var M_S = document.getElementById('modal_sifat');
      var M_T = document.getElementById('modal_tatakrama');
      // var output_nama = document.getElementById('nama');
      // let output_hasil_nama = document.getElementById('output_nama');
      // if (btn_mulai1) {
      //   btn_mulai1.addEventListener('click', function() {
      //     var nama = output_nama.value;
         
      //   })
      // }

      if (M_K) {
        M_K.addEventListener('click', function() {
          document.getElementById('progress').style = "width :20%"
        })
      }
      if (M_PJ) {
        M_PJ.addEventListener('click', function() {
          document.getElementById('progress').style = "width : 40%"
        })
      }
      if (M_PD) {
        M_PD.addEventListener('click', function() {
          document.getElementById('progress').style = "width : 60%"
        })
      }
      if (M_S) {
        M_S.addEventListener('click', function() {
          document.getElementById('progress').style = "width : 80%"
        }) 
      }
      if (M_T) {
        M_T.addEventListener('click', function() {
          document.getElementById('progress').style = "width : 100%"
        })
      }
    </script>
    <!-- GET ELEMENT BY NAME -->
    <script>
      let output_pendidikan = document.getElementById('output_P');
      let output_pendidikan1 = document.getElementById('output_P1');
      let output_sifat = document.getElementById('output_S');
      let output_sifat1 = document.getElementById('output_S1');
      let output_kesehatan = document.getElementById('output_KS');
      let output_kesehatan1 = document.getElementById('output_KS1');
      let output_pekerjaan = document.getElementById('output_PJ');
      let output_pekerjaan1 = document.getElementById('output_PJ1');
      let output_tatakrama = document.getElementById('output_T');
      let output_tatakrama1 = document.getElementById('output_T1');
      let output_hasil = document.getElementById('output_hasil');

      let output_pendidikan2 = document.getElementById('output_P2');
      let output_sifat2 = document.getElementById('output_S2');
      let output_kesehatan2 = document.getElementById('output_KS2');
      let output_pekerjaan2 = document.getElementById('output_PJ2');
      let output_tatakrama2 = document.getElementById('output_T2');
    
      let output_total = document.getElementById('output6');
      let output_seleksi = document.getElementById('output_seleksi');
      var hasilx = 0;
      let db_kesehatan = document.getElementById('n_kesehatan');
      let db_pekerjaan = document.getElementById('n_pekerjaan');
      let db_pendidikan = document.getElementById('n_pendidikan');
      let db_sifat = document.getElementById('n_sifat');
      let db_tatakrama = document.getElementById('n_tatakrama');
      let db_hasilakhir = document.getElementById('n_hasilakhir');
      let db_kesehatanbaik = document.getElementById('n_kesehatanbaik');
      let db_pekerjaanlayak = document.getElementById('n_pekerjaanlayak');
      let db_pendidikanbaik = document.getElementById('n_pendidikanbaik');
      let db_sifatbaik = document.getElementById('n_sifatbaik');
      let db_tatakramabaik = document.getElementById('n_tatakramabaik');
      let db_kesehatantidakbaik = document.getElementById('n_kesehatantidakbaik');
      let db_pekerjaantidaklayak = document.getElementById('n_pekerjaantidaklayak');
      let db_pendidikantidakbaik = document.getElementById('n_pendidikantidakbaik');
      let db_sifattidakbaik = document.getElementById('n_sifattidakbaik');
      let db_tatakramatidakbaik = document.getElementById('n_tatakramatidakbaik');
      let db_hasilseleksi = document.getElementById('n_hasilseleksi');


      var hasil_kesehatan = 0;
      var hasil_pendidikan = 0;
      var hasil_pekerjaan = 0;
      var hasil_sifat = 0;
      var hasil_tatakrama = 0;
      var hasil_defuzzy = 0;
      var hasil_kesehatanbaik = 0;
      var hasil_pekerjaanlayak = 0;
      var hasil_pendidikanbaik = 0;
      var hasil_sifatbaik = 0;
      var hasil_tatakramabaik = 0;
      var hasil_kesehatantidakbaik = 0;
      var hasil_pekerjaantidaklayak = 0;
      var hasil_pendidikantidakbaik = 0;
      var hasil_sifattidakbaik = 0;
      var hasil_tatakramatidakbaik = 0;
      var hh_hasil_seleksi = "";

      function ambil_data() {
        db_kesehatan.value = hasil_kesehatan;
        db_pendidikan.value = hasil_pendidikan;
        db_pekerjaan.value = hasil_pekerjaan;
        db_sifat.value = hasil_sifat;
        db_tatakrama.value = hasil_tatakrama;
        db_hasilakhir.value = hasil_defuzzy;
        db_kesehatanbaik.value = hasil_kesehatanbaik;
        db_pekerjaanlayak.value = hasil_pekerjaanlayak; 
        db_pendidikanbaik.value = hasil_pendidikanbaik;
        db_sifatbaik.value = hasil_sifatbaik;
        db_tatakramabaik.value = hasil_tatakramabaik;
        db_kesehatantidakbaik.value = hasil_kesehatantidakbaik;
        db_pekerjaantidaklayak.value = hasil_pekerjaantidaklayak;
        db_pendidikantidakbaik.value = hasil_pendidikantidakbaik;
        db_sifattidakbaik.value = hasil_sifattidakbaik;
        db_tatakramatidakbaik.value = hasil_tatakramatidakbaik;
        db_hasilseleksi.value = hh_hasil_seleksi;
      }

      function tampil_pendidikan(hasilx) {
        var hasil = fungsiKeanggotaanPendidikanTidakBaik(hasilx);
        var hasil2 = fungsiKeanggotaanPendidikanBaik(hasilx);
        output_pendidikan.innerText =  hasil;
        output_pendidikan1.innerText = hasil2;
        output_pendidikan2.innerText = hasilx;
 

      }
      function tampil_kesehatan(hasilx) {
        var hasil = fungsiKeanggotaanKesehatanTidakBaik(hasilx);
        var hasil2 = fungsiKeanggotaanKesehatanBaik(hasilx);
        output_kesehatan.innerText = hasil;
        output_kesehatan1.innerText = hasil2;
        output_kesehatan2.innerText = hasilx;
      }
      function tampil_pekerjaan(hasilx) {
        var hasil = fungsiKeanggotaanPekerjaanTidakLayak(hasilx);
        var hasil2 = fungsiKeanggotaanPekerjaanLayak(hasilx);
        output_pekerjaan.innerText = hasil;
        output_pekerjaan1.innerText = hasil2;
        output_pekerjaan2.innerText = hasilx;

      }
      function tampil_sifat(hasilx) {
        var hasil = fungsiKeanggotaanSifatBuruk(hasilx);
        var hasil2 = fungsiKeanggotaanSifatBaik(hasilx);
        output_sifat.innerText = hasil;
        output_sifat1.innerText = hasil2;
        output_sifat2.innerText = hasilx;

      }
      function tampil_tatakrama(hasilx) {
        var hasil = fungsiKeanggotaanTatakramaTidakBaik(hasilx);
        var hasil2 = fungsiKeanggotaanTatakramaBaik(hasilx);
        output_tatakrama.innerText = hasil;
        output_tatakrama1.innerText = hasil2;
        output_tatakrama2.innerText = hasilx;

      }

      function hasil_seleksi(a) {
        if (a > 0 && a < 2) {
          var hasil_s = "tidak di rekomendasikan";
          output_seleksi.innerText = hasil_s;
          hh_hasil_seleksi = hasil_s;
        } else if (a > 1.9 && a < 3) {
          var hasil_s = "di rekomendasikan";
          output_seleksi.innerText = hasil_s;
          hh_hasil_seleksi = hasil_s;
        } else if (a > 2.9) {
          var hasil_s = "sangat di rekomendasikan";
          output_seleksi.innerText = hasil_s;
          hh_hasil_seleksi = hasil_s;
        } else {
          var hasil_s = "nilai tidak dikenali";
          output_seleksi.innerText = hasil_s;
          hh_hasil_seleksi = hasil_s;
        }

        console.log(a);
        console.log(hasil_s);
      }

      function hasil_akhir(a, b, c, d, e) {
        var hasil = defuzzyfikasi(a, b, c, d, e);
        output_hasil.innerText = hasil;
        hasil_defuzzy = hasil;
        ambil_data();
        hasil_seleksi(hasil);
      }

      function value_kesehatan() {
        var my_data = document.getElementsByName('P_K1'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_K2'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str1 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_K3'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str2 = my_data[i].value
            flag = 1
          }
        }
        hasil6 = parseInt(str) + parseInt(str1) + parseInt(str2);

        hasil_kesehatan = hasil6;
        output_kesehatan.innerText = hasil6;
        tampil_kesehatan(hasil6);
        hasil_kesehatanbaik = fungsiKeanggotaanKesehatanBaik(hasil6);
        hasil_kesehatantidakbaik = fungsiKeanggotaanKesehatanTidakBaik(hasil6);
      }

      function value_pekerjaan() {
        var my_data = document.getElementsByName('P_PJ1'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var PJ1 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_PJ2'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var PJ2 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_PJ3'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var PJ3 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_PJ4'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var PJ4 = my_data[i].value
            flag = 1
          }
        }
        hasil6 = parseInt(PJ1) + parseInt(PJ2) + parseInt(PJ3) + parseInt(PJ4);

        hasil_pekerjaan = hasil6;
        output_pekerjaan.innerText = hasil_pekerjaan;
        tampil_pekerjaan(hasil6);
        hasil_pekerjaanlayak = fungsiKeanggotaanPekerjaanLayak(hasil6);
        hasil_pekerjaantidaklayak = fungsiKeanggotaanPekerjaanTidakLayak(hasil6);
        console.log(hasil_pekerjaanlayak);
        console.log(hasil_pekerjaantidaklayak);
      }

      function value_pendidikan() {
        var my_data = document.getElementsByName('P_PK1'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var PK1 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_PK2'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var PK2 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_PK3'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var PK3 = my_data[i].value
            flag = 1
          }
        }
        hasil6 = parseFloat(PK1) + parseFloat(PK2) + parseFloat(PK3);
        hasil_pendidikan = hasil6;
        output_pendidikan.innerText = hasil_pendidikan;
        tampil_pendidikan(hasil6);
        hasil_pendidikanbaik = fungsiKeanggotaanPendidikanBaik(hasil6);
        hasil_pendidikantidakbaik = fungsiKeanggotaanPendidikanTidakBaik(hasil6);
        console.log(hasil_pendidikanbaik);
        console.log(hasil_pendidikantidakbaik);
      }

      function value_sifat() {
        var my_data = document.getElementsByName('P_S1'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_S2'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str1 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_S3'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str2 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_S4'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str3 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_S5'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str4 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_S6'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str5 = my_data[i].value
            flag = 1
          }
        }
        hasil6 = parseInt(str) + parseInt(str1) + parseInt(str2) + parseInt(str3) + parseInt(str4) + parseInt(str5);

        hasil_sifat = hasil6;
        output_sifat.innerText = hasil_sifat;
        tampil_sifat(hasil6);
        hasil_sifatbaik = fungsiKeanggotaanSifatBaik(hasil6);
        hasil_sifattidakbaik = fungsiKeanggotaanSifatBuruk(hasil6);
        console.log(hasil_sifatbaik);
        console.log(hasil_sifattidakbaik);
      }

      function value_tatakrama() {
        var my_data = document.getElementsByName('P_T1'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_T2'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str1 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_T3'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str2 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_T4'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str3 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_T5'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str4 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_T6'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str5 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_T7'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str6 = my_data[i].value
            flag = 1
          }
        }
        var my_data = document.getElementsByName('P_T8'); // array 
        flag = 0
        for (i = 0; i < my_data.length; i++) {
          if (my_data[i].checked) {
            var str7 = my_data[i].value
            flag = 1
          }
        }
        hasil6 = parseInt(str) + parseInt(str1) + parseInt(str2) + parseInt(str3) + parseInt(str4) + parseInt(str5) + parseInt(str6) + parseInt(str7);
        hasil_tatakramabaik = fungsiKeanggotaanTatakramaBaik(hasil6);
        hasil_tatakramatidakbaik = fungsiKeanggotaanTatakramaTidakBaik(hasil6);
        console.log(hasil_tatakramabaik);
        console.log(hasil_tatakramatidakbaik);
        hasil_tatakrama = hasil6;
        output_tatakrama.innerText = hasil_tatakrama;
        tampil_tatakrama(hasil6);
        hasil_akhir(hasil_kesehatan, hasil_pendidikan, hasil_pekerjaan, hasil_sifat, hasil_tatakrama);
      }

      function goBack() {
        window.history.back();
      }

    // Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
      type: 'line',
      data: {
      labels: ['0','50','75','125','150'],
      datasets: [{
          label: 'Red',
          data: [, 1,1,0],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
      },
      {
          label: 'Blue',
          data: [,,0,1,1],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});
      const ctx1 = document.getElementById('myChart1').getContext('2d');
      const myChart1 = new Chart(ctx1, {
      type: 'line',
      data: {
      labels: ['0','25','50','75','100'],
      datasets: [{
          label: 'Red',
          data: [, 1,1,0],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
      },
      {
          label: 'Blue',
          data: [,,0,1,1],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
 });
      const ctx2 = document.getElementById('myChart2').getContext('2d');
      const myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
      labels: ['0','15','35','55','75'],
      datasets: [{
          label: 'Red',
          data: [, 1,1,0],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
      },
      {
          label: 'Blue',
          data: [,,0,1,1],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
      }]},
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });
      const ctx3 = document.getElementById('myChart3').getContext('2d');
      const myChart3 = new Chart(ctx3, {
      type: 'line',
      data: {
      labels: ['0','30','60','90','120'],
      datasets: [{
          label: 'Red',
          data: [, 1,1,0],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
      },
      {
          label: 'Blue',
          data: [,,0,1,1],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
      }]},
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });
      const ctx4 = document.getElementById('myChart4').getContext('2d');
      const myChart4 = new Chart(ctx4, {
      type: 'line',
      data: {
      labels: ['0','20','40','60','80'],
      datasets: [{
          label: 'Red',
          data: [, 1,1,0],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
      },
      {
          label: 'Blue',
          data: [,,0,1,1],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
      }]},
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });

    var toastTrigger = document.getElementById('btn_mulai')
    var toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
      toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
      })
    }
    </script>
</body>

</html>