### 1. package.lock file edited so that it contain new and accurate description
### 2. Removal of package-lock.json and installation of yarn 
> nom install -g yarn
- project is initialized with
> yarn

### 3. production vs development
process.env.NODE_ENV stores the current mode the application is running by. It can be either development or production

### 4. Initialisation of Git repo

### 5. uuid Library installled
used for unique Id

### 6. create a .gitignore
add ./node_modules, configs and etc.
then test the gitignore file

### 7. create a new branch for the routes and work on them from there

### 8. set static folder for images, styles and etc.

```js
app.use('/static', express.static('static'))
```