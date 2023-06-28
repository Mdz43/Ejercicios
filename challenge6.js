let edad = parseInt(prompt("Ingrese su edad"));
let tutor = prompt("tenes un tutor que te acompañe? (Respuesta: si o no)")

if(edad < 18 && edad >= 10 && tutor.toLowerCase().includes("si")){
    alert("Podes entrar a la fiesta con tu tutor")
}else if (edad < 18 && edad >= 10 && tutor.toLowerCase().includes("no")){
    alert("No podes entrar a la fiesta sin tu tutor")
}else if(edad >=18 && edad < 90){
    alert("Podes entrar a la fiesta solo")
}else{
    alert("No podes entrar aunque tengas tutor")
}


//cementerio embrujado

let anteojos = prompt("traes anteojos?").toLowerCase()

switch (anteojos) {
    case "si": 
        console.log("la casa está construida sobre un cementerio")
        break;
    case "no": 
        console.log("compras la casa sin saber nada")
        break;
    default:
        console.log("no respondiste con si o no")
        break;
}