// Refresh
function listAllMessseges() {
    let textarea = document.getElementById('messages');
    textarea.innerHTML = '';
    var url = `https://messanger-10944.firebaseio.com/messenger.json`;
   fetch(url)
        .then(messeges => {

            return messeges.json();

        }).then(messeges => {

            for (const message of Object.values(messeges)) {
                appendMessage(message.author, message.content);
            }
        });

}

// appends the message to the text area
function appendMessage(author, content) {
    let textarea = document.getElementById('messages');

    if (author && content) {
        textarea.innerHTML += `${author}: ${content}\n`;
    }
}

//Submit
async function submitMessage() {
    let authorValue = document.getElementById('author').value;
    let contentValue = document.getElementById('content').value;

    postMessage(authorValue, contentValue).then(() => {
    //refresh messages
        listAllMessseges();
    })
}

// post request to the DB
async function postMessage(author, content) {
    var url = `https://messanger-10944.firebaseio.com/messenger.json`;

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify({ author, content })
    }).then(responce => {
        console.log(responce);
        
        return responce;
    });

}
//Main function
function attachEvents() {

    let refreshButton = document.getElementById('refresh');
    let submitButton = document.getElementById('submit');

    refreshButton.addEventListener('click', listAllMessseges);
    submitButton.addEventListener('click', submitMessage);
}

attachEvents();