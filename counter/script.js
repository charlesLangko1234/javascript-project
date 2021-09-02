const number = document.getElementsByClassName('number')[0];
const tambah = document.getElementsByClassName('tambah')[0];
const kurang = document.getElementsByClassName('kurang')[0];

var count = 0;

tambah.addEventListener('click',()=>{
    count+=1;
    number.innerHTML = count;
});

kurang.addEventListener('click',()=>{
    count-=1;
    number.innerHTML = count;
});