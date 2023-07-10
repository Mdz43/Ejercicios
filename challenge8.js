// 1-Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.


// let texto = prompt("Ingresa una cadena de texto:");
// let resultado = "";

// for (let i = 0; i < texto.length; i++) {
//     resultado += texto[i];

//     if (i !== texto.length - 1) {
//     resultado += "-";
//     }
// }

// console.log(resultado);
// Hecho rapidamente en clase con chagpt, luego comprendi como funciona el bucle

// Hecho solo con metodos del array
let texto = prompt('ingrese un texto')
let arrayTexto = Array.from(texto)
// arrayTexto.join("-")
console.log(arrayTexto.join("-"))
//



// 2-Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.


// let texto2 = prompt("Ingresa una cadena de texto:");
// let resultado2 = "";

// for (let i = texto2.length - 1; i >= 0; i--) {
//     resultado2 += texto2[i];
// }

// console.log(resultado2);

// hecho con bucle



//dos formas de convertir el string a array, y hacerle reverse

// let texto2 = prompt('ingrese un texto 2')
// let arrayTexto2 = Array.from(texto2)
// console.log(arrayTexto.reverse())

let texto2 = prompt("ingrese un texto 2");
let arrayTexto2 = texto.split("")

console.log(arrayTexto2.reverse())
