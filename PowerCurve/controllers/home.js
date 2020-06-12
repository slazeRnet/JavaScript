const models = require('../models/index.js')

module.exports = {

    get: {
        //home page controller
       async home(req, res){
            //first fetch the json data (Months)
            let fitnessLogs = await models.workouts.getDataBase()
            let fitnesLogsJson = await fitnessLogs.json() // the entire fitness logs DB into JSON
            let months = await models.workouts.getMonthsFromDb(fitnesLogsJson);
            await res.render('../views/home/home', {months})
        }
       
    }
}