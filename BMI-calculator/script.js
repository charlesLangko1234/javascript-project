const weight = document.getElementById('weight');
const height = document.getElementById('height');
const btn = document.getElementsByTagName('button')[0];
const displayAkhir = document.getElementsByTagName('h2')[0];

var berat = 0, tinggi = 0;
var display = '';

function cek(num) {
    if(num >= 19.0 && num<=24.9) {display+= "- Normal"};
    if(num >= 25.0 && num<=29.9) {display+= "- Overweight"};
    if(num >= 30.0 && num<=34.9) {display+= "- Obesity Level 1"};
    if(num >= 35.0 && num<=39.9) {display+= "- Obesity Level 2"};
    if(num >= 40.0) {display+= "- Obesity Level 3"};

    return display;
}

btn.addEventListener('click',()=>{
    berat = Number(weight.value);
    tinggi = Number(height.value);

    var hasil = Math.floor(berat / (tinggi*tinggi));
    console.log(hasil)
    display+=String(hasil) + " ";

    console.log(display)
    displayAkhir.innerHTML = cek(hasil);;
});