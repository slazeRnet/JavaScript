---

### Getting "exit status 1: 'C:\Program' is not recognized as an internal or external command" when switching versions 

I have installed v1.1.0 in "C:\Program Files\nvm". All good but when I'm trying to switch to a version I have installed I get:

C:\WINDOWS\system32>nvm use 5.10.1
exit status 1: 'C:\Program' is not recognized as an internal or external command,
operable program or batch file.

ANSWER:

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
