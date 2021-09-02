const bill_amount = document.getElementById('bill-amount');
const tip_precentage = document.getElementById('tip-precentage');
const tip_amount = document.getElementById('tip-amount');
const total_bill = document.getElementById('total-bill');
const calcBtn = document.getElementsByTagName('button')[0];
const clrBtn = document.getElementsByTagName('button')[1];

calcBtn.addEventListener('click',()=>{
   let bayarTip = bill_amount.value*(tip_precentage.value/100);
   tip_amount.value = bayarTip;
   total_bill.value = Number(tip_amount.value) + Number(bill_amount.value);
});

clrBtn.addEventListener('click',()=>{
    bill_amount.value = '';
    tip_precentage.value = '';
    tip_amount.value = '';
    total_bill.value = '';
});