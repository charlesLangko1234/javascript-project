const fs = require('fs');

// Make data directory
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// Make data json
const dataPath = './data/money.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8');
}

// Load Data
const loadMoney = ()=>{
    const file = fs.readFileSync('data/money.json','utf-8');
    const moneys = JSON.parse(file);
    return moneys;
}

// Save data
const saveMoney = (moneys)=>{
    fs.writeFileSync('data/money.json',JSON.stringify(moneys));
}

// Tambah data
const addMoney = (money)=>{
    const moneys = loadMoney();
    moneys.push(money);
    saveMoney(moneys);
}


// Export function
module.exports = {loadMoney, addMoney}