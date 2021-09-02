var imgPos = 0;

const img = document.querySelector('.img1');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function cekImgPos(){
    if(imgPos>3) return imgPos=1;
    else if(imgPos<1) return imgPos=3;
    else return imgPos;
}

next.addEventListener('click',()=>{
    imgPos+=1;
    imgPos = cekImgPos();
    img.setAttribute('src',`img/${imgPos}.jpg`);
});

prev.addEventListener('click',()=>{
    imgPos-=1;
    imgPos = cekImgPos();
    img.setAttribute('src',`img/${imgPos}.jpg`);
});

setInterval(()=>{
    imgPos+=1;
    imgPos = cekImgPos();
    img.setAttribute('src',`img/${imgPos}.jpg`);
},5000);
