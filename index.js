console.log("Hello World"); // console.log using to output strings
console.log(`My name is Avishka`); // we can use " ", ' ', and ` ` to output strings

// window.alert(`Welcome to the browser`); // this is a window alert when we go to the web page, showing this message in a window.

// this is a single line comment
/* this
    is 
    a multiline
    comment 
*/
// add text by catch html id (getElementById)
document.getElementById("myH1").textContent = `This is text from js file`; // we can add text to the web page like this.
document.getElementById("myP1").textContent = " this is paragraph from js file";

// variable = Acontainer that stores a value.
// declaration     let x;
// assignment    x = 25;
let x;
x = 25;
console.log("x value is: " + x); // x value is: 25
console.log(`x value is: ${x}`); // x value is: 25
console.log("x value is: ${x}"); // x value is: ${x}

// typeof
console.log(typeof x); //number
let firstName = "Avishka";
console.log(typeof firstName); //string
let lastName;
console.log(typeof lastName); //undefined

// boolean
let online = true;
console.log(typeof online); // boolean
console.log(`Avishka is online: ${online}`); //Avishka is online: true

let fullName = "Avishka Chasith";
let age = 22;
let isStudent = true;

document.getElementById("p1").textContent = firstName; // p tag with p1 id, add Avishka on browser.
document.getElementById("p2").textContent = age; // p tag with p1 id, add 22 on browser.
document.getElementById("p3").textContent = isStudent; // p tag with p1 id, add true on browser.

// arithmetic operators = operands (values, variables, etc.)
let student = 30;
console.log(student); // 30  shows in developer tools console tab
student = student + 1;
console.log(student); // now show 31
student = student ** 2;
console.log(student); // 961
// + = add
// - = substract
// * = multiply
// / = devide
// % = modules. give remainder
student += 1; // this is same to student = student + 1;

// how to accept user input

let username;
//username = window.prompt(`What is your name?`);
//console.log(username);

document.getElementById("mySubmit").onclick = function () {
  // *sinhala - html eke mySubmit kiyl id attribute ekkin hdpu submit button ek click krm (onclick event ek thmy gnneh ekt) wenn on de function ekk ethult dl thiyenw
  username = document.getElementById("myText").value;
  console.log(username);
};

// type conversion = change the datatype of a value to another
//                                             (strings, numbers, booleans)

let userAge = window.prompt(`How old are you?`); // user age ek widihata 25 gehuwoth eetpsse age ek ekkin wedi krt console wenneh 251 kiyl. hethuw user input ek string wen nis. a nis apit user input ek number wlt convert krgnn on
userAge = Number(userAge); // Number function. this function convert another data type into  number. so here string will be convert to the number.
userAge += 1;
console.log(userAge);

