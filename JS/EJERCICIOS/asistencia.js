let cantidad = prompt("Cuantos alumnos son?")
let alumnosTotales = []

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("nombre del alumno" + (i+1)),0]
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(`${nombre} esta presente ? (S=Si, N=No)`);
    if (presencia == "s" || presencia =="S"){
        alumnosTotales[p][1]++;
    }

}

for (i=0; i < 10; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno)
    }

}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    _________Asitencias: ${alumnosTotales[alumno][1]} <br>
    _________Ausencias: ${10 - alumnosTotales[alumno][1]} `
    if (10 - alumnosTotales[alumno][1] > 4 ){
    resultado += "<b style='color:red'>REPROBADO POR VAGO</b><br><br>"
    }else {
    resultado+= "<br><br>"
    }
    document.write(resultado)
}