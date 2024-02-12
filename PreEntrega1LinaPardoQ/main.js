//Inicio


alert("Fundacion Zoomos Al Rescate");

let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

alert("Hola, " + nombreUsuario + "! Bienvenido.");

let claveUsuario = prompt("Por favor, ingresa tu clave:");

let= ingresar=false
for (let i=2; i >=0; i--){
    let ingreso =prompt("Confirma tu clave.");
    if(claveUsuario == ingreso){
        alert("Ya puedes donar y adoptar.");
        ingresar=true
        break;
    }else{
        alert("Clave incorrecta.");
    }
}

// Contenido
     
if (ingresar) {
let opcion =prompt(
    "Seleciona una de la opcion: \n1. Donar \n2. Adoptar \n3. Se Voluntario \nPresiona * para salir.")
while (opcion!="*"){    
    if(opcion==="1"){
        let donacion=parseInt(prompt("Ingresa el monto a donar."));
        console.log(donacion)
        alert("Gracias  " + nombreUsuario + " por tu donacion")
       
    }else if(opcion==="2"){
        let adopte=parseInt(prompt("Seleciona una opcion: \n1. Canino \n2. felino \nPresiona X para salir."));
                    console.log(adopte)

            alert("Gracias  " + nombreUsuario + " por tu adopcion")

    }else if(opcion==="3"){
        let voluntario=parseInt(prompt("Ingrese numero de contacto "  + nombreUsuario));
        console.log(voluntario)
        alert(nombreUsuario + " La fundacion se comunicara contigo pronto");
    }

    opcion = prompt(
        "Seleciona una de la opcion: \n1. Donar \n2. Adoptar \n3. Se Voluntario \nPresiona * para salir.");
    }
} else { alert("Comunicate con la Fundacion Zoomos Al Rescate");
}
