import { createFormEntity } from './form-helper.js';
import { fireBaseRequestFactory } from './firebase-request.js';

async function applyCommon() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }

    this.username = sessionStorage.getItem('username');
    this.loggedIn = !!sessionStorage.getItem('token');
}
async function homeViewHandler() {
    await applyCommon.call(this);
    await this.partial('./templates/home/home.hbs')
}

// initialize the application
var app = Sammy('#main', function () {
    // include a plugin
    this.use('Handlebars', 'hbs'); // plugin, file-extension

    // define a 'route'
    this.get('#/', homeViewHandler);
    this.get('#/home', homeViewHandler);

});

(() => {
    // start the application
    app.run('#/');
})();