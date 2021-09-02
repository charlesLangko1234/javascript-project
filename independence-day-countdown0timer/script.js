const day = document.getElementsByClassName('day')[0];
const hour = document.getElementsByClassName('hour')[0];
const minute = document.getElementsByClassName('minute')[0];
const second = document.getElementsByClassName('second')[0];
const text = document.getElementsByTagName('h1')[0];

const waktuTujuan = new Date('August 17, 2021 00:00:01').getTime();

const waktu = setInterval(function(){
    const waktuSekarang = new Date().getTime();
    const selisih = waktuTujuan - waktuSekarang;
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);
    

    if(selisih <= 0) {
        text.innerHTML = "Happy Independence Day";
        text.style.color = 'whiteSmoke';
        day.innerHTML = "0";
        hour.innerHTML = "0";
        minute.innerHTML = "0";
        second.innerHTML = "0";
    } else {
        day.innerHTML = hari;
        hour.innerHTML = jam;
        minute.innerHTML = menit;
        second.innerHTML = detik;
    }
},1000);
