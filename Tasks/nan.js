// let a = +prompt("The first number?", "");
// let b = +prompt("The second number?", "");

// alert( a + b );

function readNumber() {
    let num;
    do {
      num=prompt("Enter a number please?", 0);
    } while ( !isFinite(num));
    if (num === null ||num === "" ) return nul;
    return +num;
}
alert (`Read: ${readNumber()}`);

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert( i );
// }