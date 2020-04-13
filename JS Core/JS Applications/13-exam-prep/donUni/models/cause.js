import extend from '../utils/context.js'
import models from './index.js';
import docModifier from '../utils/doc-modifier.js';

export default {

   create(data){ // Sammy.Object {}
       return firebase.firestore().collection('causes').add(data) // {...data} converts data to Object by object destruction 
   },
   getAll(){ // Sammy.Object {}
       return firebase.firestore().collection('causes').get()
   },
   get(id){
       return firebase.firestore().collection('cause').doc(id).get();
   },
   close(id){
       return firebase.firestore().collection('cause').doc(id).delete();
   },
   donate(id, data){
       return firebase.firestore().collection('causes').doc(id).update(data)
   }

}