let arr = ["Jazz", "Blues"];
let styles = arr;
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classic";
alert(styles.shift());
styles.unshift("Rap", "Raggie");