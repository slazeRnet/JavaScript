import { createFormEntity } from './form-helper.js';
import { fireBaseRequestFactory } from './firebase-request.js';
import { apiKey } from './apiKey.js';

// load header and footer
async function applyCommon() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }
    //sessionStorage.setItem('token', '1');
    let treks = 0;
    this.token = !!sessionStorage.getItem('token');
    this.loggedIn = !!sessionStorage.getItem('username');
    this.username = sessionStorage.getItem('username');
    this.treksCount = !!treks;
}

async function homeViewHandler() {

    await applyCommon.call(this);
    this.partials.homePage = await this.load('./templates/home/homePage.hbs');
    this.partials.treksList = await this.load('./templates/treks/treks-list.hbs');
    this.partials.noTreks = await this.load('./templates/treks/no-treks.hbs');
    this.partial('./templates/home/home.hbs');
}

async function logInViewHandler() {
    await applyCommon.call(this);
    await this.partial('./templates/login/login.hbs');

    let formRef = await document.querySelector('#login-form');
    
    formRef.addEventListener('submit', (e) => {
        let form = createFormEntity(formRef, ['email', 'password']);
        e.preventDefault();
        let formValues = form.getValue();
        firebase.auth().signInWithEmailAndPassword(formValues.email, formValues.password)
            .then(response => {
                console.log(response);
                firebase.auth().currentUser.getIdToken()
                    .then(token => {
                        sessionStorage.setItem('token', token);
                        sessionStorage.setItem('username', response.user.email);
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

async function logOutViewHandler() {
    sessionStorage.clear();
    firebase.auth().signOut().then(() => {
        this.redirect(['#/home']);

    }).catch(function (error) {
        console.error('Error while trying to sign out!');

    });
}

async function registerViewHandler() {
    await applyCommon.call(this);
    await this.partial('./templates/register/register.hbs');

    let formRef = await document.getElementById('register-form');
    
    formRef.addEventListener('submit', () => {
        let formConfig = ['email', 'password', 'rePassword'];
        let form = createFormEntity(formRef, formConfig);

        let formData = form.getValue();
        if (formData.password.length < 6 || formData.email.length < 3) {
            errorMessagePop();
        }
        if (formData.password !== formData.rePassword) {
            errorMessagePop();
        }
        // FIREBASE REQUEST
        firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
            .then((response) => {
                console.log(response);

                firebase.auth().currentUser.getIdToken()
                    .then(token => {
                        sessionStorage.setItem('token', token);
                        sessionStorage.setItem('username', response.user.email);
                        console.log(token);
                    });


                this.redirect(['#/home']);
            }).catch(function (error) {
                console.error('Error while trying to sign in!');
        
            });
    })
}

async function errorMessagePop() {

}

async function createViewHandler() {
    await applyCommon.call(this);
    this.partial('./templates/treks/create.hbs');

    //redirect
    //this.redirect(['#/home'])
}

async function detailsViewHandler() {
    await applyCommon.call(this);
    this.partial('./templates/treks/details.hbs');

}

async function editViewHandler() {
    await applyCommon.call(this);
    this.partial('./templates/treks/edit.hbs');

}

async function profileViewHandler() {
    await applyCommon.call(this);
    this.partial('./templates/profile/profile.hbs');

}

var app = Sammy('#main', function () {
    // include a plugin
    this.use('Handlebars', 'hbs'); // plugin, file-extension

    // define a 'route'
    this.get('/', homeViewHandler);
    this.get('#/', homeViewHandler);
    this.get('#/home', homeViewHandler);
    this.get('#/login', logInViewHandler);
    this.post('#/login', () => false);
    this.get('#/logout', logOutViewHandler);
    this.get('#/register', registerViewHandler);
    this.post('#/register', () => false);
    this.get('#/create', createViewHandler);
    this.post('#/create', () => false);
    this.get('#/details', detailsViewHandler);
    this.post('#/details', () => false);
    this.get('#/edit', editViewHandler);
    this.post('#/edit', () => false);
    this.get('#/profile', profileViewHandler);
});

(() => {
    app.run('#/');
})();
