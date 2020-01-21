function jsonTable(input){
    let objectsArray = [];
    let regex = /^{"name":"(?<name>\w+)","position":"(?<position>\w+)","salary":(?<salary>\d+)}/;
for (const iterator of input) {
    var match = regex.exec(iterator);
    let name = match[1];
    let pos = match[2];
    let salary = Number(match[3]);

    objectsArray.push({
        name: name,
        position: pos,
        salary: salary
    })
}
if(objectsArray.length >= 1){
    console.log('<table>');
    for (const iterator of objectsArray) {
        console.log('\t<tr>');
        console.log(`\t\t<td>${iterator.name}</td>`);
        console.log(`\t\t<td>${iterator.position}</td>`);
        console.log(`\t\t<td>${iterator.salary}</td>`);
        console.log('\t</tr>');
    
    }
    console.log('</table>');
}

}

jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']);
