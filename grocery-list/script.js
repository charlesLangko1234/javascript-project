const inputNama = document.getElementsByTagName('input')[0];
const inputJumlah = document.getElementsByTagName('input')[1];
const addBtn = document.querySelector('.icon');
const lists = document.querySelector('.lists ul');


let jumlahBarang = 0;

function addList(nama,jmlh){
    const namaB = document.createElement('li');
    namaB.innerHTML = `${nama} Sejumlah ${jmlh}`;
    const cek = document.createElement('input');
    cek.setAttribute('type','radio');
    namaB.appendChild(cek);
    lists.appendChild(namaB); 
}


addBtn.addEventListener('click',()=>{
    let nama = inputNama.value;
    let jmlh = inputJumlah.value;
    addList(nama,jmlh);
});