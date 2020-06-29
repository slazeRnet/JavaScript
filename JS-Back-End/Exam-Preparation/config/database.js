const mongoose = require('mongoose')
const dbString = require('./config').dbUrl + 'Tripps'// TODO
const rdyString = `${'*'.repeat(10)}Database is ready${'*'.repeat(10)}`

module.exports = () => {
    return mongoose.connect(dbString, {
        useNewUrlParser: true, /** The underlying MongoDB driver has deprecated their current connection string parser. Because this
         is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a
          bug in the new parser. You should set useNewUrlParser: true unless that prevents you from connecting. Note that if
           you specify useNewUrlParser: true, you must specify a port in your connection string, like 
           mongodb://localhost:27017/dbname. The new url parser does not support connection strings that do not have a port,
            like mongodb://localhost/dbname. */
        useUnifiedTopology: true, /** Set to true to opt in to using the MongoDB driver's new connection 
        management engine. You should set this option to true, except for the unlikely case that it prevents 
        you from maintaining a stable connection. */
        useCreateIndex: true /** Set to true to make Mongoose's default index build use createIndex() instead of 
        ensureIndex() to avoid deprecation warnings from the MongoDB driver. */
    },
    console.log(rdyString) //middleware
    )
}