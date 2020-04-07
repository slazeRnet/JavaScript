class Forum {
        users = [];
        questions = [];
        id = 1;

    register(username, password, repeatPassword, email){
        if(!(username && password && repeatPassword && email)){
            throw new Error('Input can not be empty');
        }
        if(password !== repeatPassword){
            throw new Error('Passwords do not match');
        }
        
        if(this.users.some(u => u.username === username)){
            throw new Error('This user already exists!');
        }   
        let user = {username, password, email, logged: false};

        this.users.push(user);
        return `${username} with ${email} was registered successfully!`;

    }

    login(username, password){
        if(!this.users.some(u => u.username == username)){
            throw new Error('There is no such user');
        }
        else if(this.users.some(u => u.username === username && u.password === password)){
            this.users.filter(u => u.username === username)[0].logged = true;
                return `Hello! You have logged in successfully`;
        }
    }
    logout(username, password){
        if(!this.users.some(u => u.username == username)){
            throw new Error('There is no such user');
        }
        else if(this.users.some(u => u.username === username && u.password === password)){
            this.users.filter(u => u.username === username)[0].logged = false;
                return `You have logged out successfully`;
        }
    }


    postQuestion(username, question){
         if(!this.users.some(u => u.username == username && u.logged == true)){
            throw new Error('You should be logged in to post questions');
            
        }
        if(question === ''){
            throw new Error('Invalid question');
        }
        let currentId = this.id;
        let newQuestion = {id: currentId,username, question, answers: []};
        this.questions.push(newQuestion);
        this.id++;
        return 'Your question has been posted successfully';
    }

    postAnswer(username, questionId, answer){
        if(!this.users.some(u => u.username === username && u.logged === true)){
            throw new Error('You should be logged in to post answers');
        };

        if(questionId === ""){
            throw new Error('Invalid answer');
        };

        if(!this.questions.some(q => q.id === questionId)){
            throw new Error('There is no such question');
        };

        let currentAnswear = {username: username, answer: answer}
        this.questions.filter( q => q.id === questionId)[0].answers.push(currentAnswear);
        return `Your answer has been posted successfully`;

    }

    showQuestions(){
        let output = '';
        for (const questionIndex in this.questions) {
            if (questionIndex == this.questions.length - 1 &&  this.questions[questionIndex].answers.length == 0) {
                    output += `Question ${this.questions[questionIndex].id} by ${this.questions[questionIndex].username}:` +
                    ` ${this.questions[questionIndex].question}`;
            }
            else{
                output += `Question ${this.questions[questionIndex].id} by ${this.questions[questionIndex].username}:` +
                ` ${this.questions[questionIndex].question}\n`;
            }
            for (const answerIndex in this.questions[questionIndex].answers) {
                if (questionIndex == this.questions.length - 1 &&
                    answerIndex == this.questions[questionIndex].answers.length -1) {
                        output += `---${this.questions[questionIndex].answers[answerIndex].username}:` + 
                        ` ${this.questions[questionIndex].answers[answerIndex].answer}`;
                }
                else{
                    output += `---${this.questions[questionIndex].answers[answerIndex].username}:` + 
                    ` ${this.questions[questionIndex].answers[answerIndex].answer}\n`;
                }
            }
        } 
        return output.trim();
    }


}

// let forum = new Forum();

// forum.register('Michael', '123', '123', 'michael@abv.bg');
// forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
// forum.login('Michael', '123');
// forum.login('Stoyan', '123ab7');

// forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
// forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
// forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
// forum.postAnswer('Michael',2, "How old is she?");
// forum.postAnswer('Michael',2, "Tell us how tall she is.");

// console.log(forum.showQuestions());

let forum = new Forum();

console.log(forum.register('Jonny', '12345', '12345', 'jonny@abv.bg'));
console.log(forum.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com'));
console.log(forum.login('Jonny', '12345'));
console.log(forum.login('Peter', '123ab7'));
console.log(forum.logout('Peter', '123ab6'));
console.log(forum.postQuestion('Jonny', "Do I need glasses for skiing?"));
console.log(forum.postAnswer('Peter',1, "Yes, I have rented one last year."));
console.log(forum.postAnswer('Jonny',1, "What was your budget"));
console.log(forum.postAnswer('Peter',1, "$50"));
console.log(forum.postAnswer('Jonny',1, "Thank you :)"));

console.log(forum.showQuestions());


