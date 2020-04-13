import extend from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        dashboard(context) {
            models.cause.getAll().then((response) => {
                return response.json();
            }).then(causes => {
                context.causes = causes;
                if(causes){
                    Object.keys(causes).forEach( key =>{
                        context.causes[key].causeId = key;
                        
                    })
                }
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
                cause.canDonate = String(cause.uid) !== String(localStorage.getItem('userId'));
                cause.causeId = causeId;
                
                  Object.keys(cause).forEach(key =>{
                      context[key] = cause[key];
                  })
                    
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
                donors: ['']
            };
            console.log(data);
            
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
            const { causeId, currentDonation } = context.params;
            models.cause.get(causeId).then(response => {
                return response.json();
            }).then((cause) =>{
                
                cause.donors.push(sessionStorage.getItem('username'));
                cause.collectedFunds += Number(currentDonation);
                console.log(cause);
                return models.cause.donate(causeId, cause);

            }).then(() => {
               extend(context).then(() => {
                   context.redirect('#/cause/dashboard');

               })
            })
        }
    }

}