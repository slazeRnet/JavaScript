function solve() {
let quizzie = document.getElementById('quizzie');
let sections = document.getElementsByTagName('section');
let resultBlock = document.querySelector('.results-inner h1');

let correctAnswears = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
let correctAnswearsCounter = 0;
let currentStep = 0;
quizzie.addEventListener('click', (e) =>{
  if(e.target.className = 'answer-text'){
    console.log(e.target.innerHTML);
    
    let isAnswearCorrect = correctAnswears.some(answear => answear === e.target.innerHTML);
    sections[currentStep].style.display = "none";
    if(isAnswearCorrect){
      correctAnswearsCounter++;
    }

    currentStep++;
    if(currentStep < correctAnswears.length){
      sections[currentStep].style.display = "block";

    }
    else{
      document.querySelector('#results').style.display = "block";
      resultBlock.innerHTML = correctAnswearsCounter == correctAnswears.length ?
       "You are recognized as top JavaScript fan!" 
       : `You have ${correctAnswearsCounter} right answers`;
    }

    }
})
}
