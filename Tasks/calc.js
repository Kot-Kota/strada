function calc(operator, a, b){
   if (operator === "add") {
    return a+b;
   } else if (operator === "multi") {
    return a*b;
   } else if (operator === "sub") {
    return a-b;
   } else {
    return "Stop operator";
   }   
}
console.log(calc("add", 1, 2,))
 


// let firstNumber = parseFloat(prompt('Enter first number: '));
// let operator = prompt('Enter operator ( either +, - or * ): ');
// let secondNumber = parseFloat(prompt('Enter second number: '));
// let result;

// function calc() {
// 	getfirstNumber();
// 	getsecondNumber();

// switch (operator) {
//    case "+":
//       result = firstNumber + secondNumber;
//       alert(`Результат равен ${result}`);
//       break;
//    case "-":
//       result = firstNumber - secondNumber;
//       alert(`Результат равен ${result}`);
//       break;
//    case "*":
//       result = firstNumber * secondNumber;
//       alert(`Результат равен ${result}`);
//       break;
//       default:
// 			alert(`Wrong characters!`);
// }
// }
// calc();