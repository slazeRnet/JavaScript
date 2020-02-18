function solve() {
    let stringField = document.getElementById('string').value;
    let textField = document.getElementById('text').value;
    let resultSpan = document.getElementById('result');
    let string = stringField;
    let text = textField;

    let patternLongitude = /(east)[^\d]*([0-9]{2})[^,]*,[^,]*?([0-9]{6})/gim;
    let patternLatitude = /(north)[^\d]*([0-9]{2})[^,]*,[^,]*?([0-9]{6})/gim;

    let patternMessage = new RegExp(`${string}(.+)${string}`, `gi`); //<===== 

    let lastMatchLatitude = text.match(patternLatitude).pop();
    let lastMatchLongitude = text.match(patternLongitude).pop();
    let matchesLatitude = patternLatitude.exec(lastMatchLatitude);
    let matchesLongitude = patternLongitude.exec(lastMatchLongitude);
    let northLocation = matchesLatitude[matchesLatitude.length-2] + "." + matchesLatitude[matchesLatitude.length-1] + " N";
    let eastLocation = matchesLongitude[matchesLongitude.length-2] + "." + matchesLongitude[matchesLongitude.length-1] + " E";
    console.log(northLocation);
    console.log(eastLocation);
    let message = patternMessage.exec(text);
    let messageFinal = 'Message: ' + message[1];
    
    // let tempArr2 = patternLatitude.exec(text);
    // let tempArr1 = patternLongitude.exec(text);

    // let latitude = tempArr2[2] + '.' + tempArr2[3] + ' N';
    // let longitude = tempArr1[2] + '.' + tempArr1[3] + ' E';
    // resultSpan.innerHTML = '';
    // resultSpan.innerHTML += latitude + '\n';
    // resultSpan.innerHTML += longitude + '\n';
    // resultSpan.innerHTML += message[1] + '\n';
    // console.log(latitude);
    // console.log(longitude);

    console.log(messageFinal);
    
    let p1 = document.createElement("p");
    p1.textContent = northLocation;
    resultSpan.appendChild(p1);
    let p2 = document.createElement("p");
    p2.textContent = eastLocation;
    resultSpan.appendChild(p2);
    let p3 = document.createElement("p");
    p3.textContent = messageFinal;
    resultSpan.appendChild(p3);
}
