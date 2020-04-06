import { createFormEntity } from './form-helper.js';
import { fireBaseRequestFactory } from './firebase-request.js';
import { apiKey } from './apiKey.js';

// load header and footer
async function applyCommon() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }

   // this.articles = false;

}

async function homeViewHandler() {
     await applyCommon.call(this)
     this.partials.noArticles = await this.load('./templates/home/no-articles.hbs')
    await this.partial('./templates/home/home.hbs')

    console.log('home view');

}

var app = Sammy('#main', function () {
    // include a plugin
    this.use('Handlebars', 'hbs'); // plugin, file-extension

    // define a 'route'
    this.get('#/', homeViewHandler);
    this.get('#/home', homeViewHandler);
});

(() => {
    app.run('#/');
})();
