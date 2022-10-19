// let year = Number(prompt("choose a year"));
// year > 2000
//   ? alert("You are in the 21st century")
//   : alert("You live in the middle ages");

var num = prompt("Enter your calcul (eg: 3 * 4)").split(" ");
console.log(num);
const calculator = (num1, num2, operator) => {
  let result;
  operator == "+"
    ? (result = num1 + num2)
    : operator == "-"
    ? (result = num1 - num2)
    : operator == "*"
    ? (result = num1 * num2)
    : operator == "/"
    ? (result = num1 / num2)
    : null;
  alert(result);
};
calculator(Number(num[0]), Number(num[2]), num[1]);
