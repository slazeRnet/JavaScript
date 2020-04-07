
function mySolution(){

let sendButton = document.querySelector('body  section[id="inputSection"]')
.getElementsByTagName('div')[0].getElementsByTagName('button')[0];

let pendingQuestionsArea = document.querySelector('body  section[id="outputSection"] div[id="pendingQuestions"]');
let openQuestionsArea = document.querySelector('body  section[id="outputSection"] div[id="openQuestions"]');
var divPendingQuestion;
var divOpenQuestion;
var spanUsername;
var img;
var pQuestion;
var divForActions;
var buttonArchive;
var buttonOpen;
var buttonReply;
var divReplySection;
var inputReplyInput;
var buttonReplyButton;
var ol;
var li;
setElementsDefault();

sendButton.addEventListener('click', function(e){
    e.preventDefault();
    let inputData = getUserAndText();
    postQuestion(inputData[1], inputData[0]);
});

function postQuestion(text, username){
    divPendingQuestion.appendChild(img);
    if(username != ''){
        spanUsername.innerHTML = username;
    }
    divPendingQuestion.appendChild(spanUsername);
    pQuestion.innerHTML = text;
    divPendingQuestion.appendChild(pQuestion);
    divForActions.appendChild(buttonArchive);
    divForActions.appendChild(buttonOpen);
    divPendingQuestion.appendChild(divForActions);
    pendingQuestionsArea.appendChild(divPendingQuestion);
    setElementsDefault();
};

function removeQuestion(e){
e.target.parentElement.parentElement.remove();
//setElementsDefault();
}

function moveToOpenSection(e){
    let element = e.target.parentElement.parentElement;
    element.setAttribute('class', 'openQuestion');
    openQuestionsArea.appendChild(element);
    element.children[3].remove();
    divForActions.appendChild(buttonReply);
    element.appendChild(divForActions);
    
    divReplySection.appendChild(inputReplyInput);
    divReplySection.appendChild(buttonReplyButton);
    divReplySection.appendChild(ol);
    element.appendChild(divReplySection);
    console.log(element);
    
    setElementsDefault();
};

function reply(e){
e.target.innerHTML = 'Back';

 e.target.parentElement.parentElement.children[4].setAttribute('style', 'display: block;');
 e.target.addEventListener('click',  function(e) { e.target.removeEventListener('click', function(e){ reply(e)}) });
  e.target.addEventListener('click', function(e) { back(e) });
  console.log(e.target);
  
};

function back(e){
    e.target.innerHTML = 'Reply';
    e.target.parentElement.parentElement.children[4].setAttribute('style', 'display: none;');
    e.target.addEventListener('click',  function(e) { e.target.removeEventListener('click', function(e){ back(e)}) });
    e.target.addEventListener('click', function(e) { reply(e) });


};

function send(e){
let text = e.target.parentElement.children[0].value;
console.log('text for send button : ' + text);
li.innerHTML = text;
e.target.parentElement.children[2].appendChild(li);
setElementsDefault();
};

function setElementsDefault(){
//elements
divPendingQuestion = document.createElement('div');
divPendingQuestion.setAttribute("class", "pendingQuestion");

divOpenQuestion = document.createElement('div');
divOpenQuestion.setAttribute("class", "openQuestion");
spanUsername = document.createElement('span');
spanUsername.innerHTML = 'Anonymous';

img = document.createElement('img')
img.setAttribute('src', './images/user.png')
img.setAttribute('width', '32')
img.setAttribute('height', '32');

pQuestion = document.createElement('p');

divForActions = document.createElement('div');
divForActions.setAttribute('class', 'actions');
//buttons for pending question
buttonArchive = document.createElement('button');
buttonArchive.setAttribute('class', "archive");
buttonArchive.innerHTML = 'Archive';
buttonArchive.addEventListener('click', function(e){
    removeQuestion(e);
});

buttonOpen = document.createElement('button');
buttonOpen.setAttribute('class', "open")
buttonOpen.innerHTML = 'Open';
buttonOpen.addEventListener('click', function(e){
moveToOpenSection(e);
});

// buttons for openQuestion
buttonReply = document.createElement('button');
buttonReply.setAttribute('class', "reply");
buttonReply.innerHTML = 'Reply';
buttonReply.addEventListener('click', function(e){
reply(e);
});

divReplySection = document.createElement('div');
divReplySection.setAttribute('class', 'replySection');
divReplySection.style.display = 'none';

inputReplyInput = document.createElement('input');
inputReplyInput.setAttribute('class', 'replyInput');
inputReplyInput.setAttribute('type', 'text');
inputReplyInput.setAttribute('placeholder', 'Reply to this question here...');

buttonReplyButton = document.createElement('button');
buttonReplyButton.setAttribute('class', 'replyButton');
buttonReplyButton.innerHTML = "Send";
buttonReplyButton.addEventListener('click', function(e){
    send(e);
});

ol = document.createElement('ol');
ol.setAttribute('class', 'reply');
ol.setAttribute('type', '1');

li = document.createElement('li');
}

function getUserAndText(){
    let typeQuestionTextArea = document.querySelector('body  section[id="inputSection"]')
.getElementsByTagName('textarea')[0].value;
let userName = document.querySelector('body  section[id="inputSection"]')
.getElementsByTagName('div')[0].getElementsByTagName('input')[0].value;

return [userName, typeQuestionTextArea];
};



}