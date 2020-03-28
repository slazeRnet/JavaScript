//inport the const apiKey
import {importedValue} from './export.js';
//DOM
let text = document.getElementById('text');
let importText =document.getElementById('import-text-button');
//button event listener
importText.addEventListener('click', print);

function print(){
    text.innerHTML = importedValue;
    
};