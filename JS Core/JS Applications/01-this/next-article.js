function getArticleGenerator(articles) {

    let div = document.getElementsByTagName('div')[0];
    let currentIndex = 0;
    
    return function returnNext(){
        if(currentIndex < articles.length){

            let article = document.createElement('article');

            article.innerHTML = articles[currentIndex];
            
            div.prepend(article);
            currentIndex++;
            
            console.log(div);
            
            console.log(article);

        }
        
    }

}
