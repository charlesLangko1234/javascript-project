const month = document.getElementsByClassName('month')[0];
const date = document.getElementsByClassName('date')[0];
const year = document.getElementsByClassName('year')[0];
const day = document.getElementsByClassName('day')[0];

const listMonth = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

const listDay = ['Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu','Minggu'];

setInterval(()=>{
    month.innerHTML = listMonth[new Date().getMonth()];
    date.innerHTML = new Date().getDate();
    year.innerHTML = new Date().getFullYear();
    day.innerHTML = listDay[new Date().getDay()-1];
},1000)