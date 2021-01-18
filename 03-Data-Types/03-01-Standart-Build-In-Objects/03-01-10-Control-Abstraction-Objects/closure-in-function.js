var array = ['The', 'brown', 'fox', 'is', 'doing', 'something', 'unusual.']; // An array with some strings
function callbackClosure(i, callback) {
  return function() {
    return callback(i);
  }
}

for( var i = 0; i < array.length; ++i )
{
  API.doSthWithCallbacks( callbackClosure( i, function(i) {
    array[i] = '*'.repeat(array[i].length);
  }) );
}

let result = array.join(' ');

console.log(result);