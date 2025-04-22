let bumber1 = document.querySelector('#bumber1')
let operatorH = document.querySelector("#operatorH");
let bumber2 = document.querySelector("#bumber2");
let res = document.querySelector('#res')

let num1 = prompt("Birinchi sonni kiriting");
let operator = prompt("Amalni kiriting \n+ \n - \n * \n /");
let num2 = prompt("Ikkinchi sonni kiriting");

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result =  num1 - num2;
    break;
  case "*":
    result =  num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    alert("Noto'ri amal kirtingiz")
    break;
}

function resultat(){
    res.innerHTML = result
}

operatorH.innerHTML = operator
bumber1.innerHTML = num1
bumber2.innerHTML = num2