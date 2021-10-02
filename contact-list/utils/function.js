const fs = require('fs');

//Make directory
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// Make data json
const dataPath = './data/contact.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8');
}

//Load Data
const loadContact = ()=>{
    const file = fs.readFileSync('data/contact.json','utf-8');
    const contacts = JSON.parse(file);
    return contacts;
}

//Save data 
const saveContact = (contacts)=>{
    fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
}

//tambah data
const Addcontact = (contact)=>{
    const contacts = loadContact();
    contacts.push(contact);
    saveContact(contacts);
}


// Export file
module.exports = {loadContact,Addcontact}