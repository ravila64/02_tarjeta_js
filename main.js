// referencia a cada uno de los inputs
const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");
// mascaras
const maskNumber = "####-####-####-####";
const maskDate = "##/####";
const maskCVV = "###";
// inicia variables
let current = "";
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];
//
inputCard.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault(); // anula funcionalidad nativa
  // pasan vars por referencia
  handleInput(maskNumber, e.key, cardNumber);
  inputCard.value = cardNumber.join(""); // array -> cadena, interm vacios
});

inputDate.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault(); // anula funcionalidad nativa
  // pasan vars por referencia, maskDate queda mask, e.key en key,
  // y dateNumber en arr. Lo que cambie en las sdas vars se hace a las 1eras
  handleInput(maskDate, e.key, dateNumber);
  inputDate.value = dateNumber.join(""); // array -> cadena, interm vacios
});

inputCVV.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault(); // anula funcionalidad nativa
  // pasan vars por referencia
  handleInput(maskCVV, e.key, cvvNumber);
  inputCVV.value = cvvNumber.join(""); // array -> cadena, interm vacios
});

function handleInput(mask, key, arr) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  if (key === "Backspace" && arr.length > 0) {
    arr.pop(); // elimina ultimo caracter digitado
    return;
  }
  //caracter leido esta en numbers, y long arr+1 <= long mask
  if (numbers.includes(key) && arr.length + 1 <= mask.length) {
    if (mask[arr.length] === "-" || mask[arr.length] === "/") {
      arr.push(mask[arr.length], key); // arrega - o / y key presionado
    } else {
      arr.push(key);
    }
  }
}
