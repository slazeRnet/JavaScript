     // Your web app's Firebase configuration
     var firebaseConfig = {
        apiKey: "AIzaSyBgkKTwUGodDAtJIz8rp-XNDz8mGZDU4NI",
        authDomain: "softuni008.firebaseapp.com",
        databaseURL: "https://softuni008.firebaseio.com",
        projectId: "softuni008",
        storageBucket: "softuni008.appspot.com",
        messagingSenderId: "838798911937",
        appId: "1:838798911937:web:5fc4eee2e9ce136b232740",
        measurementId: "G-MNWK1PZGFD"
    };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
   //submit the registration data
   let button = document.getElementById('button');

   button.addEventListener('click', function(){
    console.log('click');

       let email = document.getElementById('email').value;
       let password = document.getElementById('password').value;
       let error = document.getElementById('error');
       error.innerText = '';

       if((!email) || (!password)){
           error.innerText = 'Valid username and password are required!';
       }

       firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
                let errorCode = error.code;
               let errorMessage = error.message;

               error.innerText += `Error code ${errorCode}, message: ${errorMessage}`;
           });

   });