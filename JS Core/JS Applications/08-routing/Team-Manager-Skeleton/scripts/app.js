import { createFormEntity } from './form-helper.js';
import { fireBaseRequestFactory } from './firebase-request.js';

async function applyCommon() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }

    this.username = sessionStorage.getItem('username');
    this.loggedIn = !!sessionStorage.getItem('token');
    //DELETE
    this.hasNoTeam = true;
}
async function homeViewHandler() {
    await applyCommon.call(this);
    this.partial('./templates/home/home.hbs')
}

async function aboutViewHandler() {
    await applyCommon.call(this);
    this.partial('./templates/about/about.hbs')
}

async function loginPageViewHandler() {
    await applyCommon.call(this);
    this.partials.loginForm = await this.load('./templates/login/loginForm.hbs')
    await this.partial('./templates/login/loginPage.hbs');

    let formRef = await document.querySelector('#login-form');
    let form = await createFormEntity(formRef, ['username', 'password']);

    formRef.addEventListener('submit', (e) => {
        e.preventDefault();
        let formValues = form.getValue();
        firebase.auth().signInWithEmailAndPassword(formValues.username, formValues.password)
            .then(response => {
                console.log(response);
                firebase.auth().currentUser.getIdToken()
                    .then(token => {
                        sessionStorage.setItem('token', token);
                        sessionStorage.setItem('username', response.user.email);
                        console.log(token);
                    })
                    .then(() => {
                        this.redirect(['#/home']);
                    })
                    .catch(err => {
                        console.error(err);
                    });

            })
    })
}

async function registerPageViewHandler() {
    await applyCommon.call(this);
    this.partials.registerForm = await this.load('./templates/register/registerForm.hbs')

    await this.partial('./templates/register/registerPage.hbs');

    let formRef = await document.querySelector('#register-form')

    let form = await createFormEntity(formRef, ['username', 'password', 'repeatPassword']);
    formRef.addEventListener('submit', (e) => {
        e.preventDefault();
        let formValues = form.getValue();

        if (formValues.password !== formValues.repeatPassword) {
            console.error('Passwords must match!');

        }

        firebase.auth().createUserWithEmailAndPassword(formValues.username, formValues.password)
            .then((response) => {
                console.log(response);

                firebase.auth().currentUser.getIdToken()
                    .then(token => {
                        sessionStorage.setItem('token', token);
                        sessionStorage.setItem('username', response.user.email);
                        console.log(token);
                    });


                this.redirect(['#/home']);
            });
    })
}

async function logoutViewHandler() {
    sessionStorage.clear();
    firebase.auth().signOut().then(() => {
        this.redirect(['#/home']);

    }).then(() => {
        console.log('signed out succesfull');

    }).catch(function (error) {
        console.error('Error while trying to sign out!');

    });

}

async function catalogViewHandler() {
    await applyCommon.call(this);

    await this.partial('./templates/catalog/teamCatalog.hbs');
    let token = await sessionStorage.getItem("token");
    fetch('https://routing-67ec1.firebaseio.com/.json?auth=' + token)
        .then(x => {
            return x.json();
        })
        .then(x => {
            console.log(x);
        })
}

async function createViewHandler() {
    await applyCommon.call(this);
    this.partials.createForm = await this.load('./templates/create/createForm.hbs');

    await this.partial('./templates/create/createPage.hbs');

    let formRef = await document.querySelector('#create-form');
    let form = await createFormEntity(formRef, ['name', 'comment']);

    const firebaseTeams = await fireBaseRequestFactory('https://routing-67ec1.firebaseio.com/', 'teams', sessionStorage.getItem('token'));

    formRef.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let formValues = form.getValue();
        
        // console.log(sessionStorage.getItem('token'));
        // console.log(formValues);
        firebaseTeams.createEntity(formValues)
        //    .then(x => {
        //        console.log(x);
               
        //    })
    })
}

// initialize the application
var app = Sammy('#main', function () {
    // include a plugin
    this.use('Handlebars', 'hbs'); // plugin, file-extension

    // define a 'route'
    this.get('#/', homeViewHandler);
    this.get('#/home', homeViewHandler);
    this.get('#/about', aboutViewHandler);
    this.get('#/login', loginPageViewHandler);
    this.get('#/register', registerPageViewHandler);
    this.post('#/register', () => false);
    this.get('#/logout', logoutViewHandler);
    this.get('#/catalog', catalogViewHandler);
    this.get('#/create', createViewHandler);
    this.post('#/create', () => false);
});

(() => {
    // start the application
    app.run('#/');
})();