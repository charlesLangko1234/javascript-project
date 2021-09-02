// var
var pilihanUser, pilihanCom, stat;

// pilihan user
const user = document.querySelectorAll('.down img');
const comImg = document.querySelector('.comImg');
const text = document.querySelector('.text');

function putar(){
    var gbr = ['gajah','semut','orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(()=>{
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        comImg.setAttribute('src','img/'+gbr[i++]+'.png')
        if(i>2) i=0;
    },100);
}

user.forEach(e =>{
    e.addEventListener('click',e=>{
        text.innerHTML = '';
        pilihanUser = e.target.className;
        var rand = Math.floor(Math.random()*10+1);
        if(rand<=4) pilihanCom="gajah";
        else if(rand>4 && rand<=7) pilihanCom="orang";
        else pilihanCom="semut";
        
        // tandingkan pilihan
        if(pilihanCom === pilihanUser) stat = 'DRAW';
        else if(pilihanCom==="orang"){
            stat = (pilihanUser==="gajah") ? "WIN" : "LOSE";
        } else if (pilihanCom === "gajah") {
            stat = (pilihanUser=="semut") ? "WIN" : "LOSE";
        } else if(pilihanCom === "semut") {
            stat = (pilihanUser==="orang") ? "WIN" : "LOSE";
        }

        putar();
        setTimeout(()=>{
            comImg.setAttribute('src',`img/`+pilihanCom+'.png');
            text.innerHTML = stat;
        },1000);
    });
});

// pilihan computer

// tandingkan pilihan 

// output pemenang