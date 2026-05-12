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
// ______________________________________
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
// ______________________________________
// String Indexing:
let str = "Hello World";
console.log(str[0]);
console.log(str.length);
console.log(typeof str);
console.log(typeof num);
// ______________________________________
//_______ string Methods ---->functions / specific task  / build in (js)_______
//  toUpperCase, tolowerCase, Slice, replace,trim, concat,index[0]
let sentence = "The quick brown fox jumps over a lazy dog";
console.log(sentence);
console.log("length=" + sentence.length);
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.slice(4, 20));
console.log(sentence[4]);
console.log(sentence.trim().length);
console.log(sentence.concat("------->you have to remember this sencence!"));
// ______________________________________
// types of Operator
// 1. Arithmetic operators: +, -, *, /, %
let a = 10;
let b = 20;
let c = 8;
let d = 5;
console.log(b + a);
console.log(c - b);
console.log(a * d);
console.log(c / b);
console.log(a % b);
// ______________________________________
// 2. Assignment operators: =, +=, -=, *=, /=, %=
a += 10;
console.log(a);
b -= 19;
console.log(b);
c *= 2;
console.log(c);
d /= 3;
console.log(d);
let e = 13;
e %= 5;
console.log(e);
// ______________________________________
// 3. Comparison operators: ==, ===, !=, !==, >, <, >=, <=
console.log(a == b);
console.log(e === a);
console.log(a != b);
console.log(d > e);
console.log(a < b);
console.log(c >= a);
console.log(a <= b);
// ______________________________________
// 4. Logical operators: &&, ||, !
let num3 = 8;
let num4 = 8;
console.log(num3 >= num4 && num3 == num4);
console.log(num3 < num4 || num3 == num4);
console.log(num3 != num4);
// ______________________________________
// 5. Ternary operator: condition ? expression1 : expression2
// shortcut method if else statement
let personAge = 20;
let person = personAge <= 20 ? "Adult" : "child";
console.log(person);

let studentMarks = 10;
let result = studentMarks >= 60 ? "passed" : "failed";
console.log(result);

let userName = "Urooj";
let userStatus =
  userName == "Urooj" ? "welcome " + userName + "!" : "Invalid user";
console.log(userStatus);

let score = 90;
let finalScore = score >= 60 ? "win" : "lose";
console.log(finalScore);
// ______________________________________
// String ↔️ Number Conversion
// numbers to strings --- string(), num1+''
let num5 = 100;
let strNum = String(num5);
console.log(strNum);
let strNum2 = num5 + "78";
console.log(typeof strNum2);
// String to Number---Number(),parseInt
let price = "5000";
let numPrice = Number(price);
console.log(numPrice);
console.log(typeof numPrice);
let newPrice = parseInt(price);
console.log(newPrice);
console.log(typeof newPrice);

// ______________________________________
// String Concatenation
let firstName = "Asifa";
let lastName = "karim";
// ______Method1________
let fullName = firstName + " " + lastName;
console.log(fullName);
// _______Method2----->concat()__________
let city = "Islamabad";
let userAdress = fullName.concat(" lives in ", city);
let str4 = fullName.concat(" welcome to our platform!");
console.log(userAdress);
console.log(str4);
// ________Method3-------> template literals________
let userData = `${firstName} ${lastName} lives in ${city}`;
console.log(userData);
// ______________________________________
// if-else Statement
// agr condition true hai toh block mai se code ko print kary gay otherwise else mai se block of code print hoga
//   1. User Login Check
let password = "12345";
if (password === "12345") {
  console.log("Login successful");
} else {
  console.log("wrong password");
}
//  2.Age Restriction
let userAge = 18;
if (userAge >= 18) {
  console.log("Acess granted");
} else {
  console.log("Acess denied");
}
// 3. Wheather check
let weather = "rainy";
if (weather === "sunny") {
  console.log("wear sunglasses");
} else {
  console.log("take umberala");
}
// 4. Grade checking
let obtainMarks = 85;
if (obtainMarks >= 90 && obtainMarks <= 100) {
  console.log("Grade:A+");
} else if (obtainMarks >= 80 && obtainMarks <= 90) {
  console.log("Grade:A");
} else if (obtainMarks >= 70 && obtainMarks <= 80) {
  console.log("Grade:B");
} else if (obtainMarks >= 60 && obtainMarks <= 70) {
  console.log("Grade:c");
} else {
  console.log("Failed");
}
// 5.time based greeting
let timestramp = "Night";
let userlogin = "Ali";
if (timestramp === "Morning") {
  console.log(`Good ${timestramp} ${userlogin}`);
} else if (timestramp === "Night") {
  console.log(`Good ${timestramp} ${userlogin}`);
} else {
  console.log("Invalid user name please sign up for new account");
}
// 6. product stock check
let stock = 9;
if (stock > 0) {
  console.log("In stock");
} else {
  console.log("out of stock");
}
// 7. number check
let number1 = 10;
if (number1 > 0) {
  console.log("the number is positive");
} else {
  console.log("the number is nagetive");
}
// ______________________________________
// switch case statements
// The experssion which match with any case (that case with block of code will execute) otherwise the defult statement will be print out
let days = 4;
switch (days) {
  case 0:
    console.log("Monday");
    break;
  case 1:
    console.log("Tuesday");
    break;
  case 2:
    console.log("wednesday");
    break;
  case 3:
    console.log("Thursday");
    break;
  case 4:
    console.log("friday");
    break;
  case 5:
    console.log("saturday");
    break;
  case 6:
    console.log("sunday");
  default:
    console.log("Invalid");
}

// ______________________________________
// loops--------> for loop, while loop, do while loop
// DRY----->DONOT REPEAT YOURSELF

// for loop
// variable; condition; increment/decrement;
let user = "sonia";
// console.log(user[0]);
// console.log(user[1]);
// console.log(user[2]);
// console.log(user[3]);
// console.log(user[4]);
// for (let i = 0; i <= user.length; i++) {
//   console.log(user[i]);
// }
let i = 0;
while (i < user) {
  console.log(user[i]);
}
// 2. print numbers from 0 to 5
// for — when you know the exact count
for (let j = 0; j < 5; j++) {
  console.log(j);
}
// while — condition checked before each run
let k = 0;
while (k <= 10) {
  console.log(k);
  k++;
}
// do-while — runs at least once (condition at the end)
let l = 0;
do {
  console.log(l);
  l++;
} while (l <= 7);
//3. Multiplication table generator
let num6 = 7;
for (let m = 1; m <= 10; m++) {
  console.log(`${num6}x ${m}=${num6 * m}`);
}

// ______________________________________
// break and continue
// ______________________________________
// Introduction to arrays
// ______________________________________
// Array Methods
// ______________________________________
// Primitve vs reference Data Types
// ______________________________________
// clone Array
// ______________________________________
// concat Method
// ______________________________________
// spread operator
// ______________________________________
// looping in Arrays (for ,while loop)
// ______________________________________
// for of loop
// ______________________________________
// for in loop
// ______________________________________
// Array distructuring
// ______________________________________
// intoduction to objects
// ______________________________________
// Dot vs bracket notation
// ______________________________________
// iterate objects
// ______________________________________
// computed properties
// ______________________________________
// prompt, alert , confirm
