function solve(){
   let clickedTdElement;
   let table = document.querySelector('table[class="minimalistBlack"]')

   table.addEventListener('click', function(e){

       changeBackgroundColor(e);

   });
   console.log(table);

   function changeBackgroundColor(e){

      let shouldNotBeTbody = e.target.parentElement.parentElement.tagName.toUpperCase() != 'thead'.toUpperCase();
      console.log(e.target.parentElement.style.backgroundColor);

      if(shouldNotBeTbody){
         
         if(e.target.parentElement === clickedTdElement){
            
            if(clickedTdElement.style.backgroundColor == ''){

               e.target.parentElement.style.backgroundColor  = '#413f5e';

            }
            else{

               e.target.parentElement.style.backgroundColor  = '';
            }
         }
         else {
            
            if(clickedTdElement){
               clickedTdElement.style.backgroundColor = '';

            }
            e.target.parentElement.style.backgroundColor  = '#413f5e';
            
            clickedTdElement =  e.target.parentElement;
         }
      }
      console.log(e.target.parentElement.style.backgroundColor);

   }
   
}
