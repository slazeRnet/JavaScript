function create(words) {
   let pageContent = document.getElementById('content');

   for(const element of words) {
   let div = document.createElement('div');
   let p = document.createElement('p');

   p.textContent = element;
   p.style.display = 'none';

   div.appendChild(p);
   pageContent.appendChild(div);
   div.addEventListener('click', ()=>{
      p.style.display = 'inline-block';
   })
   div.addEventListener('dblclick', ()=>{
      p.style.display = 'none';
   })
  }

  
}
