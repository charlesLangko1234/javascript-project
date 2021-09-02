const title = document.getElementsByClassName('title')[0];
const body = document.getElementsByClassName('body')[0];
const close = document.getElementsByClassName('close')[0];
const tambah = document.getElementsByClassName('tambah')[0];

var tambahModals = 0;

tambah.addEventListener('click',()=>{
    tambahModals+=1;

    // Buat Container
    const container = document.createElement('div');
    container.classList.add('container');
    container.setAttribute('id',tambahModals);

    // Masukan Judul
    const inputJudul = prompt('Masukan Judul: ');
    const judul = document.createElement('h1');
    judul.classList.add('text');
    judul.classList.add('title');
    judul.innerHTML = inputJudul;


    // Buat Pembatas
    const batas1 = document.createElement('hr');
    const batas2 = document.createElement('hr');

    // Masukan Isi
    const inputIsi = prompt('Masukan Isi: ');
    const isi = document.createElement('h3');
    isi.classList.add('text');
    isi.classList.add('body');
    isi.innerHTML = inputIsi;

    // Tombol close
    const btn = document.createElement('div');
    btn.classList.add('btn');
    const close = document.createElement('button');
    close.setAttribute('type','button');
    close.classList.add('close');
    close.innerHTML = "close";
    btn.appendChild(close);

    // Gabungkan
    container.appendChild(judul);
    container.appendChild(batas1);
    container.appendChild(isi);
    container.appendChild(batas2);
    container.appendChild(btn);
    document.body.appendChild(container);
});



