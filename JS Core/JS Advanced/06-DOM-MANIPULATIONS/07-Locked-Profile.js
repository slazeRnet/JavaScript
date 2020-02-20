function lockedProfile() {
   let profiles = document.querySelectorAll('div[class="profile"]');

   for (const element of profiles) {
       let currentButton = element.childNodes[20];
       currentButton.addEventListener('click', function(e){
           console.log(currentButton.innerText);
           if(element.querySelectorAll('input[type="radio"]')[1].checked &&  currentButton.innerText == 'Show more'){
               element.getElementsByTagName('div')[0].style.display = "block";
               currentButton.innerText = 'Hide it';
           }
           else if(element.querySelectorAll('input[type="radio"]')[1].checked &&  currentButton.innerText == 'Hide it'){
               element.getElementsByTagName('div')[0].style.display = "none";
               currentButton.innerText = 'Show more';
           }
           console.log(currentButton.innerText);
       });

   }

   

}
