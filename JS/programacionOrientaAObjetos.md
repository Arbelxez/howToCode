# PROGRAMACION ORIENTADA A OBJETOS
## OBJETO
*Sirve para agrupar valores*
#### *En vez de:*
~~~ js
let name ="Ryan"
let lastname ="Ray"
let age = 30
~~~
#### *Se usa:*
~~~ js
const user ={
    name:"Ryan"
    lastname: "Ray"
    age: 30
    hobbies:["read","programming","run"]
    address:{
        street: "some street"
        city: "london"
    }
}
~~~
## PROPIEDADES
*Es cada una de las caracteristicas asociadas a un objeto*
~~~ js
const user ={
    name:"Ryan"
    lastname: "Ray"
    age: 30
    hobbies:["read","programming","run"]
    address:{
        street: "some street"
        city: "london"
    }
}

/**En este caso las propiedades serian el nombre, el apellido, la edad, etc*/
~~~
## THIS
*Sirve para selecionar el valor de una de las propiedades dentro del objeto*
~~~ js
const usuario = {
    nombre:"Samuel",
    apellido: "Arbelaez",
    edad: 17,
    mostrarNombre() {
        alert(`${this.nombre} ${this.apellido}`)
    }
}
usuario.mostrarNombre()
/**Samuel Arbelaez*/
~~~
~~~ js 
const cuenta ={
    numero:"4000 123 5678 9010",
    monto: 100,
    depositar(){
        this.monto += 100
        alert(`Su saldo es de ${this.monto}`)
    },
    retirar(){
        this.monto -= 100;
        alert(`Su saldo es de ${this.monto}`)
    }
}
cuenta.depositar()
~~~
## METODO
*Son funcionalidades o acciones propias de un objeto ( NO SE PUEDEN USAR FUNCIONES FLECHA !! )*

~~~ js
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

~~~ 
~~~ js 
const cuenta ={
    numero:"4000 123 5678 9010",
    monto: 100,
    depositar(){
        this.monto += 100
        alert(`Su saldo es de ${this.monto}`)
    },
    retirar(){
        this.monto -= 100;
        alert(`Su saldo es de ${this.monto}`)
    }
}

cuenta.depositar()
~~~
* ### METODOS ESTATICOS
*No necesita que la clase se defina para poder ser creado*
~~~ js
class tiposDePerros extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza
    }
    static ladrar(){
        alert("WAW!")
    }
}

/** Sirve para ejecutar metodos sin tener el objeto creado, en el ejemplo el objeto unicamente esta "declarado" e igualmente se ejecuta*/
~~~

* ### SETTERS
*Para cambiar valores*
~~~ js
class tiposDePerros extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);  
        this.raza = null
    }
    set setRaza(nuevaRaza){
        this.raza = nuevaRaza
    }
}
perro.setRaza('Pincher') /**El metodo set es tomado como propiedad por lo que cambia la sintaxis*/


perro.modificarRaza = "Pincher" /** FORMA CORRECTA DE ESCRIBIRLO*/

~~~
* ### GETTERS
*Para recibir valores*
~~~ js
class tiposDePerros extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);  
        this.raza = null
    }

    get getRaza(){
        return this.raza
    }
}
~~~

## CONSTRUCTOR
*Genera objetos con propiedades preestablecidas*
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

usuario.mostrarNombre()
/**Samuel Arbelaez*/
~~~


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
