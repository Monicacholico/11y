'strict'


function spacifying(string) {

    const stringSpaced = Array.from(string).map(c => c + ' ');
    return stringSpaced.join(' ');
}

const result = spacifying('monicadelcarmen');
console.log(result);


function spacify(string) {
    let result = '';
    for(var i = 0; i < string.length; i++) {
        string[i] + 'hello ';
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
    console.log(obj);
    console.log(myString);
}

var resultado = myFunction('moniiiiica');
console.log(resultado);


function anotherFunction(string) {
    const charMap = {};
    let maxVal = 1;
    let maxChar = '';
    for(let char of string) {
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    for(let char in charMap) {
        if(charMap[char] > maxVal) {
            maxVal = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

const myResult = anotherFunction('is this trueeeee???');
console.log(myResult);

// const theArray = Array.from({length:25}, () => {
//     Math.floor(Math.random() * 40);
    
// })

// console.log(theArray);

const randomArray =  Array.from({length: 40}, () => Math.floor(Math.random() * 40));

const arryResult = randomArray;
console.log(arryResult);

function arraywithFind(string) {
    const firstRounda = string[0];
    console.log({firstRounda});
    const firstRoundb = string[string.length - 1];
    console.log({firstRoundb});
    const nextPair1 = '';
    const nextPair2 = '';
    // const theChar = Array.from(string).find(char => char.indexOf() > 0);
    // console.log(theChar);
    for(var i = 0; i < string.length; i++) {
        console.log(string.indexOf(string[i]));
        if(firstRounda === firstRoundb){

            console.log('maybe I can work');
        } else {
            console.log('first set of elem are not balanced');
        }
        // return;
    }
}

arraywithFind('monicaaaaaa');


document.addEventListener('keydown', activeSideArrows);
const lis = document.querySelectorAll('.el-main-nav');
console.log(lis);
const allLis = Array.prototype.slice.call(lis);
console.log(allLis);


function activeSideArrows(e) {
    const target = e.target;
    console.log(e.keyCode);
    allLis.forEach( function (li) {
        if(e.keyCode === 39) {
            console.log('im the left arrow')
            li.focus();
        }
    })
}

