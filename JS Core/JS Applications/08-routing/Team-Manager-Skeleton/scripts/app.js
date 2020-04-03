// initialize the application
var app = Sammy('#main', function() {
    // include a plugin
    this.use('Handlebars', 'hbs'); // plugin, file-extension
  
    // define a 'route'
    this.get('#/', function() { // MAIN PAGE
      
        this.partial('./templates/home/home.hbs')
    });
  });

(() => {
  // start the application
  app.run('#/');
})();