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
## METODO
*Son funcionalidades o acciones propias de un objeto ( NO SE PUEDEN USAR FUNCIONES FLECHA !! )*

~~~ js
const visaSamuel = {
    number:"4000 123 5678 9010"

    retirar: funtion(20){}
    recargar: duntion(100){} /**Son caracteristicas que tendra el objeto, como poder retirar dinero o recargar dinero*/
}
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

