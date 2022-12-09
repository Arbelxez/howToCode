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

const perro = new animal("perro",5,"marron")

document.write(perro.color)
/**Marron*/

document.write(perro.info)
/**Soy un perro, tengo 5 años y soy de color marron */ 
~~~
## METODOS
*Son funciones pero van definidos dentro de las clases por que por fuera de ella, no tienen uso, ( NO SE PUEDEN USAR FUNCIONES FLECHA !! )*

~~~ js
class animal {
    constructor(especie,edad,color){
        this.especie=especie
        this.edad=edad
        this.color=color
        this.info=`Soy un ${especie}, tengo ${edad} años y soy de color ${color}`
    } 
    verInfo(){
        document.write(this.info)
    }
}

const perro = new animal("perro",5,"marron")

perro.verInfo();
/**Soy un perro, tengo 5 años y soy de color marron  */
~~~
## POLIMORFISMO
*Los objetos se comportan distinto ya que tienen propiedades distintas*
~~~ js
class animal {
    constructor(especie,edad,color){
        this.especie=especie
        this.edad=edad
        this.color=color
        this.info=`Soy un ${especie}, tengo ${edad} años y soy de color ${color}`
    } 
    verInfo(){
        document.write(this.info)
    }
    ladrar(){
        if(this.animal == "perro"){
            document.write("Waw!")
        }else{
            `No puede ladrar ya que es un ${this.animal}`
        }
    }
}

const perro = new animal("perro",5,"marron")
const gato = new animal("gato",2, "negro")
const pajaro = new animal("loro",1,"verde")

perro.ladrar()
gato.ladrar()
loro.ladrar()

/**
Waw!
No puede ladrar ya que es un gato
No puede ladrar ya que es un loro
*/
~~~

## HERENCIA
*Nos permite hacer que un objeto herede e comportamiento de otro*
~~~ js
class animal {
    constructor(especie,edad,color){
        this.especie=especie
        this.edad=edad
        this.color=color
        this.info=`Soy un ${especie}, tengo ${edad} años y soy de color ${color}`
    } 
    verInfo(){
        document.write(this.info)
    }
    ladrar(){
        if(this.animal == "perro"){
            document.write("Waw!")
        }else{
            `No puede ladrar ya que es un ${this.animal}`
        }
    }
}

class tiposDePerros extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);   /**Toma las caracteristicas que anteriormente ya se le habian dado*/
        this.raza = raza
    }
}

const perro = new animal("perro",5,"marron","Doberman")
~~~
## METODOS ESTATICOS