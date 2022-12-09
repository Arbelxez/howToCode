class Celular {
    constructor(color,peso,rdc,rdp,ram){
        this.color=color
        this.peso=peso
        this.rdp=rdp
        this.rdc=rdc
        this.ram=ram
        this.encendido= false
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("Celular prendiendo")
            this.encendido = true
        }else{
            alert("El celular ya esta encendido")
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular")
        }else{
            alert("El celular esta apagado")
        }
    }
    tomarFotos(){
        alert(`Foto tomada en una resolucion de ${this.rdc}`)
    }
    grabarVideo(){
        alert(`Grabando video a una resolucion de ${this.rdc}`)
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Rdp: <b>${this.rdp}</b><br>
        Rdc: <b>${this.rdc}</b><br>
        Ram: <b>${this.ram}</b><br>
        `
    }
}

class celularesAltaGama extends Celular{
    constructor(color,peso,rdp,rdc,ram,rdce){    
    super(color,peso,rdp,rdc,ram)
    this.rdce = rdce
    }
    grabarVideoLento(){
        alert(`Estas grabando en camara lenta`)
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar el reconocimiento facial")
    }
    infoAltaGama(){
        return this.mostrarInfo() + `Rdce: <b>${this.rdce}</b><br>`
    }

}

celular4 = new celularesAltaGama("morado","150g","7'","4k","12GB","2K")
celular5 = new celularesAltaGama("naranjado","200g","6'","Full HD","16GB","Full HD")


celular1 = new Celular("rojo","350g","6'","full hd","2GB")
celular2 = new Celular("negro","120g","5'","4k","6GB")
celular3 = new Celular("verde","200g","4'","HD","12GB")


document.write(`
${celular1.mostrarInfo()} <br>
${celular2.mostrarInfo()} <br>
${celular3.mostrarInfo()} <br>
${celular4.infoAltaGama()} <br>
${celular5.infoAltaGama()} <br>

`)




/**celular1.presionarBotonEncendido()
celular1.tomarFotos()
celular1.grabarVideo()
celular1.reiniciar()*/