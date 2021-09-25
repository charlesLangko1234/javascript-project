const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(()=>{
    let day = new Date();
    let hh = day.getHours(); // Jam dikali sudut
    let mm = day.getMinutes()*deg;
    let ss = day.getSeconds()*deg;

    if(hh>12) {
        hh-=12;
    }
    hh*=30;

    hr.style.transform = `rotateZ(${(hh)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`

    // console.log(mm);
});