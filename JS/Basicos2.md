# OBJETO
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
# PROPIEDADES
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
# THIS
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
# METODO
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
* ## METODOS ESTATICOS
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

* ## SETTERS
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
* ## GETTERS
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
# CONSTRUCTOR
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
# POLIMORFISMO
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
# HERENCIA
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
# METODOS DE CADENA
*Sirven para modificar los strings o cadenas de texto*

* ## CONCAT( )
*Une 2 cadenas de texto en una*
~~~ js
let cadena = "cadena de prueba"

resultado = cadena.concat(" hola")
/** cadena de prueba hola*/
~~~
* ## STARTSWITH( )
*Verifica si una cadena empieza con los mismo caracteres de otra cadena*
~~~ js
let nombreCompleto = "Samuel Arbelaez"
let  nombre = "Samuel"

resultado = nombreCompleto.startsWith(nombre)

resultado = true

/**Como "Samuel Arbelaez" empieza por la palabra Samuel, nos devuelve true*/
~~~
* ## ENDSWHITH ( )
*Verifica si una cadena termina con los mismos caracteres de otra cadena*
~~~ js
let nombreCompleto = "Samuel Arbelaez"
let apellido = "Arbelaez"

resultado = nombreCompleto.endsWhite(Apellido)

resultado = true
~~~
* ## INCLUDES( )
*Verifica si el texto esta presente dentro de la cadena, sin importar el lugar*
~~~ js
let nombreCompleto = "Samuel Arbelaez Morales"
let apellido = "Arbelaez"

resultado = nombreCompleto.includes(apellido)

resultado = true
~~~
* ## INDEX OF ( )
*Nos devuelve la posicion en la que empieza la palabra*

~~~ js
let cadena = "Hola Samulio"

resultado = cadena.indexOf("Hola")

resultado = 0
/**Nos devuelve 1 porque es el espacio en el que empieza esa palabra*/
~~~
~~~ js
let cadena = "Hola Samulio"

resultado = cadena.indexOf("Samulio")

resultado = 5
/**Empieza en el quinto caracter*/
~~~
*De esta manera se puede acceder al valor correspondiente a un espacio en una cadena de texto*
~~~ js
let nombreCompleto = "Samuel Arbelaez Morales"
document.write(nombreCompleto[0])
/**S*/

/**Es el valor de la posicion 0*/
~~~
* ## LASTINDEXOF ( )
*Nos devuelve la posicion del ultimo caracter de una cadena de texto*
~~~ js
let nombreCompleto = "Samuel Arbelaez Morales"
resultado = lastIndexOf("Samuel")

resultado = 5
/** Porque la palabra Samuel termina en el quinto espacio*/
~~~
* ## PADSTART( )
*Rellena la cadena hasta llegar a un numero de caracteres*
~~~ js
let cadena = "abc"

resultado = cadena.padStart(10, "-")
/* El primer valor es la cantidad de espacios que queremos que tenga la cadena*/
/**El segundo valor es con el caracter que queremos que la rellene*/
resultado = "-------abc"
~~~
* ## PADEND( )
*Rellene la cadena de atras hacia delante hasta completar el numero de caracteres*
~~~ js
let cadena = "abc"

resultado = cadena.padEnd(10, "-")
resultado = "abc-------"
~~~
* ## REPEAT( )
*Nos mostrara una cadena repetida el numero de veces que queramos*
~~~ js
let cadena = "123 "
resultado = cadena.repeat(3)
resultado = "123 123 123 "
~~~
* ## SPLIT ( )
*Nos ayuda a dividir la cadena*
~~~ js
let nombre ="Samuel,Arbelaez,Morales"

resultado = nombre.split(",") /** Separa el texto cada que tengamos una coma*/

resultado = ["Samuel","Arbelaez","Morales"]
document.write(resultado[2])

/**Morales*/
~~~
* ## SUBSTRING( )
*Nos permite recortar la cadena de texto y obtener un nuevo string*
~~~ js
let cadena = "ABCDEFG"

resultado = cadena.substring(0, 3) /** Nos recorta el texto desde la posicion 0 hasta la 3*/

resultado = "ABC"
~~~
* ## TOLOWERCASE( )
*Nos combierte una cadena a minuscula*

~~~ js
let cadena = "SAMUEL"

resultado = cadena.toLowerCase()

resultado = "samuel"
~~~
* ## TOUPPERCASE( ) 
*Combierte toda una cadena a mayuscula*
~~~ js
let cadena = "samuel"

resultado = cadena.toUpperCase()

resultado = "SAMUEL"
~~~
* ## TOSTRING( )
*Nos combierte un valor a cadena de texto*
~~~ js
let number = 12345

resultado = number.toString()

resultado = "12345"
~~~

* ## TRIM( )
*Elimina los espacios vacios*
~~~ js
let cadena = "    pepito    "

resultado = cadena.trim()

resultado = "pepito"
~~~
* ## TRIMEND( )
*Elimina los espacio en blanco del final*
~~~ js
let cadena = "   pepito    "

resultado = cadena.trimEnd()

resultado = "   pepito"
~~~
* ### TRIMSTART( )
*Elimina los espacios en blanco del principio*
~~~ js
let cadena = "   pepito    "

resultado = cadena.trimStart()

resultado = "pepito    "
~~~
# METODOS DE ARRAYS
*Sirve para modificar las listas*
* ## METODOS TRANSFORMADORES
* ### POP( )
*Elimina el ultimo elemento de una lista y nos lo muestra ne pantalla*
~~~ js
let nombres = ["Samuel", "Juan", "Miguel"]

resultado = nombres.pop()

nombres = ["Samuel", "Juan"]

resultado = "Miguel"

/**Elimina a Miguel de la lista y nos muestr el nombre*/
~~~
* ### SHIFT( )
*Elimina el primer valor de la lista y nos lo muestra en pantalla*
~~~ js
let nombres = ["Samuel", "Juan", "Miguel"]
resultado = nombres.shift()

nombres = ["Juan", "Miguel"]

resultado = "Samuel"
/**Resultado toma el valor del objeto removido*/
~~~
* ### PUSH( )
*Agrega un nuevo elemento al final de la lista*
~~~ js
let nombres = ["Samuel", "Juan", "Miguel"]

resultado = nombres.push("Paco")

resultado = ["Samuel", "Juan", "Miguel","Paco"]
~~~
* ### REVERSE( )
*Invierte el orden de los elementos de una lista*
~~~ js
let nombres = ["Samuel", "Juan", "Miguel","Paco"]

resultado = nombres.reverse()

resultado = ["Paco","Miguel","Juan","Samuel"]
~~~
* ### UNSHIFT( )
*Agrega elementos al principio de la lista y devuelve la nueva longitud*
~~~ js
let numeros = [3,4]

resultado = numeros.unshift(1,2)

numeros = [1,2,3,4]

resultado = 4
/** Resultado es igual a el numero de objetos de array*/
~~~
* ### SORT( )
*Ordena la lista en orden alfabetico o numerico*
~~~ js
let numeros = [6,3,6,4,2,9,1]

resultado = numeros.sort()

resultado = [1,2,3,4,6,6,9]
~~~
~~~ js
let lista = ["Avion","Casa","Barco"]

resultado = lista.sort()

resultado = ["Avion","Barco","Casa"]
~~~
* ### SPLICE( )
*Cambia el contenido de un array eliminando elementos y/o agregando nuevos elementos*
~~~ js
let lista = ["Juan","Samuel","Miguel","Julian"]

resultado = lista.splice(0, 2,"Roberto") /**Primer valor: desde donde se quiere empezar a borrar
Segundo valor: numero de elementos que se quiere eliminar despues de el primer valor
Tercer valor: valor por el que se van a remplazar los elementos eliminados*/

resultado = ["Roberto", "Miguel", "Julian"]
~~~
* ## METODOS ACCESORES
*Funcionan metodos ya vistos como: toString(), indexOf(), lastIndexOf(), inludes(), entre otros*
* ### JOIN( )
*Convierte a un array en una cadena de texto y agrega un nuevo separador*

~~~ js
let lista = ["Samuel","Julian","Miguel"]

let resultado = lista.join(" - ")

resultado = "Samuel - Julian - Miguel"
~~~

* ### SLICE( )
*Nos permite crear una nueva lista con los elementos que nosotros seleccionemos*
~~~ js
let lista = ["Samuel","Julian","Miguel"]

let resultado = lista.slice(0,2) /**En la posicion 0 empieza el nuevo array y en la posicion 2 termina*/

resultado = ["Samuel","Julian"]
~~~
~~~ js
let lista = ["Samuel","Julian","Miguel"]

resultado = lista.slice(0,-2) /**Todos los elementos menos los ultimos 2*/

resultado = ["Samuel"]
~~~
* ## METODOS DE REPETICION
* ### FILTER()
*Sirve para recorrer la lista tomando los valores de cada posicion del array*
~~~ js
let listado = ["abecedario", "manzana", "pedro", "dedo", "bobo", "pedro"]

resultado = numero.filter(numero => numero.length > 4)

resultado = ["abecedario","manzana", "pedro","pedro"]
~~~
* ### FOREACH ()
*Nos permite lo mismo que el filter(), pero podemos agregar condiciones*
~~~ js
let listado = ["abecedario", "manzana", "pedro", "dedo", "bobo", "pedro"]

listado.forEach(numero => document.write(numero + "<br>"))

/**"abecedario
 * manzana
 * pedro
 * pedro"*/
~~~
# OBJETO MATH
## METODOS
* ### SQRT( )
*Nos devuelve la raiz cuadrada*
~~~ js
raiz = Marh.sqrt(25)

raiz = 5
~~~
* ### CBRT( )
*Nos devuelve la raiz cubica*
~~~ js
raiz = Math.cbrt(125)

raiz = 5
~~~
* ### MAX( )
*Nos devuelve el valor maximo de una lista de numeros*
~~~ js
numero = Math.max(1,,5,6,76,23,67,234,2354,567)

numero = 2354
~~~
* ### MIN( )
*Nos devuelve el valor minimo de una lista de numeros*
~~~ js
numero = Math.min(1,5,6,76,23,67,234,2354,567)

numero = 1
~~~
* ### RANDOM( )
*Nos devuelve un numero aleatorio en 0 y 1*
~~~ js
numeroAleatorio = Math.random()

numeroAleatorio = 0.156363
~~~

* ### RAUND( )
*Reondea el valor al entero mas cercano*
~~~ js
let numero = Math.random()*100

numero = Math.round(numero)

numero = 87
~~~
* ### FLOOR( )
*Quita la parte decimal del numero*
let numero = Math.random()*100
~~~ js
numero = Math.floor(4.99999999)

numero = 4
~~~
## PROPIEDADES
* ### PI
*Da el valor de PI*
~~~ js
PI = Math.PI

PI = 3.1415...
~~~
* #### SQRT1_2
*Da el valor de raiz de 1/2*
~~~ js
let numero = Math.SQRT1_2

numero = 0.707106...
~~~
* ### SQRT2
*Da el valor de la raiz cuadra de 2*
~~~ js
let numero = Math.SQRT2

numero = 1.41421...
~~~
* ### E
*Constatnte de Euler*
~~~ js
const Euler = Math.E

Euler = 2.718...
~~~
* ### LN2 
*Logaritmo natural de 2*
~~~ js
const numero = Math.LN2

numero = 0.69314...
~~~
* ### LOG2E
*Logaritmo de E en base 2*
~~~ js
numero = Math.LOG2E

numero = 1.4426...
~~~
* ### LOG10E
*Logaritmo de E en base 10*
~~~ js
numero = Math.LOG10E

numero = 0.4342944...
~~~
# CONSOLE
* ## ERROR( )
*Muestra mensaje de error en la consola*
* ## INFO( )
*Muestra mensaje informativo en la consola*
* ## WARN( )
*Muestra un mensaje de adbertencia en la consola*
* ## TEMPORIZADORES
* ### TIME( )
*Inicia el temporizador*
* ### TIMELOG( )
*Registra el valor actual del remporizador*
* ### TIMEEND( )
*Finaliza el conteo*