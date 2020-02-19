  <button >Click Me</button>
    <script>
        let button = document.getElementsByTagName('button')[0];
        button.addEventListener('click', clickMeHandler)
    
    function clickMeHandler(el){
        console.log(el.target.textContent); // Click Me
        
    }
    </script>
