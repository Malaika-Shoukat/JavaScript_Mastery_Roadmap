// variables----> Variables in JavaScript are used to store data values in the form of datatypes.
// Two types of datatypes:
// 1.primitive datatypes:store single value
// String,Number,Boolean,undefined,null,symbol,Bigint

// 2.Non-primitive datatypes/referance datatypes:store multiple values
// Arrays,Objects,functions,sets,maps ...

// primitive datatypes:
// string:set of charaters enclosed in single or double quotes
let name = "Ali";
console.log(name);
// number
let num = 10;
console.log(num);
// boolean
let istrue = true;
console.log(istrue);
// undefined
let undef = undefined;
console.log(undef);
//  null : it is used to represent the intentional absence of any object value
let num1 = null;
console.log(num1);
// symbol:it is used to create unique identifiers for objects
let sym1 = Symbol("id");
console.log(sym1);
// BigInt:it is used to represent big integers
let bigInt1 = BigInt("90071999435785432109");
console.log(bigInt1);

// variable declaration in js
// var: used to declare multiple variables with the same name and asign differnt values.
var x = 10;
var x = 20;
x = 30;
console.log(x);
// let: we can not declare multiple variables with the same name using let keyword.
let num2 = 390;
num2 = 400;
console.log(num2);
// const: not declare multiple variable with the same name also we can not change the value.
const pi = 3.14;
console.log(pi);

// String Indexing:
let str = "Hello World";
console.log(str[0]);
console.log(str.length);
console.log(typeof str);
console.log(typeof num);
