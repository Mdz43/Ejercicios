// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// 1- suma infinita - inicio
// 2- ingresar numero
// 3- es un numero?
// 4- si no es un numero, volver al paso 2
// 5- es un numero, continuar
// 6- guardar numero, desea salir? si no, volver al paso 2
// 7- sumar los numeros introducidos
// 8- fin

let x = []
let salir

while (salir !== false) {
    if (salir !==false) {
        y = parseFloat(prompt("ingrese un numero"))
    }
    if (isNaN(y)) {
        alert("no es un numero, volver a ingresar")
    } else if (typeof y === "number") {                    
        x.push(y)
        console.log(x)
    }
    salir = confirm("quiere ingresar mas numeros?")
}

console.log(x)

let sumarNumeros = function(n1, n2) {
    return n1 + n2
}

alert("la suma es " + x.reduce(sumarNumeros))



