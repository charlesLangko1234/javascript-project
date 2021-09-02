// Product
const products = document.querySelectorAll('.product');
const productsBaju = document.querySelectorAll('.baju');
const productsBag = document.querySelectorAll('.bag');
const productsJam = document.querySelectorAll('.jam');
const productsSepatu = document.querySelectorAll('.sepatu');

// Button
const btnBaju = document.querySelector('.btnBaju');
const btnSepatu = document.querySelector('.btnSepatu');
const btnJam = document.querySelector('.btnJam');
const btnTas = document.querySelector('.btnTas');
const btnAll = document.querySelector('.btnAll');
const btnSearch = document.querySelector('.search-icon');

// input
const searchInput = document.querySelector('.search-input');

// Function
function noneAllProduct(){
    products.forEach(product => {
        product.style.display = "none";
    });
}

function product(data){
    data.forEach(datum =>{
        datum.style.display = 'inline-block';
    });
    searchInput.value = '';
}


// Action
btnBaju.addEventListener('click',()=>{
    noneAllProduct();    
    product(productsBaju);
});

btnSepatu.addEventListener('click',()=>{
    noneAllProduct();    
    product(productsSepatu);
});

btnJam.addEventListener('click',()=>{
    noneAllProduct();    
    product(productsJam);
});

btnTas.addEventListener('click',()=>{
    noneAllProduct();    
    product(productsBag);
});

btnAll.addEventListener('click',()=>{
    noneAllProduct();
    products.forEach(product => {
        product.style.display = "inline-block";
    });
});

btnSearch.addEventListener('click',()=>{
    let cari = String(searchInput.value).toLocaleUpperCase();
    noneAllProduct();
    if(cari==="BAJU"){
        product(productsBaju);
    } else if(cari==="SEPATU"){
        product(productsSepatu);
    } else if(cari==="TAS"){
        product(productsBag);
    } else if(cari==="JAM"){
        product(productsJam);
    } else {
        noneAllProduct();
    }
});