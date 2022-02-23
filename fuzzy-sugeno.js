     /** fungsiKeanggotaanPendidikanTidakBaik 
     * returns membership function for variable permintaan in turun state
     * @param {*} permasalahan = permintaaan value in the problem, which is in between min and max value
     */
    function fungsiKeanggotaanPendidikanTidakBaik(permasalahan) {
        var miu;

        if (permasalahan >= 15 && permasalahan <=35) {
            miu = 1;
        } 
        else if (permasalahan > 35 && permasalahan <=55) {
            miu = (55-permasalahan)/(55-35);
        } 
        else {
            miu = 0;
        }

        return miu;
    }

    /** fungsiKeanggotaanPendidikanBaik
     * returns membership function for variable Pendidikan in Baik state
     * @param {*} permasalahan = permintaaan value in the problem, which is in between min and max value
     */
    function fungsiKeanggotaanPendidikanBaik(permasalahan) {
        var miu;

        if (permasalahan >= 35 && permasalahan <=55) {
            miu = (permasalahan-35)/(55-35);
            
        } 
        else if (permasalahan > 55 && permasalahan <=75) {
            miu = 1;
        } 
        else {
            miu = 0;
        }
        
        return miu;
    }
     /** fungsiKeanggotaanKesehatanTidakBaik 
     * returns membership function for variable kesehatan in tidak baik state
     * @param {*} permasalahan = permintaaan value in the problem, which is in between min and max value
     */
    function fungsiKeanggotaanKesehatanTidakBaik(permasalahan) {
        var miu;

        if (permasalahan >= 50 && permasalahan <=75) {
            miu = 1;
        } 
        else if (permasalahan > 75 && permasalahan <=125) {
            miu = (125-permasalahan)/(125-75);
        } 
        else {
            miu = 0;
        }

        return miu;
    }

    /** fungsiKeanggotaanKesehatanBaik
     * returns membership function for variable Pendidikan in Baik state
     * @param {*} permasalahan = permintaaan value in the problem, which is in between min and max value
     */
    function fungsiKeanggotaanKesehatanBaik(permasalahan) {
        var miu;

        if (permasalahan >= 75 && permasalahan <=125) {
            miu = (permasalahan-75)/(125-75);
        } 
        else if (permasalahan > 125 && permasalahan <=150) {
            miu = 1;
        } 
        else {
            miu = 0;
        }
        
        return miu;
    }
      /** fungsiKeanggotaanKesehatanTidakBaik 
     * returns membership function for variable kesehatan in tidak baik state
     * @param {*} permasalahan = permintaaan value in the problem, which is in between min and max value
     */
    function fungsiKeanggotaanPekerjaanTidakLayak(permasalahan) {
        var miu;

        if (permasalahan >= 25 && permasalahan <=50) {
            miu = 1;
        } 
        else if (permasalahan > 50 && permasalahan <=75) {
            miu = (75-permasalahan)/(75-50);
        } 
        else {
            miu = 0;
        }

        return miu;
    }

    /** fungsiKeanggotaanKesehatanBaik
     * returns membership function for variable Pendidikan in Baik state
     * @param {*} permasalahan = permintaaan value in the problem, which is in between min and max value
     */
    function fungsiKeanggotaanPekerjaanLayak(permasalahan) {
        var miu;

        if (permasalahan >= 50 && permasalahan <=75) {
            miu = (permasalahan-50)/(75-50);
        } 
        else if (permasalahan > 75 && permasalahan <=100) {
            miu = 1;
        } 
        else {
            miu = 0;
        }
        
        return miu;
    }

      /** fungsiKeanggotaanKesehatanTidakBaik 
     * returns membership function for variable kesehatan in tidak baik state
     * @param {*} permasalahan = permintaaan value in the problem, which is in between min and max value
     */
    function fungsiKeanggotaanSifatBuruk(permasalahan) {
        var miu;

        if (permasalahan >= 30 && permasalahan <=60) {
            miu = 1;
        } 
        else if (permasalahan > 60 && permasalahan <=90) {
            miu = (90-permasalahan)/(90-60);
        } 
        else {
            miu = 0;
        }

        return miu;
    }

    /** fungsiKeanggotaanKesehatanBaik
     * returns membership function for variable Pendidikan in Baik state
     * @param {*} permasalahan = permintaaan value in the problem, which is in between min and max value
     */
    function fungsiKeanggotaanSifatBaik(permasalahan) {
        var miu;

        if (permasalahan >= 60 && permasalahan <=90) {
            miu = (permasalahan-60)/(90-60);
        } 
        else if (permasalahan > 90 && permasalahan <=120) {
            miu = 1;
        } 
        else {
            miu = 0;
        }
        
        return miu;
    }

    /** fungsiKeanggotaanKesehatanTidakBaik 
     * returns membership function for variable kesehatan in tidak baik state
     * @param {*} permasalahan = permintaaan value in the problem, which is in between min and max value
     */
       function fungsiKeanggotaanTatakramaTidakBaik(permasalahan) {
        var miu;

        if (permasalahan >= 20 && permasalahan <=40) {
            miu = 1;
        } 
        else if (permasalahan > 40 && permasalahan <=60) {
            miu = (60-permasalahan)/(60-40);
        } 
        else {
            miu = 0;
        }

        return miu;
    }

    /** fungsiKeanggotaanKesehatanBaik
     * returns membership function for variable Pendidikan in Baik state
     * @param {*} permasalahan = permintaaan value in the problem, which is in between min and max value
     */
    function fungsiKeanggotaanTatakramaBaik(permasalahan) {
        var miu;

        if (permasalahan >= 40 && permasalahan <=60) {
            miu = (permasalahan-40)/(60-40);
        } 
        else if (permasalahan > 60 && permasalahan <=80) {
            miu = 1;
        } 
        else {
            miu = 0;
        }
        
        return miu;
    }
    /** newRule1
     * represents the first rule for this problem
     * "Jika (kesehatan adalah tidak baik) dan (pendidikan adalah tidak baik) dan (pekerjaan adalah tidak layak) dan (sifat adalah buruk) dan (tatakrama adalah tidak baik) maka (hasil seleksi adalah tidak direkomendasikan) "
     */
    var newRule1 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule1");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule2
     * represents the first rule for this problem
     * "Jika (kesehatan adalah tidak baik) dan (pendidikan adalah tidak baik) dan (pekerjaan adalah tidak layak) dan (sifat adalah buruk) dan (tatakrama adalah baik) maka (hasil seleksi adalah tidak direkomendasikan) "
     */
     var newRule2 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule2");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule3
     * represents the first rule for this problem
     * "JIKA "
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
     var newRule3 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule3");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };
    
    /** newRule4
     * represents the first rule for this problem
     * "JIKA "
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
     var newRule4 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule4");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 2;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule5
     * represents the first rule for this problem
     * "JIKA "
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
     var newRule5 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule5");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule6
     * represents the first rule for this problem
     * "JIKA "
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
     var newRule6 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule6");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule7
     * represents the first rule for this problem
     * "JIKA "
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
     var newRule7 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule7");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule8
     * represents the first rule for this problem
     * "JIKA "
     */
     var newRule8 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule8");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 2;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule9
     * represents the first rule for this problem
     * "JIKA "
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
     var newRule9 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule9");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule10
         * represents the first rule for this problem
         * "Jika (kesehatan adalah tidak baik) dan (pendidikan adalah tidak baik) dan (pekerjaan adalah tidak layak) dan (sifat adalah buruk) dan (tatakrama adalah baik) maka (hasil seleksi adalah tidak direkomendasikan) "
         */
    var newRule10 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule10");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule11
     * represents the first rule for this problem
     * "JIKA "
     */
    var newRule11 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule11");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule12
     * represents the first rule for this problem
     * "JIKA "
     */
    var newRule12 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule12");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 2;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule13
     * represents the first rule for this problem
     * "JIKA "
     */
    var newRule13 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule13");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule14
     * represents the first rule for this problem
     * "JIKA "
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
    var newRule14 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule14");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule15
     * represents the first rule for this problem
     * "JIKA "
     */
    var newRule15 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule15");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule16
     * represents the first rule for this problem
     * "JIKA "
     */
    var newRule16 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule16");
        console.log(fungsiKeanggotaanKesehatanTidakBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 2;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule17
     * represents the first rule for this problem
     * "Jika (kesehatan adalah tidak baik) dan (pendidikan adalah tidak baik) dan (pekerjaan adalah tidak layak) dan (sifat adalah buruk) dan (tatakrama adalah tidak baik) maka (hasil seleksi adalah tidak direkomendasikan) "
     */
     var newRule17 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule17");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule18
     * represents the first rule for this problem
     * "Jika (kesehatan adalah tidak baik) dan (pendidikan adalah tidak baik) dan (pekerjaan adalah tidak layak) dan (sifat adalah buruk) dan (tatakrama adalah baik) maka (hasil seleksi adalah tidak direkomendasikan) "
     */
     var newRule18 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule18");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 2;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule19
     * represents the first rule for this problem
     * "JIKA "
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
     var newRule19 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule19");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 2;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };
    
    /** newRule20
     * represents the first rule for this problem
     * "JIKA "
     */
     var newRule20 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule20");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 3;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule21
     * represents the first rule for this problem
     * "JIKA "
     */
     var newRule21 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule21");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule22
     * represents the first rule for this problem
     * "JIKA "
     */
     var newRule22 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule22");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 2;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule23
     * represents the first rule for this problem
     * "JIKA "
     */
     var newRule23 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule23");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 2;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule24
     * represents the first rule for this problem
     * "JIKA "
     */
     var newRule24 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule24");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanTidakBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 3;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule25
     * represents the first rule for this problem
     * "JIKA "
     */
     var newRule25 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule25");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule26
         * represents the first rule for this problem
         * "Jika (kesehatan adalah tidak baik) dan (pendidikan adalah tidak baik) dan (pekerjaan adalah tidak layak) dan (sifat adalah buruk) dan (tatakrama adalah baik) maka (hasil seleksi adalah tidak direkomendasikan) "
         */
    var newRule26 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
            fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule26");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 2;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule27
     * represents the first rule for this problem
     * "JIKA "
     */
    var newRule27 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule27");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 2;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule28
     * represents the first rule for this problem
     * "JIKA "
     */
    var newRule28 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule28");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanTidakLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 3;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule29
     * represents the first rule for this problem
     * "JIKA "
     */
    var newRule29 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule29");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 1;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule30
     * represents the first rule for this problem
     * "JIKA "
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
    var newRule30 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBuruk(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule30");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBuruk(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 2;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule31
     * represents the first rule for this problem
     * "JIKA "
     */
    var newRule31 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama)
        );
        console.log("newRule31");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaTidakBaik(permasalahantatakrama));
        z4 = 2;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule16
     * represents the first rule for this problem
     * "JIKA "
     */
    var newRule32 = function (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        alfaPredikat4 = Math.min(
        fungsiKeanggotaanKesehatanBaik(permasalahankesehatan), 
        fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan),
        fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan),
        fungsiKeanggotaanSifatBaik(permasalahansifat),
        fungsiKeanggotaanTatakramaBaik(permasalahantatakrama)
        );
        console.log("newRule32");
        console.log(fungsiKeanggotaanKesehatanBaik(permasalahankesehatan));
        console.log(fungsiKeanggotaanPendidikanBaik(permasalahanpendidikan));
        console.log(fungsiKeanggotaanPekerjaanLayak(permasalahanperkerjaan));
        console.log(fungsiKeanggotaanSifatBaik(permasalahansifat));
        console.log(fungsiKeanggotaanTatakramaBaik(permasalahantatakrama));
        z4 = 3;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    
    function tes() {
        var rule = newRule1(4000,300);
        document.write(rule.alfapredikat);
        document.write("<br>");
        document.write(rule.z);
    }

    /** defuzzyfikasi
     *  calculate the produksi amount for permintaan
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
    function defuzzyfikasi (permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama){
        var rule1 = newRule1(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule2 = newRule2(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule3 = newRule2(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule4 = newRule3(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule5 = newRule4(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule6 = newRule5(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule7 = newRule6(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule7 = newRule7(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule8 = newRule8(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule9 = newRule9(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule10 = newRule10(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule11 = newRule11(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule12 = newRule12(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule13 = newRule13(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule14 = newRule14(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule15 = newRule15(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule16 = newRule16(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule17 = newRule17(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule18 = newRule18(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule19 = newRule19(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule20 = newRule20(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule21 = newRule21(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule22 = newRule22(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule23 = newRule23(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule24 = newRule24(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule25 = newRule25(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule26 = newRule26(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule27 = newRule27(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule28 = newRule28(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule29 = newRule29(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule30 = newRule30(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule31 = newRule31(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        var rule32 = newRule32(permasalahankesehatan, permasalahanpendidikan, permasalahanperkerjaan, permasalahansifat, permasalahantatakrama);
        console.log(rule1);
        console.log(rule2);
        console.log(rule3);
        console.log(rule4);
        console.log(rule5);
        console.log(rule6);
        console.log(rule7);
        console.log(rule8);
        console.log(rule9);
        console.log(rule10);
        console.log(rule11);
        console.log(rule12);
        console.log(rule13);
        console.log(rule14);
        console.log(rule15);
        console.log(rule16);
        console.log(rule17);
        console.log(rule18);
        console.log(rule19);
        console.log(rule20);
        console.log(rule21);
        console.log(rule22);
        console.log(rule23);
        console.log(rule24);
        console.log(rule25);
        console.log(rule26);
        console.log(rule27);
        console.log(rule28);
        console.log(rule29);
        console.log(rule30);
        console.log(rule31);
        console.log(rule32);

        console.log("awal");
        console.log((rule1.alfapredikat*rule1.z)+(rule2.alfapredikat*rule2.z)+(rule3.alfapredikat*rule3.z)+(rule4.alfapredikat*rule4.z)+(rule5.alfapredikat*rule5.z)
        +(rule6.alfapredikat*rule6.z)+(rule7.alfapredikat*rule7.z)+(rule8.alfapredikat*rule8.z)+(rule9.alfapredikat*rule9.z)+(rule10.alfapredikat*rule10.z)+(rule11.alfapredikat*rule11.z)
        +(rule12.alfapredikat*rule12.z)+(rule13.alfapredikat*rule13.z)+(rule14.alfapredikat*rule14.z)+(rule15.alfapredikat*rule15.z)+(rule16.alfapredikat*rule16.z)+(rule17.alfapredikat*rule17.z)
        +(rule18.alfapredikat*rule18.z)+(rule19.alfapredikat*rule19.z)+(rule20.alfapredikat*rule20.z)+(rule21.alfapredikat*rule21.z)+(rule22.alfapredikat*rule22.z)+(rule23.alfapredikat*rule23.z)
        +(rule24.alfapredikat*rule24.z)+(rule25.alfapredikat*rule25.z)+(rule26.alfapredikat*rule26.z)+(rule27.alfapredikat*rule27.z)+(rule28.alfapredikat*rule28.z)+(rule29.alfapredikat*rule29.z)+(rule30.alfapredikat*rule30.z)+(rule31.alfapredikat*rule31.z)+(rule32.alfapredikat*rule32.z)
        );
        console.log("akhir");
        console.log((rule1.alfapredikat+rule2.alfapredikat+rule3.alfapredikat+rule4.alfapredikat+rule5.alfapredikat+rule6.alfapredikat+rule7.alfapredikat+rule8.alfapredikat+rule9.alfapredikat+rule10.alfapredikat
            +rule11.alfapredikat+rule12.alfapredikat+rule13.alfapredikat+rule14.alfapredikat+rule15.alfapredikat+rule16.alfapredikat+rule17.alfapredikat+rule18.alfapredikat+rule19.alfapredikat+rule20.alfapredikat
            +rule21.alfapredikat+rule22.alfapredikat+rule23.alfapredikat+rule24.alfapredikat+rule25.alfapredikat+rule26.alfapredikat+rule27.alfapredikat+rule28.alfapredikat+rule29.alfapredikat+rule30.alfapredikat
            +rule31.alfapredikat+rule32.alfapredikat));

        var hasil_awal = (rule1.alfapredikat*rule1.z)+(rule2.alfapredikat*rule2.z)+(rule3.alfapredikat*rule3.z)+(rule4.alfapredikat*rule4.z)+(rule5.alfapredikat*rule5.z)
        +(rule6.alfapredikat*rule6.z)+(rule7.alfapredikat*rule7.z)+(rule8.alfapredikat*rule8.z)+(rule9.alfapredikat*rule9.z)+(rule10.alfapredikat*rule10.z)+(rule11.alfapredikat*rule11.z)
        +(rule12.alfapredikat*rule12.z)+(rule13.alfapredikat*rule13.z)+(rule14.alfapredikat*rule14.z)+(rule15.alfapredikat*rule15.z)+(rule16.alfapredikat*rule16.z)+(rule17.alfapredikat*rule17.z)
        +(rule18.alfapredikat*rule18.z)+(rule19.alfapredikat*rule19.z)+(rule20.alfapredikat*rule20.z)+(rule21.alfapredikat*rule21.z)+(rule22.alfapredikat*rule22.z)+(rule23.alfapredikat*rule23.z)
        +(rule24.alfapredikat*rule24.z)+(rule25.alfapredikat*rule25.z)+(rule26.alfapredikat*rule26.z)+(rule27.alfapredikat*rule27.z)+(rule28.alfapredikat*rule28.z)+(rule29.alfapredikat*rule29.z)+(rule30.alfapredikat*rule30.z)+(rule31.alfapredikat*rule31.z)+(rule32.alfapredikat*rule32.z);
        var hasil_akhir = (rule1.alfapredikat+rule2.alfapredikat+rule3.alfapredikat+rule4.alfapredikat+rule5.alfapredikat+rule6.alfapredikat+rule7.alfapredikat+rule8.alfapredikat+rule9.alfapredikat+rule10.alfapredikat
            +rule11.alfapredikat+rule12.alfapredikat+rule13.alfapredikat+rule14.alfapredikat+rule15.alfapredikat+rule16.alfapredikat+rule17.alfapredikat+rule18.alfapredikat+rule19.alfapredikat+rule20.alfapredikat
            +rule21.alfapredikat+rule22.alfapredikat+rule23.alfapredikat+rule24.alfapredikat+rule25.alfapredikat+rule26.alfapredikat+rule27.alfapredikat+rule28.alfapredikat+rule29.alfapredikat+rule30.alfapredikat
            +rule31.alfapredikat+rule32.alfapredikat);
        
        return hasil_awal/hasil_akhir;
    }

    /** calculateProduksi
     * get the permintaan and persediaan value from text field and prints
     * the production amount calculated
     */
    function calculateProduksi(a,b,c,d,e) {
        var kesehatan = a;
        var pendidikan = b;
        var pekerjaan = c;
        var sifat = d;
        var tatakrama = e;

        hasil = defuzzyfikasi(kesehatan,pendidikan,pekerjaan,sifat,tatakrama);
        return hasil;
    }

    /** setMinPermintaan
     * set the minPermintaan variable with value from text input
     */
    function setMinPermintaan () {
        minPermintaan =  document.getElementById('newMinPermintaan').value;
    }

    /** setMaxPermintaan
     * set the maxPermintaan variable with value from text input
     */
    function setMaxPermintaan() {
        maxPermintaan =  document.getElementById('newMaxPermintaan').value;
    }

    /** setMinPersediaan
     * set the minPersediaan variable with value from text input
     */
    function setMinPersediaan(params) {
        minPersediaan =  document.getElementById('newMinPersediaan').value;
    }

    /** setMaxPersediaan
     * set the maxPersediaan variable with value from text input
     */
    function setMaxPersediaan() {
        maxPermintaan =  document.getElementById('newMaxPersediaan').value;
    }

    /**
     * set the min and max variables to it's initial value
     */
    function resetMinMax() {
        minPermintaan = 1000;
        maxPermintaan = 5000;
        minPersediaan = 100;
        maxPersediaan = 600;
    }