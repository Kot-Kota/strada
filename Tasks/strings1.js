
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes('viagra') || lowerStr.includes('XXX');
// }
// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"));

// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
// The result of the function should be the truncated (if needed) string.
// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
// truncate("Hi everyone!", 20) = "Hi everyone!"

// function truncate(str, maxlength) {
//     return(str.lenght > maxlength) ?
//         str.slice(0, maxlength -1) + 'U+2026' : str;
// }

function excractCurrencyValue(str) {
    return +str.slice(1);
}
alert(excractCurrencyValue('$120') === 120);