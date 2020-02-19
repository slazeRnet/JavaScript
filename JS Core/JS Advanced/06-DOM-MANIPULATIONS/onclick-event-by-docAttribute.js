 <button >Click Me</button>
    <script>
        let button = document.getElementsByTagName('button')[0];
        button.onclick = clickMe;
    
    function clickMe(el){
        console.log(el.target.textContent); // Click Me
        
    }
    </script>
