function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

//let result = condition ? value1 : value2;

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
//   }
/*
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}
*/
//  function min(a,b) {
//     if (a < b) {
//       return a
//      } else {
//          return b
//      }   
//  }

// function min(a, b) {
//     return a < b ? a : b;
//   }