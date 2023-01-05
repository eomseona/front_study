//1. function
function printHello(){
    console.log('Hello');
}
printHello();

//2. parameters
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

//3. default parameters
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4. rest parameters
function printAll(...arg){
    for(let i=0; i<arg.length; i++){
        console.log(arg[i]);
    }
}
printAll('dream', 'coding', 'ellie');

//5. local scope
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();


//function expression
const print = function() { //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();

//callback
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('yes');
};

const printNo = function print() {
    console.log('no');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//arrow function
const simplePrint = () => console.log('simplePrint');
const add = (a,b) => a+b;

//IIFE : 선언과 동시에 호출
(function hello() {
    console.log('IIFE');
})();