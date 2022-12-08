let free = false

const validarInvitado = (time)=>{
    let edad = prompt("Cual es tu edad?")
    if(edad >= 18){
        if (time >= 2 && time < 7 && free == false){
            alert(`Podes pasar gratis y son las ${time}`)
            free = true;
        } else {
            alert(`Son las ${time} y podes pasar pero me tenes que pagar`)
        }
    } else {
        alert("Mira papu, aqui solo pasas si me traes la concha de tu madre")
    }
}
validarInvitado(2)
validarInvitado(4)
validarInvitado(7)
validarInvitado(8)
validarInvitado(10)
validarInvitado(13)
validarInvitado(8)