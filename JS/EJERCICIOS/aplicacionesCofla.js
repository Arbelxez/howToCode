class App {
    constructor(nombreApp,cantidadDescargas,puntuaciones,pesoAplicacion){
        this.nombreApp = nombreApp
        this.cantidadDescargas = cantidadDescargas
        this.puntuaciones = puntuaciones
        this.pesoAplicacion = pesoAplicacion
        this.estadoInstalacion = false
        this.estadoIniciacion = false
    }
    instalar(){
        if(this.estadoInstalacion == false){
            this.estadoInstalacion = true
            alert(`La app ${this.nombreApp} se esta instalando, espere unos segundos`)
        }else if(this.estadoInstalacion == true){
            alert(`La app ${this.nombreApp} ya esta instalada`)
        }
    }
    desinstalar(){
        if(this.estadoInstalacion == true){
            alert(`La app ${this.nombreApp} esta siendo desinstalada`)
            this.estadoInstalacion = false
        }else if(this.estadoInstalacion == false){
            alert(`La app ${this.nombreApp} no esta instalada, por lo que no se puede desinstalar`)
        }
    }
    iniciar(){
        if(this.estadoIniciacion == false && this.estadoInstalacion == true){
            alert(`La app ${this.nombreApp} se esta iniciando`)
            this.estadoIniciacion = true
        } else if(this.estadoIniciacion == true && this.estadoInstalacion == true) {
            alert(`La app ${this.nombreApp} ya esta siendo ejecutada`)
        }
        else {
            alert(`Ha ocurrido un error ejecutando la app`)
            this.estadoIniciacion = false
        }
    }
    cerrar(){
        if(this.estadoIniciacion == true && this.estadoInstalacion == true){
            alert(`La app ${this.nombreApp} esta siendo cerrada`)
            this.estadoIniciacion = false
        }else if(this.estadoIniciacion == false && this.estadoInstalacion == true){
            alert(`La aplicacion ${this.nombreApp} ya esta cerrada`)
        }
        else {
            alert(`Ha ocurrido un error ejecutando la app`)
            this.estadoIniciacion = false
        }
    }
    mostarInfo(){
        document.write(`Nombre: ${this.nombreApp}<br>
        Cantidad de descargas: ${this.cantidadDescargas}<br>
        Puntuacion: ${this.puntuaciones}<br>
        PesoApp: ${this.pesoAplicacion}<br>`)
    }
}

app1 = new App("Twitter","300k","5/5","1G")
app2 = new App("Instagram","1000k","4/5","500Mb")
app3 = new App("Youtube","250k","5/5","300Mb")

app1.instalar()
app1.iniciar()
app1.cerrar()
app1.desinstalar()
app1.mostarInfo()