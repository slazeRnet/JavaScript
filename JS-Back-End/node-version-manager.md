### 1. Use Node Version Mangaer (nvm)
- usefull for Managing multiple installations of node.js on a Windows computer.

### 2. Run The node enviorment in the terminal
type in the cmd
```
nvm
node
console.log('hello')
```
Will print hello and undefined (the result of the function)

```json
{
  "name": "sample-npm",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "test",
    "start": "node app.js"
  },
  "author": "Preslav Marinov",
  "license": "ISC"
}

```

- scripts is the most important section in the package. It defines the package commands.

```
npm run start //this will run the app.js file
```

