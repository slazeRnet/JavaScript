// function that appends text to HTML element
function print (json){
    // reference to the element to be appended
    let body = document.getElementById('main-section')
    // text paragraph
    let textField = document.createElement('p');
    textField.innerHTML = JSON.stringify(json);
    // bold text
    textField.setAttribute('font-weight', 'strong');
    body.appendChild(textField);

}

// export the function
export { print }