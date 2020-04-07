function solve() {
    let stringField = document.getElementById('string').value;
    let textField = document.getElementById('text').value;
    let resultSpan = document.getElementById('result');
    let string = stringField;
    let text = textField;

    let pattern = /(east|north)[\s\S]*?([0-9]{2})[^,]*,[^,]*?([0-9]{6})/gim;
    let patternMessage = new RegExp(`${string}(.*?)${string}`, `gi`); //<===== 
    let latitude = '';
    let longitude = '';
    let match = pattern.exec(text);
    console.log(match);
    while(match){
        if(match[1].toLowerCase() == 'north'){
            latitude = match[2] + '.' + match[3] + ' N';
        }
        else{
            longitude = match[2] + '.' + match[3] + ' E';
        }
        match = pattern.exec(text);
        console.log(match);
        
    }

    let message = patternMessage.exec(text);
    let messageFinal = 'Message: ' + message[1];
 
     console.log(messageFinal);
    
    let p1 = document.createElement("p");
    p1.textContent = latitude;
    resultSpan.appendChild(p1);
    let p2 = document.createElement("p");
    p2.textContent = longitude;
    resultSpan.appendChild(p2);
    let p3 = document.createElement("p");
    p3.textContent = messageFinal;
    resultSpan.appendChild(p3);
}