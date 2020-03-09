function getInfo() {
    let button = document.getElementById('submit');
    let inputField = document.getElementById('stopId');

    button.addEventListener('click', () => {

        let id = inputField.value;

        fetch(`./businfo/${id}`).then(function (response) {

            let stopName;

            if (response.status !== 200) {
                stopName = 'Error';
            }

            response.json().then(function (data) {
                console.log(data); // logs 10 objects of users on the console

            });
        });
    });


}