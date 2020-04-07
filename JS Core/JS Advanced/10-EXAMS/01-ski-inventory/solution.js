function solve() {
  let  button = document.querySelector('form[id="add-new"]').children[4];
  let  avaliableProducs = document.getElementsByTagName('ul')[0];
  let filterButton = document.querySelector('body div.filter button');
  let buyButton = document.querySelector('section[id="myProducts"]').children[2];
  let totalPriceElement = document.getElementsByTagName('h1')[1];

  buyButton.addEventListener('click', function(e){
   e.preventDefault();
   buyMyProducts(e);
  });
  filterButton.addEventListener('click', filterHandler);
  button.addEventListener('click', function(e) {
     e.preventDefault();
     buttonHandler();
   });
   function buttonHandler(){
      let  name = document.querySelector('form[id="add-new"]').children[1].value;
   let  quantity = Number(document.querySelector('form[id="add-new"]').children[2].value);
   let  price = Number(document.querySelector('form[id="add-new"]').children[3].value);
   let li = document.createElement('li');
   let span = document.createElement('span');
   span.innerText = name;
   let strong = document.createElement('strong');
   strong.innerText = `Available: ${quantity}`;
   let div = document.createElement('div');
   let strongInner = document.createElement('strong');
   strongInner.innerText = price.toFixed(2);
   let buttonAddToClientsList = document.createElement('button');
   buttonAddToClientsList.innerText = `Add to Client's List`;
   buttonAddToClientsList.addEventListener('click', function(e) {addToClientsList(e)});
   li.appendChild(span);
   li.appendChild(strong);
   div.appendChild(strongInner);
   div.appendChild(buttonAddToClientsList);
   li.appendChild(div);
   avaliableProducs.appendChild(li);
  };

  function filterHandler(){
   let filterInput = filterButton.parentElement.children[1].value;
   for (const product of avaliableProducs.children) {      
      if(product.children[0].innerHTML.toLocaleLowerCase().includes(filterInput.toLocaleLowerCase())){
         product.hidden = false;
      }
      else{
         product.hidden = true;

      }
   }
  };
  function addToClientsList(e){
     let name = e.target.parentElement.parentElement.children[0].innerText;

     let quantity =  /.*?(\d{1,})/g.exec(e.target.parentElement.parentElement.children[1].innerText)[1];
     quantity--;
     e.target.parentElement.parentElement.children[1].innerText = 'Available: ' + quantity

     let price = Number(e.target.parentElement.children[0].innerText); //<====

     let lastTotalPrice = getTotalPrice();
     
     let newTotalPrice =  lastTotalPrice + price;
     setTotalPrice(newTotalPrice);
     let product = parseProduct(name, price.toFixed(2));
     addProductToMyProducts(product);
     if(quantity <= 0){
     e.target.parentElement.parentElement.remove();
     }
   };

   function setTotalPrice(newPrice){
      let totalPriceH1 = document.querySelector('body').children[3];
      let text = 'Total Price: ';
      totalPriceH1.innerHTML = text + newPrice.toFixed(2);
   };

   function getTotalPrice(){
      let totalPriceH1 = document.querySelector('body').children[3];
      return   Number(/.*?(\d{1,}\.\d{2})/gi.exec(document.querySelector('body').children[3].innerHTML)[1]);
   };

   function addProductToMyProducts(product){
      let products = document.querySelector('section[id="myProducts"] ul');
      products.appendChild(product);
      
   };

   function parseProduct(name, price){
      let li = document.createElement('li');
      li.innerHTML = name;
      let strong = document.createElement('strong');
      strong.innerHTML = price;
      li.appendChild(strong);
      return li;
   }

   function buyMyProducts(e){
      let ul = e.target.parentElement;
      console.log(ul.children[1].children);
      ul.children[1].innerHTML = '';
      setTotalPrice(0);
   }
}