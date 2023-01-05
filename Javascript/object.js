// object
// key와 value의 집합체

//literals and properties 
const obj1 = {};
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age:4};
print(ellie);

//computed properties
//property 는 string타입으로 받아와야한다
//동적으로 value를 받아올때 쓰임
console.log(ellie.name);
console.log(ellie['name']);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

//property valuse shorthand
const person1 = {name: 'bob', age:2};
const person2 = {name: 'steve', age:3};
const person3 = {name: 'dave', age:4};
const person4 = new Person('ellie', 30);
console.log(person4);
function Person(name, age){
    this.name = name;
    this.age = age;
}

//in operator
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);