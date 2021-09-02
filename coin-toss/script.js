const statHead = document.querySelector('.headNum');
const statTail = document.querySelector('.tailNum');
const coin = document.querySelector('.coin');
const spinBtn = document.querySelector('.buttonSpin');
const resetBtn = document.querySelector('.buttonReset');

var head = 0, tail = 0;
var rand;

function update(){
    setTimeout(()=>{
        statHead.textContent = `Head : ${head}`;
        statTail.textContent = `Tail : ${tail}`;
    },3000)
}

spinBtn.addEventListener('click',()=>{
    rand = Math.floor(Math.random()*2);
    coin.style.animation = "none";
    
    if(rand>=1){
        setTimeout(()=>{
            coin.style.animation = "animate-head 3s forwards";
        },100);
        head++;
    } else if(rand<1) {
        setTimeout(()=>{
            coin.style.animation = "animate-tail 3s forwards";
        }, 100)
        tail++;
    }
    update();
});

resetBtn.addEventListener('click',()=>{
    head = 0, tail = 0;
    statHead.textContent = `Head : ${head}`;
    statTail.textContent = `Tail : ${tail}`;
});