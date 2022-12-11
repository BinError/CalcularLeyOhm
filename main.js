let formulario = document.forms;

function isEmpty(elemento){
    if(elemento){
        return true
    } else false
}

//debo verificar 2 elementos para completar la ecuacion
//si tengo ohm y amp falta vol ohm * amp = vol
// si tengo amp y vol entonces vol / amp = ohm
//si tengo ohm y vol entonces vol / ohm = amp
//

function calcularOhm(ohm, amp, vol){
    let resultado = "Oh NO!. "
    let mensaje= "Error, algo salio mal"

    if(!ohm){
        console.log(ohm)
        resultado = vol/amp  
        mensaje = " Ohms" 
    }

    if(!amp){
        resultado= vol/ohm
        mensaje= " Amps"
    }

    if(!vol){
        resultado= ohm * amp
        mensaje=" Volts"
    }

    if(resultado !== 0){
        //selecciono el elemento para agragale la respuesta
        let miFormulario = document.getElementById("contenedorFormulario")
        miFormulario.innerHTML += `<div class="col-12" style="background-color:lime">${resultado + mensaje}</div>`
    }else return resultado + mensaje    
}
function llamar(){
    return calcularOhm(formulario[0].Ohm.value,formulario[0].Amp.value,formulario[0].Vol.value)
}

function quienSoy(){
    alert("Hola, Soy Ohm")
}
function queHago(){
    alert("Tomaré dos valores para calcular el tercer valor de la ley de Ohm.\n Si me das los Ohmios e Intensidad te dare Voltios. \n Si me das Intensidad y Voltios te daré Ohmios. \n Y si me das Voltios y Ohms te daré Intensidad")
}