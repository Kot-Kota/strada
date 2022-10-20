let operations = {
    add: "+",
    multi: "*",
    sub: "-",
}
function calc(operator, a, b){
    if (typeof a === "string" || typeof b === "string")
     return "The Numbers is STR"
    switch (operator) {
        case operations.add:
          return (Number(a)+ Number(b))
        case operations.multi:
          return a*b
        case operations.sub:
          return a-b
          default:
            return "Stop operator";
      }
 }
 console.log(calc(operations.add, 1, 2,))