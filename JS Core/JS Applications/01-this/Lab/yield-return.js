
function* makeRangeIterator() {
    let start = 0, end = 100, step = 1
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i * 3.14;
    }
    return iterationCount;
}

let fib = makeRangeIterator();

for (const iterator of fib) {
    console.log(iterator);
    
}
console.log();
