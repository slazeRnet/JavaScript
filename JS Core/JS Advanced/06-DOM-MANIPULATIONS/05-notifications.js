function notify(message) {
    let button = document.getElementsByTagName('button')[0];
    let notification = document.getElementById('notification');
    notification.textContent = message;

    button.addEventListener('click', function(){
        notification.style.display = 'block';

        setTimeout(function(){
            notification.style.display = 'none';
        }, 2000);
    });
}
