'use strict';

const theOldWay = function(course) {
  return `I am currently enrolled in ${course}`;
};
console.log('The old way:', theOldWay('Code 301'));

const theNewWay = (course) => {
  return `I am currently enrolled in ${course}`;
};
console.log('The new way:', theNewWay('Code 301'));

const withoutParens = course => {
  return `I am currently enrolled in ${course}`;
};
console.log('Without parens:', withoutParens('Code 301'));

const oneLiner = course => `I cam currently enrolled in ${course}`;
console.log('As a one-liner:', oneLiner('Code 301'));

const add = function(num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
};
console.log('Let\'s do some math:', add(4, 5));

 the parentheses when there is a single parameter
const addOneLiner = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;
console.log('Add as a one-liner:', addOneLiner(4, 5));


const multiLiner = word => {
  word = word.toUpperCase();
  return word;
};
console.log('Multi-line arrow function:', multiLiner('hello'));


const oldObject = function(array) {
  return {
    firstValue: array[0],
    secondValue: array[1],
    thirdValue: array[2]
  };
};
console.log('Hello from the old object function', oldObject(['hi', 'hello', 'are you there?']));

const newObject = array => ({
  firstValue: array[0],
  secondValue: array[1],
  thirdValue: array[2]
});
console.log('Hello from the new object function', newObject(['hi', 'hello', 'are you there?']));

let sum = function(a, b, c, d) {
  return a + b + c + d;
};
console.log(sum(1, 2, 3, 4));


let objectLit = function() {
  return {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
  };
};

let sumAndProduct = function(a, b) {
  let sum = a + b;
  let product = a * b;
  return [sum, product];
};
console.log(sumAndProduct(3, 9));


let message = function(name) {
  return `Hello, ${name}!`;
};
console.log(message('Allie'));


let Student = function(name, age, hometown) {
  this.name = name;
  this.age = age;
  this.hometown = hometown;
};

let joe = new Student('Joe', 'Schmoe', 100);

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this code to break!
// console.log(joe);

// TODO: After viewing the previous console.log(), return the code to a working state.



Student.prototype.greeting = function() {
  return `Hi, my name is ${this.name}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this method to break!
// console.log(joe.greeting());

// TODO: After viewing the previous console.log(), return the code to a working state.



Student.courseName = function() {
  return 'This student is enrolled in Code 301.';
};

console.log(Student.courseName());


Student.prototype.scope = function() {
  console.log(this);
};

// TODO: Uncomment the following line of code to see the output in the browser console
// console.log(joe.scope());

Student.prototype.scopeArrow = () => console.log(this);

console.log(joe.scopeArrow());

// TODO: Write a COMMENT below to answer the following questions.
// 1. What is "this" when joe.scope() is invoked?
//this will refer to the object it self and will copy all of it's information
// 2. What is "this" when joe.scopeArrow() is invoked?
/* The value of this inside an arrow function remains the same throughout the lifecycle of the function */
//3. Explain why "this" is different when an arrow function is used.
//Unlike regular functions, arrow functions do not have their own this. The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function
