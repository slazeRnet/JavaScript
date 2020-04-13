export default function(context){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              context.isLoggedIn = true;
              context.userId = user.uid;
              context.username = user.email;
              sessionStorage.setItem('userId', user.uid);
              sessionStorage.setItem('username',  context.username);
              // ...
            } else {
              // User is signed out.
              context.isLoggedIn = false;
              context.userId = null;
              sessionStorage.clear();
              context.username = null;
            }
          });

         return  context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        })
}