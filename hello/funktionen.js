console.clear();

let result = celsiusToFahreneinheit(15);
let result2 = celsiusToFahreneinheit(30);

console.log("15 Grad Celsius =" + result + "F");
console.log("30 Grad Celsius =" + result2 + "F");

function celsiusToFahreneinheit(celsius) {
  return celsius * (9 / 5) + 32;
}