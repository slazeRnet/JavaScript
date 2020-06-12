let data = {
    "byYear": {
        "2020": 
        {
            "January" : [],
            "June" : [
                {"day": "2", "workout-type": "Upper Body", "tempo": "regular", "exercises":
                [
                    {"exercise-name": "Barbell over head press", "sets":
                        [
                            [3, 40], [3, 30], [5, 20], [5, 40]
                        ]
                    }
                ]
                },
                {"day": "6", "workout-type": "Upper Body", "tempo": "regular", "exercises":
                    [
                        {"exercise-name": "Barbell over head press", "sets":
                            [
                                [4, 40], [3, 40], [5, 20]
                            ]
                        }
                    ]
                    }
            ]
    }}

}

// let days = {Monday: 1}
// let day = 'Monday'
// console.log(days.day, days[day]);

let months = [];

for (var year in data.byYear) {
    if (Object.prototype.hasOwnProperty.call(data.byYear, year)) {
        console.log(data.byYear[year]);
        
        for (var month in data.byYear[year]) {
            if (Object.prototype.hasOwnProperty.call(data.byYear[year], month)) {
                console.log(data.byYear[year][month]);
                
                months.push([year, month])
            }
        }
    }
}

console.log(months);
