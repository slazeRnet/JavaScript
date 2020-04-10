function solve() {
    let addTaskButton = document.getElementById('add');

    // ADD TASK BUTTON
    addTaskButton.addEventListener('click', (e) => {
        e.preventDefault();
        let task = document.getElementById('task').value;
        let description = document.getElementById('description').value;
        let date = document.getElementById('date').value;
        if (task && description && date) {
            openTask(task, description, date);
        }
    });

    function openTask(task, description, date) {
        let sectionOpenTask = document.querySelector('body div').childNodes[3].childNodes[3];

        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let descriptionField = document.createElement('p');
        let dateField = document.createElement('p');
        let div = document.createElement('div');
        div.setAttribute('class', 'flex');
        //set values from the params
        h3.innerHTML = task;
        descriptionField.innerText = 'Description: ' + description;
        dateField.innerText =  'Due Date: ' + date;
        let start = document.createElement('button');
        let deleteButton = document.createElement('button');
        start.setAttribute('class', 'green');
        deleteButton.setAttribute('class', 'red');
        // button events
        start.addEventListener('click', (e) => {
            taskStart(e);
        })
        deleteButton.addEventListener('click', (e) => {
            taskDelete(e);
        })
        start.innerHTML = 'Start';
        deleteButton.innerHTML = 'Delete';
        div.appendChild(start);
        div.appendChild(deleteButton);

        article.appendChild(h3);
        article.appendChild(descriptionField);
        article.appendChild(dateField);
        article.appendChild(div);
        sectionOpenTask.appendChild(article)
    }

    function setTaskInProgress(article) {
        let sectionInProgress = document.querySelector('body div').childNodes[5].childNodes[3];
        let articleClone = article.cloneNode(true);
        let articleDiv = articleClone.childNodes[3];
        articleDiv.innerHTML = '';
        // set the buttons
        article.remove();
        
        let finish = document.createElement('button');
        let deleteButton = document.createElement('button');
        finish.setAttribute('class', 'orange');
        deleteButton.setAttribute('class', 'red');
        // button events
        finish.addEventListener('click', (e) => {
            taskFinish(e);
        })
        deleteButton.addEventListener('click', (e) => {
            taskDelete(e);
        })
        finish.innerHTML = 'Finish';
        deleteButton.innerHTML = 'Delete';
        articleDiv.appendChild(deleteButton);
        articleDiv.appendChild(finish);

        sectionInProgress.appendChild(articleClone);

    }

    function completeTask(article){
        let sectionInComplete = document.querySelector('body div').childNodes[7].childNodes[3];
       article.childNodes[3].remove();
       sectionInComplete.appendChild(article);
        console.log(sectionInComplete);
        
    }

    //Start
    function taskStart(event) {
        let articleDiv = event.target.parentElement.parentElement;
        setTaskInProgress(articleDiv);
    }

    function taskDelete(event) {
        event.target.parentElement.parentElement.remove();
    }
    // Finish
    function taskFinish(event) {
        let article = event.target.parentElement.parentElement;
        
        completeTask(article);
    }
}