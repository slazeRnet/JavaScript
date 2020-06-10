## 1. DataTypes Objects and arrays

## get object field using dot notation
</br>
> :warning: field value cannot be accessed with dot notation follwed by string variable
use bracket notation instead:

```js
let days = {Monday: 1}
let day = 'Monday'
console.log('output:', days.day, days[day]); // output: undefined 1
```

## 2. Server
### Getting "exit status 1: 'C:\Program' is not recognized as an internal or external command" when switching versions 

I have installed v1.1.0 in "C:\Program Files\nvm". All good but when I'm trying to switch to a version I have installed I get:

C:\WINDOWS\system32>nvm use 5.10.1
exit status 1: 'C:\Program' is not recognized as an internal or external command,
operable program or batch file.

SOLUTION:
---

__The problem is with the spaces in URL(C:\Program Files). Try to install the nvm directly in C:/ or in other folder without spaces in the PATH.__

---

### Cannot GET /user/1
When trying to use the Router method for routing:

```js
router.get('/user/:id', function (req, res) {
    res.send('hello, user!')
  })
```
to fix this add app.use(router) 

```js
  app.use(router)
```
---

### Using the fs library on node.js and appending html elements with it:

you can't call server-side (Node) methods in browser-interpreted client-side (front end) code. You have to call them from a server.

```js
const fs = require('fs')
// read the data synchronosly and store it in the var. If the file is corrupt throw err
var data = fs.readFile('./utils/data.json', 'utf8', (err, jsonString) => {
    if (err) {
          console.error("Error reading DataBase from disk:", err)
          return
      }
      try {
        console.log(jsonString);
        
            fitnessLogs = JSON.parse(jsonString)
        }
        catch(err) {
            console.error('Error parsing JSON string:', err)
        }
        })
        // Appends a HTML element with the json data
       print(fitnessLogs) //Error
        console.log(fitnessLogs);
```

### json-server default port

you can run the json-server at specific port
```
json-server --watch db.json --port 5000
```

### package.json changes that interfere with the  express library

> :x: Reference error: required is not defined
or
> :x: Type error: express is not a function

the following line in package.json will cause problem to your required express moduled
```
  "type": "module"
```
this occurs when express is requred like this

```
const express = require('express')

```

### importing module in nodeJS 
</br>
:information_source: NodeJS cannot use import. Download the requireJS and use it require modules
Doing so will cause this error:
</br>
> :x: SyntaxError: Cannot use import statement outside a module
</br>

SOLUTION FROM:
[here](https://stackoverflow.com/questions/56998440/how-to-run-ecmascript-mjs-files-with-nodemon)
</br>
all modules including the startup file must end with the .mjs extension

modify the package.json file with this falg --experimental-modules 
```json
"scripts": {
        "dev": "nodemon --experimental-modules index.mjs"
    },
```
