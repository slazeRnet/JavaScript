import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from './../utils/doc-modifier.js';

export default {
    get: {
        dashboard(context) {
            models.cause.getAll().then((response) => {
                return response.json();
            }).then(causes => {
                console.log(causes);
                context.causes = causes;
                Object.keys(causes).forEach( key =>{
                    context.causes[key].id = key;
                })
                extend(context).then(function () {
                    this.partial('../views/cause/dashboard.hbs')
                })
            }).catch(err => {
                console.error(err);
            })
        },
        create(context) {
            extend(context) // load header footer
                .then(function () {
                    this.partial('../views/cause/create.hbs')
                })
        },
        details(context) {

            const { causeId } = context.params;

            models.cause.get(causeId).then(response => {
                return response.json();
            }).then(cause => {
                  Object.keys(cause).forEach(key =>{
                      context[key] = cause[key];
                  })
                    context.canDonate = cause.uId !== localStorage.getItem('userId');
                    console.log(cause);
                    console.log(context);
                    
                    extend(context)
                        .then(function () {
                            this.partial('../views/cause/details.hbs')
                        })

            }).catch(err => { console.error(err) });

        }
    },
    post: {
        create(context) {

            const data = {
                ...context.params,
                uid: localStorage.getItem('userId'),
                collectedFunds: 0,
                donors: []
            };

            models.cause.create(data)
                .then(() => {
                    this.redirect('#/cause/dashboard')
                }).catch(err => {
                    console.error(err);

                });
        }
    },
    del: {
        close(context) {
            const { causeId } = context.params;
            models.cause.delete(causeId).then(() => {
                context.redirect('#/cause/dashboard');
            })
        }
    },
    put: {
        donate(context) {
            const { causeId, donatedAmmount } = context.params;
            models.cause.get(causeId).then(response => {
                const cause = response.json();
                console.log(cause);
                
                cause.donors.push(sessionStorage.getItem('username'));
                cause.collectedFunds += Number(donatedAmmount);

                return models.cause.donate(causeId, cause);
            }).then(() => {
                context.redirect('#/cause/dashboard/');
            })
        }
    }

}