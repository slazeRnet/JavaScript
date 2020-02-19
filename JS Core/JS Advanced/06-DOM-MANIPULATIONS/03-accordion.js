function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let textArea = document.getElementById('extra');

    if(button.innerText.toLowerCase() == 'more'){
        button.innerText = 'Less';
        textArea.style.display = 'block';
    }
    else{
        button.innerText = 'More';
        textArea.style.display = 'none';

    }
    
}
