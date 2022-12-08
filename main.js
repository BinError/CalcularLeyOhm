let formulario= document.forms;

function isEmpty(elemento){
    if(elemento){
        return true
    } else false
}

//debo verificar 2 elementos para completar la ecuacion
//si tengo ohm y amp falta vol ohm * amp = vol
// si tengo amp y vol entonces vol / amp = ohm
//si tengo ohm y vol entonces vol / ohm = amp

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

    return resultado + mensaje    
}
function llamar(){
    return calcularOhm(formulario[0].Ohm.value,formulario[0].Amp.value,formulario[0].Vol.value)
}