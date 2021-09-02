const btn = document.getElementsByTagName('a')[0];
const judul = document.getElementsByTagName('h1')[0];

btn.addEventListener('click', ()=>{
    let red = Math.floor(Math.random()*255+1);
    let green = Math.floor(Math.random()*255+1);
    let blue = Math.floor(Math.random()*255+1);
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    judul.style.color = `rgb(${255-red},${255-green},${255-blue})`;
});