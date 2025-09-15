//variables declarations and conditional
// variable declarations
let username = "Elby";
console.log(username);

let age = 20;

// conditional statement
if (age > 18) {
    console.log(username + " is an adult (Age: " + age + ")");
} else {
    console.log(username + " is a minor (Age: " + age + ")");
}

// Arithmetic(mathematical) operators +,-,*,/
console.log(10+50);
console.log(10-50);
console.log(10*50);
console.log(10/50);
console.log(20%6); // modulus(find remainder after division)

// comparison operators
console.log(5 == "5"); //true(loose comparison=only the value)
console.log(5 === "5"); //false(strick comparison=both value and data type)

//javascript functions(named blocked of code)
//declaring function method one
function greet(){
    console.log('hello people!!! this message is through a function')
}

//call a function
greet();

//method two(function expression):storing a function inside a variable
const hello= function(){
    console.log('Hi there,this is a message using a function expression')
}
hello();

//method three(arrow function)
const goodbye = () => console.log ("ADIOS from an arrow function")
goodbye();

//parameters and return values
function multiply(a, b, c) {
    return a * b * c;
}
console.log(multiply(2,5,7));
console.log(multiply(3,9,6));
console.log(multiply(1,5,7));
console.log(multiply(2,0,10)); //using same function,different values

//changing an element
function changeText(){
    let title= document.getElementById("title");
    title.textContent='this is Web Module session one'
    title.style.color='red';

//adding an element
    let newDiv=document.createElement("div");
    newDiv.textContent= "Hey, i was not here before";
    document.body.appendChild(newDiv);
}

//LOOP EXAMPLES
// Example 1: For loop
console.log("Counting from 1 to 5 using for loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Example 2: While loop
console.log("Counting down from 5 to 1 using while loop:");
let num = 5;
while (num > 0) {
    console.log(num);
    num--;
}

