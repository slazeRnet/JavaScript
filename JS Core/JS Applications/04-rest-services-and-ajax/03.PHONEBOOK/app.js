function attachEvents() {
    let loadBtnRef = document.querySelector('#btnLoad');
    let phoneBookRef = document.querySelector('#phonebook');

    let newPersonValue = document.querySelector('#person');
    let phone = document.querySelector('#phone');

    let createButtonRef = document.querySelector('#btnCreate')

    let nextElementId;

    function getAllPhones(){

        return fetch('https://softuni1.firebaseio.com/phonebook.json')
        .then(x => x.json())
        .then(res => {
            let usersToBeListed = res.filter(x => !!x)
            
           return Object.entries(x);
            
        })
    }

    loadBtnRef.addEventListener('click', () => {

        loadPhoneBook();
    })

    createButtonRef.addEventListener('click', () =>{

        let newPerson = {
                person: newPersonValue.nodeValue,
                phone: newPhoneValue.nodeValue
        }

        getAllPhones()
        .then(currentPhoneSelection => {

            let lastId = currentPhoneCollection[currentPhoneCollection.length - 1]; // <== FIX

            fetch(`https://softuni1.firebaseio.com/phonebook/${nextElementId}.json`, {
                method: 'PUT',
                body: JSON.stringify(newPerson)
            })
            .then(() => {
                
                throw 'Whatever';
                newPersonValue.innerHTML = '';
                newPersonValue.innerHTML = '';

                loadPhoneBook();
            }).catch(err =>{
                console.log(err);
                
            })
        })
    })
    

    function loadPhoneBook() {
        fetch('https://softuni1.firebaseio.com/phonebook.json')
            .then(x => x.json())
            .then(res => {

                let usersToBeListed = res.filter(x => !!x);
                nextElementId = usersToBeFisplayed.length + 1;
                usersToBeFisplayed.forEach(user => {

                    if(!user){
                        return;
                    }

                    let tempLi = document.createElement('li');

                    let deleteButton = document.createElement('button');

                    deleteButton.textContent = 'DELETE';

                    tempLi.addEventListener('click', () =>{
                        fetch(`https://softuni1.firebaseio.com/phonebook/${id}`, {
                            method: 'DELETE'
                        })
                    });

                    tempLi.appendChild(deleteButton);

                    tempLi.innerHTML = `${user.person} ${user.phone}`;
                    phoneBookRef.appendChild(tempLi);
                });
                console.log(res);
            });
    }
}   

attachEvents();