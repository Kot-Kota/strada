/*
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/
let a = +prompt("a?", " ");
switch (a) {
   case 0:
    alert (0);
    break;
   case 1:
    alert (1);
    break;
   case 2:
   case 3:
    alert ("2,3");
    break;
} 