//list all phonebooks from the database
async function listAllPhones(){
    //phonebooks databse
    let url = `https://phonebook-38dba.firebaseio.com/phonebook.json`;   
    let phones = [];

    await fetch(url)
    .then(p => p.json())
    .then(p => {
       
        for (const phone of Object.entries(p)) {
            let arr = Object.entries(phone);
            console.log(arr);
            
            let {index[0][1], obj[1][1]} = arr; 
            phones.push({index, obj});
        }
    }).catch(err => {
        console.error('----' + err);
        
    });

   console.log(phones);
   
    
}

function attachEvents() {
    //buttons Create and Load
    let loadButton = document.querySelector('#btnLoad');
    let createButton = document.querySelector('#btnCreate')
    //phonebook List
    let phonebookList = document.querySelector('#phonebook');
    // person and phone values
    let personValue = document.querySelector('#person').value;
    let phoneValue = document.querySelector('#phone').value;

    loadButton.addEventListener('click', listAllPhones);
   
}   

attachEvents();