const textArea = document.getElementsByTagName('textarea')[0];
const hasil = document.getElementsByClassName('result')[0];

setInterval(()=>{
    let text = textArea.value;
    text = text.trim();
    const arr = text.split(" ");
    hasil.innerHTML = arr.join("").length;
},10);