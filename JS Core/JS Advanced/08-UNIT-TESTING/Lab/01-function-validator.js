function functionValidator(obj){
if(obj.hasOwnProperty('method')){
    let condition = obj.method === 'GET' || obj.method === 'POST' || obj.method === 'DELETE' || obj.method === 'CONNECT';
    if(!condition){
        throw new Error('Invalid request header: Invalid Method');
    }
    
}
else{
    throw new Error('Invalid request header: Invalid Method');
}
if(obj.hasOwnProperty('uri')){
    let condition  = RegExp(/(\*|^[\w\.\d]+$)/);
    let value = obj.uri;
    if(!condition.test(value)){
        throw new Error('Invalid request header: Invalid URI');
    }
    
}
else{
    throw new Error('Invalid request header: Invalid URI');
}
if(obj.hasOwnProperty('version')){
    let condition  = obj.version === 'HTTP/0.9' || obj.version === 'HTTP/1.0' ||
     obj.version === 'HTTP/1.1' || obj.version === 'HTTP/2.0';

    let value = obj.version;
    if(!condition){
        throw new Error('Invalid request header: Invalid Version');
    }
    
}
else{
    throw new Error('Invalid request header: Invalid Version');
}
if(obj.hasOwnProperty('message')){
    let condition  = RegExp(/(^([\s\n]|[^\\<>&'"])*$)/);
    let value = obj.message;
    if(!condition.test(value)){
        throw new Error('Invalid request header: Invalid Message');
    }
    
}
else{
    throw new Error('Invalid request header: Invalid Message');
}
return obj;

}
//Invalid request header: Invalid {Method/URI/Version/Message}
// ⦁	method - can be GET, POST, DELETE or CONNECT
// ⦁	uri - must be a valid resource address or an asterisk (*); a resource address is a combination of alphanumeric characters and periods; all letters are Latin; the URI cannot be an empty string
// ⦁	version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
// ⦁	message - may contain any number or non-special characters;special characters are <, >, \, &, ', "

let obj1 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  };
  let obj2 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  };

  let obj3 = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  };

  let obj4 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^*()-=_+[]{};:|,./? '
};
  try{
      console.log(functionValidator(obj1) );
  }
  catch(ex){
console.log(ex.message);

  }

  try{
    console.log(functionValidator(obj2) );
}
catch(ex){
console.log(ex.message);

}

try{
    console.log(functionValidator(obj4) );
}
catch(ex){
console.log(ex.message);

}

