import {createFormEntity} from './form-helper.js';

async function homeViewHandler() {
        this.partials = {
            header: await this.load('./templates/common/header.hbs'),
            footer: await this.load('./templates/common/footer.hbs')
        }
        this.partial('./templates/home/home.hbs')
}

async function aboutViewHandler() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }
    this.partial('./templates/about/about.hbs')
}

async function loginPageViewHandler() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        loginForm: await this.load('./templates/login/loginForm.hbs')
    }
    this.partial('./templates/login/loginPage.hbs');
    
}

async function registerPageViewHandler() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        registerForm: await this.load('./templates/register/registerForm.hbs')
    }
    this.partial('./templates/register/registerPage.hbs');
    
    let formRef = document.getElementById('register-form');

    let form = createFormEntity(form, ['username', 'password', 'repeatPassword']);
    formRef.addEventListener('submit', (e) =>{
        e.preventDefault();
        console.log(form.getValue());
        
    })
}
// initialize the application
var app = Sammy('#main', function() {
    // include a plugin
    this.use('Handlebars', 'hbs'); // plugin, file-extension
  
    // define a 'route'
    this.get('#/', homeViewHandler);
    this.get('#/home', homeViewHandler);
    this.get('#/about', aboutViewHandler);
    this.get('#/login', loginPageViewHandler);
    this.get('#/register', registerPageViewHandler);
    this.post('#/register', () => false);
  });

(() => {
  // start the application
  app.run('#/');
})();