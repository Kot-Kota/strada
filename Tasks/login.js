/*
Write the code which asks for a login with prompt.
If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
The password is checked as follows:
If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
*/
let login = prompt("Who's there?");
  if (login == "" || null) {
    message = "Canceled"
}  else if (login == "Admin") {
    let password = prompt ("Password?")
     if (password == "TheMaster") {
      message = "Welcome!";
    } else if (password = "" || null) {
        message = "Canceled";
    }  else {
        message = "Wrong password"
    }
} else { 
    message = "I don't know you";
}
  