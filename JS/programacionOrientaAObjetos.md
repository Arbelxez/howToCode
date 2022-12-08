# PROGRAMACION ORIENTADA A OBJETOS
## CLASES
*Es la plantilla que contiene las cualidades basicas de cada objeto*

~~~ js
class animal {
    constructor(especie,edad,color){
        this.especie=especie
        this.edad=edad
        this.color=color
        this.info=`Soy un ${especie}, tengo ${edad} años y soy de color ${color}`
    } 
}

let perro = new animal("perro",5,"marron")

document.write(perro.color)
/**Marron*/

document.write(perro.info)
/**Soy un perro, tengo 5 años y soy de color marron */ 
~~~
