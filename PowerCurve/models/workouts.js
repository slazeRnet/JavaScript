const address = require('../utils/json-server-config.js')
const fetch = require('node-fetch');

module.exports = {
     getDataBase(){
         // returns json
        return fetch(address)
    },
    /**
     @param db {object} is the fitnessLogs db
     @param timespan {array} first value is the start date, the secound end date
     */
    async getMonthsFromDb(db, timespan){
        let months = {}
            //iterate through the object and get the year and month in pairs
            for (var year in db) {
                if (await Object.prototype.hasOwnProperty.call(db, year)) {
                    
                    for (var month in db[year]) {
                        if (await Object.prototype.hasOwnProperty.call(db[year], month)) {
                            
                            // add the months to the array in [year, month] format
                            if(!months[year]){
                                months[year] = []
                            }
                            if(!months[year].includes(month)){
                                await months[year].push(month)
                            }
                        }
                    }
                }
            }
            console.log(months)
            return months
    }
}