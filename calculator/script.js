const operation = document.getElementsByClassName('operation')[0];
const pads = document.querySelectorAll('.pad');
const del = document.getElementsByClassName('del')[0];

const history = [];
const num = [];
var stringDisplay = '';
var stringDisplay2 = '';
var hasil1 = 0, hasil2 = 0;

del.addEventListener('click',()=>{
    history.pop();
    num.pop();
    num.pop();
    stringDisplay = '';
    stringDisplay2 = '';
    operation.innerHTML = stringDisplay;
})

pads.forEach(pad => {
    pad.addEventListener('click',(e)=>{
        if(e.target.innerHTML === '+' || e.target.innerHTML === '-'){
            stringDisplay2+= " "+e.target.innerHTML+" ";
            num.push(Number(stringDisplay));
            history.push(e.target.innerHTML);
            operation.innerHTML = stringDisplay2;
            stringDisplay = '';
        } else if(e.target.innerHTML === '=') {
            num.push(Number(stringDisplay));
            if(history[history.length-1] === '+') {
                let hasil = num[0]+num[1];
                operation.innerHTML = hasil;
            } else if(history[history.length-1] === '-') {
                let hasil = num[0]-num[1];
                operation.innerHTML = hasil;
            }
        } else {
            stringDisplay+=e.target.innerHTML;
            stringDisplay2+=e.target.innerHTML;
            operation.innerHTML = stringDisplay2;            
        }
    })
});