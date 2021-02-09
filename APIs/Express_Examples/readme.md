#### This is a nodejs console app that instantiates an example application from a list of applications called 'dependencies'

To launch type in the terminal:
> node index.js

This will prompt a list of available apps as a module that you can chose from.
For instance now type
>0
and press Enter;

This will load the Intro App.

## Express Apps:

### 1. Intro 

### 2. Express-Generator
[source](http://expressjs.com/en/starter/generator.html)

>npx express-generator

this creates all the folders and sets up a configured express apps with the selected folders:
bin, public, routes, views.

app starting point
>app.js

:x: failed to create express app using express-generator
> express --view=ejs myapp 

```js
express : The term 'express' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the
 spelling of the name, or if a path was included, verify that the path is correct and try again.
At line:1 char:1
+ express --view=ejs myapp
+ ~~~~~~~
```

### 3. Serve Static files

Use 2 directories for finding statics files relative to the URI:
```js
app.use(express.static('public'))
app.use(express.static('files'))
```

To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.static function, specify a mount path for the static directory, as shown below:

```js
app.use('/static', express.static('public'))
```

## I. Errors

### I.1. :x: Error: Cannot find module 'express'

//index.js
```js
let dependencies = require('./dependencies')
```

//dependencies.js
```js
let module = require('./dependencies/intro/)

```

//dependencies/intro/app.js
```js
let express = require('express')

// ... some code
```

#### Hypothesis 1: express module is not recognisable because is nested some dirs away from the folder that contains /node_modules

//dependencies/intro/scratch.js
```js
let express = require('express') //Error
let app = express()

console.log(express)
```
Output:
> Error: Cannot find module 'express'

Hypothesis apears to be false.

#### Hypothesis 2: Conflict appears because the project name is called Express same as the named library.
- rename the project folder
>npm uninstall express
>npm express --v
Output:
> 6.14.5

>yarn remove express
>yarn add express

#### Hypothesis 3: a conflict occured in the module installation because i confused yarn with npm on different occausons and that might be the cause of the error