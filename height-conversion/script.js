const cm = document.getElementById('incm');
const feet = document.getElementById('infeet');
const btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click',()=>{
    incm = Number(cm.value);
    infeet = incm/30.48;
    feet.value = infeet;
})