//list all phonebooks from the database
async function listAllPhones() {
    console.log('listAllPhones()');

    //clear list
    let phonebookList = document.querySelector('#phonebook');
    phonebookList.innerHTML = '';
    //phonebooks databse
    let url = `https://phonebook-38dba.firebaseio.com/phonebook.json`;
    //let url = `https://messanger-10944.firebaseio.com/messenger.json`;
    let phones = [];

    await fetch(url)
        .then(p => p.json())
        .then(p => {
            
            // ip the phonebook db has more than 0 entries iterate them
            if (p) {

                for (const ph of Object.entries(p)) {
                    //check if any of the entries is null
                    if (ph[1] != null && ph[0] != null) {
                        
                        let arr = Object.entries(ph);
                        let index = arr[0][1];
                        let person = arr[1][1].person;
                        let phone = arr[1][1].phone;
                        //add the phone to the phones array
                        phones.push({ index, person, phone });

                    }
                }

            }
        });

    //appends all phones to the page - on element #phonebook
    for (const phone of phones) {
        appendPhone(phone.index, phone.person, phone.phone);
    }
}

async function appendPhone(index, person, phone) {
    //phone book field
    let phonebookList = document.querySelector('#phonebook');

    let li = document.createElement('li');
    let content = `${person}:${phone}`;
    li.innerText = content;
    //Delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    //Delete event listener
    deleteButton.addEventListener('click', () => {
        let indexToDelete = index;
        deletePhone(indexToDelete)
            .then(() => {
                listAllPhones();
            });
        //refresh the page
    });

    li.appendChild(deleteButton);
    phonebookList.appendChild(li);
}

//deletes a phone from the phonebook
async function deletePhone(id) {
    //URL of request
    let url = `https://phonebook-38dba.firebaseio.com/phonebook/${id}.json`;
    console.log('deletePhones()');

    await fetch(url, {
        method: 'DELETE',
    });

};

// The function is called after Create is clicked. creates a new contact
async function createPhoneContact() {
    //values of the person and phone input
    let person = document.querySelector('#person').value;
    let phone = document.querySelector('#phone').value;

    let url = `https://phonebook-38dba.firebaseio.com/phonebook.json`;
    let obj = {person, phone};

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(() => {
        //refresh the page after a contact is created
        listAllPhones();
    });
}

function attachEvents() {
    //buttons Create and Load
    let loadButton = document.querySelector('#btnLoad');
    let createButton = document.querySelector('#btnCreate')
    // person and phone values
   

    //Load
    loadButton.addEventListener('click', listAllPhones);
    //Create
    createButton.addEventListener('click', createPhoneContact);

}

attachEvents();