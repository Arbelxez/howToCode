# CONCEPTOS BASICOS JS

## TIPOS DE VARIABLES

~~~ js
let String = "cadena de texto";
~~~

~~~ js
let Number = 44;
~~~

~~~ js
let Boolean = False;
~~~

##  SCOPE
Formas de declarar una variable (Las variables solo se declaran una vez)

* ### CONST 
La variable nunca cambiara de valor
~~~ js
const pi = 3.14;
~~~
* ### VAR
La variable tendra ese valor dentro de todos los bloques
~~~ js
var edad = 23;
~~~
* ### LET
La variable tendra ese valor solo para el bloque en el que fue declarada
~~~ js
let i = 0;
~~~

## PROMPT
Abre un escapacio para que el usuario ingrese una cadena de texto
~~~ js
let edad = prompt('Ingrese su edad');
~~~

 ## OPERADORES
 ~~~ js
 x = x + y;
 ~~~
 *Es igual a decir:*
 ~~~ js
 x += y;
 ~~~
**Aplica para todas las operaciones**

## OPERADORES ARITMETICOS
* ### ADICION
~~~ js
let numero = 10;
resultado = numero--;
resultado = 9;
~~~
* ## SUSTRACCION
~~~ js
let numero = 10;
resultado = numero++;
resultado = 11;
~~~

## CONCATENACION

Se unen cadenas de texto o numericas
~~~ js
let saludo = "Hola Samuel, ";
let pregunta = "Como estas?";

frase = saludo + pregunta;
frase = "Hola Samuel, Como estas?";
~~~
*Para concatenar numeros*

~~~ js
let numero = 5;
let numero2 = 8;

frase = "" + numero + numero2;
frase = 58;
~~~

* **Otra forma de concatenar**
~~~ js
nombre = "Samuel";
frase = `Soy ${nombre} y estoy caminando`;
~~~
## OPERADORES DE COMPARACION
Si la relacion se cumple entrega un valor positivo o en su defecto un valor negatico
* ### IGUALADAD
*Pregunta si los valores son iguales y no diferencia el tipo de dato:*
~~~ js
let numero = 23
let numero2 = "23"
numero == numero2
True
~~~
* ### ESTRICTA IGUALDAD
*Pregunta si los datos son estrictamente iguales:*
~~~ js
let numero = 23
let numero2 = 23

numero === numero2
True
~~~
* ### DESIGUALDAD
*Pregunta si los valores son distintos:*
~~~ js
let numero = 23
let numero2 = 23

numero != numero2
False
~~~
* ### ESTRICTA DESIGUALDAD
*Pregunta si son estrictamente diferentes*
~~~ js
let numero = 45
let numero2 = "45"

numero !== numero2
True
~~~
* ### MAYOR MENOR IGUAL
*Pregunta si el valor es mayor menor o igual*
~~~ js
let numero = 45
let numero2 = 95

numero2 < numero
False
~~~
~~~ js
let numero = 46
let numero2 = 46

numero <= numero2
True
~~~
## OPERADORES LOGICOS 
*Da un resultado a partir de que se cumpla o no una condicion, sus resultados son datos booleanos:*
* ### AND
*Solo devulve True cuando ambos valores son verdaderos*
~~~ js
let valor = true
let valor2 = false

let resultado = valor && valor2;
resultado = false
~~~
* ### OR
*Si cualquiera de los 2 valores es verdadero nos regresa un valor verdadero*
~~~ js
let valor = true
let valor2 = false

let resultado = valor || valor2;
resultado = true
~~~
* ### NOT
*Nos regresa el resultado contrario*
~~~ js
let valor = false

let resultado = ! valor;
resultado = True
~~~
## CONDICIONALES
*Permite ejecutar fragmentos de codigo solo si una condicion se cumple*
* ### IF
*Si se cumple se ejecuta el fragmento*
~~~ js
if (10 > 15) {
    alert("Hola")
}
/** No se ejecuta porque 10 no es mayor que 15*/

~~~
* ### ELSE IF
*Si no se cumple el primer if pasa al else if para ver si es verdadero*
~~~ js
let nombre = "Samuel"

if (nombre == "Samuel Arbelaez"){
    alert ("Tu nombre es " + nombre)
}
else if (nombre == "Samuel"){
    alert ("Tu nombre es " + nombre)
} 
/** Como el primer if no se cumple pasa a revisar el else if, como si se cumple se ejecuta ese fragmento*/
~~~
* ### ELSE
*Si nada de lo anterior se cumplio este se ejecuta*
~~~ js
let nombre = "Juan"

if (nombre == "Samuel Arbelaez"){
    alert("Tu nombre es " + nombre)
}
else if (nombre == "Samuel"){
    alert("Tu nombre es " + nombre)
}
else {
    alert("Tu nombre no es Samuel")
}
/** Como ningun if era verdadero se ejecuta el else*/
~~~
## ARRAYS O LISTAS
*Variable que almacena varios tipos de datos*
~~~ js
let datos = ["Samuel", "Arbelaez", 17, "Rionegro"]
document.write(datos[0])

/** Se mostria en pantalla "Samuel" porque es el primer elemento de la lista*/
~~~
* ### ARRAYS ASOCIATIVOS
*Se les dan nombres a las posiciones*
~~~ js
let datos = {
    nombre: Samuel
    apellido: Arbelaez
    edad: 17
    ciudad: Rionegro
}
documet.write(datos["nombre"])

/** Nos da el valor asociado a nombre, en este caso "Samuel" porque asi fue que lo definimos*/
~~~
## BUCLES
*Los bucles se repiten constantemente mientras la condicion se cumpla*

 * ### WHILE
 *Se ejecuta hasta que la condicion se deje de cumplir*
 ~~~ js
 while (numero < 10){
    numero++;
    documen.write(numero)
 }

 /** Se va a ejecutar hasta que el incremento haga numero sea mayor que 10*/
 ~~~
 * ### DO WHILE
 *Primero se ejecuta la accion y luego se comprueba el ciclo*
 ~~~ js
 let numero = 0;

 do {
    document.write(numero);
    numero++;
 }
 while (numero > 5)

 /** Numero no es mayor que 5 pero como el do esta antes este se ejecuta*/
 ~~~
 * ### BREAK
 *El break termina la sentencia*
 ~~~ js
 let numero = 0
 while(numero < 1000 ){
    numero++;
    document.write(numero):
    if (numero == 10){
        break
    }
 }

 /** Cuando se llegue a cierto valor, o se cumpla una condicion el ciclo se apaga*/
 ~~~
 * ### CONTINUE
 *Cuando se cumpla la condicion se salta el codigo que sigue*
 ~~~ js
for(let i = 0; i < 20; i++){
    if (i == 12){
        continue;
    }
    document.write(i)
}
/**Cuando i sea igual a 12 se va a ejecutar el continue y se va a saltar el document.write() */
~~~

 * ### FOR
 *Es un bluce finito en el que especificamos cuantas vueltas va a dar*
 ~~~ js
 for (let i = 0; i > 6; i++ ){
    document.write(i)
 }
 /**
PRIMERO
Se declara
SEGUNDO
Se pone la condicion
TERCERO
Se especifica si es aumento o decremento
 */
 ~~~

 * ### FOR IN
 *Nos devuelve la pisicion en la lista*
 ~~~ js
 let animales = ["gato","perro","pajaro"]
for (animal in animales){
    document.write(animal)
}
/**0,1,2*/
 ~~~
 ~~~ js
 let animales = ["gato","perro","pajaro"]
for (animal in animales){
    document.write(animales[animal])
}
/**gato,perro,pajaro*/

 ~~~
 * ### FOR OF
 *Nos devuelve el contenido de la posicion*
 ~~~ js
 let animales = ["gato","perro","pajaro"]
for (animal in animales){
    document.write(animal)
}
/**gato,perro,pajaro*/
 ~~~
 * ### LABEL
 *Permite asociar un bucle a un nombre*
~~~ js
let array1 = ["Samuel","Daniel", "Clara", "Thomas", "Paulina"]
let array2 = ["Fernando","Diana", array1]

forTerminar:
for (let array in array2){
    if(array == 2){
        break forTerminar;
    } else {
        document.write(array2[array] + '<br>')
    }
}
/** Asocia el bucle a un nombre y permite saltar el bucle completo */
~~~
## FUNCIONES
*Una porcion de codigo asociado a un nombre para poder reutilizarlo*
~~~ js
function saludar(){

    respuesta = prompt("Hola Samuel! Como estuvo tu dia?")
    if(respuesta== "bien"){
        alert("me alegro")
    }
    else{
        alert("Lo lamento")
    }
}

saludar()
saludar()
saludar()

/** Se ejecutara el codigo el numero de veces que invoquemos la funcion*/
~~~
* ### RETURN
*Finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función*
~~~ js
function saludar(){
    alert("Hola")
    return "La funcion se ejecuto correctamente"
}
let saludo = saludar()
document.write(saludo)

/** Se imprime "La funcion se ejecuto correctamente" */
~~~
* ### FUNCIONES FLECHA

*Es una forma distinta y mas practica de crear una funcion*

~~~ js
const saludar = (nombre)=>{
    let frase = `Hola ${nombre}!`;
    document.write(frase)
}
~~~
## PARAMETROS
*Permie variar el uso de las funciones*

~~~ js
let num1;
let num2;
function suma(num1,num2){
    let resultado = num1 + num2;
    document.write(resultado);
}

suma(35,30)

/**65*/
~~~
~~~ js
function suma(num1,num2){
    let res = num1 + num2
    return res
}

let resultado = sum(20,25)
document.write(resultado)

/** Suma toma el valor de res, para luego darle este valor a la variable resultado e imprimirla*/
~~~
~~~ js
function saludar(nombre){
    let frase = `Hola ${nombre}!, como estas?`
    document.write(frase)
}
saludar("Pedro")

/**Hola Pedro!, como estas?*/
~~~
