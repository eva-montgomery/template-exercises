const friends = require('./contacts.json');
const faker = require('faker');

function getFakeContacts(howMany=5) {
    let result = '';
    while (howMany > 0) {
        let name = faker.name.findName();
        let email = faker.phone.phoneNumber();
        let email = faker.internet.email();
        let contact = `
        <h1>${name}</h1>
        <h2>${phone}, ${email}</h2>
    `;
    result += contact;
    howMany -= 1;
}
    return result;
   
}


// function getContacts() {
//     let result = '';
//     for (let friend of friends.contacts) {
//         const {name, phone, email} = friend;
        
//         let contact = `
//             <h1>${name}</h1>
//             <h2>${phone}, ${email}</h2>
//         `;
    
//     result += contact;
// }
//     return result;

// }

module.exports = {
    getContacts,
    getFakeContacts
};

