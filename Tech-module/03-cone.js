function coneDimenssions(num1, num2){
    let radius = Number(num1);
    let heigth = Number(num2);

    let vollume = Math.PI * Math.pow(radius, 2) * heigth / 3;
    let area = Math.PI * radius * (radius + Math.sqrt(Math.pow(heigth, 2) + 
    Math.pow(radius,2)));
    let vollumeFixed = vollume.toFixed(4);
    let areaFixed = area.toFixed(4);
    console.log(`volume = ${vollumeFixed}`);
    console.log(`area = ${areaFixed}`);
}

coneDimenssions(3.3, 7.8);
