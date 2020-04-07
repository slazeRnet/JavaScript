function solve() {
    let selectMenu = document.querySelectorAll('#selectMenuTo')[0]; // select menu
    let input = document.querySelector('#input'); // input
    let button = document.querySelector('button'); // button
    
    selectMenu.innerHTML = `
    <option selected value=""></option>
    <option value="binary">Binary</option>
    <option value="hexadecimal">Hexadecimal</option>
    `;


    button.addEventListener('click', () =>{
        let result = document.getElementById('result');
        let value;
        let number = parseInt(input.value);
        if(selectMenu.value === 'binary'){
           value = number.toString(2);
        }
        else{
            value = number.toString(16).toUpperCase();

        }
        
        document.getElementById('result').value = value;
    })

}