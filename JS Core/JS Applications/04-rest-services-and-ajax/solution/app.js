function getInfo() {
    let stopNameRef = document.querySelector('#stopName');
    let stopInputValue = document.querySelector('#stopId');
    let busesRef = document.querySelector('#buses');

    fetch('http://localhost:3000/busInfo',{
       method: 'post',
       body: JSON.stringify()
    })

    // fetch('http://localhost:3000/busInfo')
    //     .then(x => x.json())
    //     .then(x => {
    //         let valueToBeAppended = x[stopInputValue.value];

    //         if (!x) {

    //             stopNameRef.innerHTML = 'Error';
    //             return;
    //         }

    //         stopNameRef.innerHTML = value.valueToBeAppended.name;

    //         Object.entries(valueToBeAppended.buses)
    //             .forEach(([busId, time]) => {
    //                 let li = document.createElement('li');
    //                 li.innerHTML = `Bus ${busId} arrives in ${time}`;
    //                 busesRef.appendChild(li);
    //             });

    //     });


    console.log(temp);

}
