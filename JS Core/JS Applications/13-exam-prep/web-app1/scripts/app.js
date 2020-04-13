import controllers from '../controllers/index.js'

let app = Sammy('#root', function(){
    this.use('Handlebars', 'hbs');

        //HOME
        this.get('#/home', controllers.home.get.home)
        //USER
        this.get('#/user/login', controllers.user.get.login)
        this.get('#/user/register', controllers.user.get.register)
        this.post('#/user/login', controllers.user.post.login)
        this.post('#/user/register', controllers.user.post.register)
        this.get('#/user/logout', controllers.user.get.logOut)
        //CAUSE
        this.get('#/cause/dashboard', controllers.cause.get.dashboard)
        this.get('#/cause/create', controllers.cause.get.create)
        this.post('#/cause/create', controllers.cause.post.create)
        this.get('#/cause/details/:causeId', controllers.cause.get.details) // details.hbs {{id}} goes to causeId
        // DONATE AND DELETE
        this.get('#/cause/close/:causeId', controllers.cause.del.close) // details.hbs {{id}} goes to causeId
        this.post('#/cause/donate/:causeId', controllers.cause.put.donate) // details.hbs {{id}} goes to causeId
    }).run('#/home');
