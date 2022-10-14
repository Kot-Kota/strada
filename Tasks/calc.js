// сalc(‘add’, 1, 2) - возвращает 3
// сalc(‘multi’, 1, 2) - возвращает 2
// сalc(’subtract’, 3, 2) - возвращает 1
let operator;
function calc(operator, a,b) {
 if (operator == "+" ) {
    return a + b;
 }else if (operator == "-") {
    return a - b;
 }else if (operator == "*") {
    return a * b;
 }
} 
let result = calc("*", 4, 5);
console.log(result)