// сalc(‘add’, 1, 2) - возвращает 3
// сalc(‘multi’, 1, 2) - возвращает 2
// сalc(’subtract’, 3, 2) - возвращает 1

// let operator = "-";
// let a = 3;
// let b = 2;
// let result = calc(a, operator, b)


let operator = prompt('Enter operator ( either +, - or * ): ');
let a = parseFloat(prompt('Enter first number: '));
let b = parseFloat(prompt('Enter second number: '));
let result = calc(a, operator, b)


function calc(a, operator, b) {
 if (operator == "+" ) {
    return a + b;
 }else if (operator == "-") {
   return a - b;
 }else if (operator == "*") {
   return a * b;
 }
} 
console.log(`${a} ${operator} ${b} = ${result}`);