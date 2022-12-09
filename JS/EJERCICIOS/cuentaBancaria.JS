const cuentaSamuel ={
    cuenta: "4000 1897 1723 1232",
    monto: 100,
    preguntar(){
        alert("Que desea?")
        accion = prompt("1: retirar, 2: consignar.")
        if (accion == 1){
            valor = parseInt(prompt("Cuanto desea retirar?"))
            this.monto -= valor
            alert(`Usted ha retirado: ${valor} y su monto es de: ${this.monto}`)
            if(this.monto < 0 ){
                alert(`Pongase al dia con su deuda de : ${monto} dolares`)
            }
        }
        else if(accion == 2){
            valor = parseInt(prompt("Cuanto desea consignar?"))
            this.monto += valor
            alert(`Usted ha consigando: ${valor} y su monto es de ${this.monto}`)
        }
        else {
            alert("Sorry my fai, no se de que me esta hablando")
        }
    }
}

cuentaSamuel.preguntar()