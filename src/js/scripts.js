'strict'


function spacify(string) {
    let result = '';
    for(var i = 0; i < string.length; i++) {
        string[i] + ' ';
    }
    return result + string;
}

var solution = spacify('monica');
console.log(solution);

function hello(name) {
    console.log('hello my name is ' + name);
}

var answer = hello('monica');
console.log(answer)




function myFunction(str){

    const obj = {};
    var myString = str.split('').forEach(char => obj[char] + 1 || 1);
    return myString
}

var resultado = myFunction('moniiiiica');
console.log(resultado);