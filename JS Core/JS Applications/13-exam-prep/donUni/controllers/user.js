import models from '../models/index.js';
import extend from '../utils/context.js';

export default {
    get: {
        login(context) {
            extend(context) // loads the partials
                .then(function () {
                    this.partial('../views/user/login.hbs')
                })
        },
        register(context) {
            extend(context) // loads the partials
                .then(function () {
                    this.partial('../views/user/register.hbs')
                })
        },
        logOut(context) {
            models.user.logOut(context).then(() => {
                this.redirect(['#/home'])
            });
        }
    },
    post: {
        login(context) {
            let { username, password } = context.params;
            models.user.login(username, password)
                .then(response => {

                    context.user = response.user.token;
                    context.username = response.user.email;
                    context.isLoggedIn = true;
                    this.redirect(['#/home']);
                }).catch(err => {
                    console.error(err);

                });
        },
        register(context) {
            let { username, password, rePassword } = context.params;
            if (password === rePassword) {
                models.user.register(username, password)
                    .then(response => {
                        console.log(response);
                        this.redirect(['#/user/login'])
                    })
                    .catch(err => {
                        console.error(err);

                    });
            }
        },
    }
}               