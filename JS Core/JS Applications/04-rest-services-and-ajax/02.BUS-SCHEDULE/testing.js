function solve(){
    function print(){
        return 'hello';
    }

    function sample(){
        return 'hello';
    }
    return {
        print,
        sample
    }
}

let result = solve();

console.log(result.print());
