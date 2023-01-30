function solicitarNombre(){ 
    let nombre=prompt("ingrese su nombre")
}

let apellido=prompt("ingrese su apellido: (si no quiere dar su apellido:ingrese continuar)");
while(apellido != "continuar"){
    apellido=prompt("ingrese su apellido: (para continuar:ingrese continuar)")
}

let edad= parseInt(prompt("ingrese su edad"))

if(edad < 18) { 
    alert("solo mayores de 18 años pueden manejar")
    }

else {
    alert("felictaciones capaz que puedas dejar de pedalear"  +  nombre)


let nivelDeConocimiento= prompt("ingrese su nivel de conocimiento (cero, medio, punto caramelo)  ")
switch (nivelDeConocimiento){
    case "cero":
        alert("No te preocupes..te vamos a tener paciencia");
        break
    case "medio":
        alert("Por lo menos tenes una base..te falta poco");
        break
    case "punto caramelo":
        alert(" De acá salis poniendo primera!!");
        break

}
}

