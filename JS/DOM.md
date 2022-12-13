# DOCUMENT - METODOS DE SELECCION DE ELEMENTOS
* ## GETELEMENTBYID( )
*Seleccionar elementos con el Id*
~~~ html
<div id="parrafo">Soy Samuel Arbelaez</div>
~~~
~~~ js
parrafo = document.getElementById("parrafo")
~~~
* ## GETELEMENTBYTAGNAME( )
*Seleciona elementos con el tag*
~~~ html
<div>Samuel</div>
<div>Arbelaez</div>
<div>Morlaes</div>
~~~
~~~ js
texto = document.getElementByTagName("div")
~~~
* ## QUERYSELECTOR( )
*Selecciona el primer elemento que coincida*
~~~ html
<div class="parrafo">Hola mis amores</div>
~~~
~~~ js
parrafo = document.querySelector(".parrafo")
~~~
~~~ html
<div id="parrafo">Hola mis amores</div>
~~~
~~~ js
parrafo = document.querySelector("#parrafo")
~~~
* ## QUERYSELECTORALL( )
*Seleccionan todos los elementos que coincidan*
~~~ html
<div class="parrafo">Hola mis amores</div>
<div class="parrafo">Hola mis amores</div>
<div class="parrafo">Hola mis amores</div>
<div class="parrafo">Hola mis amores</div>

~~~
~~~ js
parrafo = document.querySelectorAll(".parrafo")
document.write(parrafo[0])
/**Selecciona el primer elemento de la lista de nodos*/
~~~
# METODOS PARA DEFINIR, OBTENET Y ELIMINAR VALORES DE ATRIBUTOS
* ## SETATTRIBUTE( )
~~~ html
<label>Rango de edad</label>
<input type="range" class="rangoEtario">
~~~
~~~ js
rangoEtario = document.querySellector(.rangoEtario)

rangoEtario.setAttribute("type","text")
/**El primer valor es el valor que queremos modificar y el segundo es el nuevo valor que le vamos a dar*/

/**Ahora en vez de tener una linea de range tenemos un espacio de text*/
~~~
* ## GETATTRIBUTE( )
~~~ html
<label>Rango de edad</label>
<input type="range" class="rangoEtario"> <!--Se seleciona el valor 20 para la edad-->
~~~
~~~ js
rangoEtario = document.querySellector(.rangoEtario)

valorEdad = rangoEtario.getAttribute("type") 
valorEdad = 20
~~~
* ## REMOVEATTRIBUTE
*Se elimina el atributo*
~~~ html
<input type="range" class="rangoEtario">
~~~
~~~ js
rangoEtario.removeAttribute("type") 
~~~
# ATRIBUTOS GLOBALES
* ## HIDDEN
~~~ html 
<h1 class="titulo">TITULO </h1>
~~~
~~~ js
titulo = document.querySelector(.titulo)

titulo.setAttribute("hidden", "")
/**Nos esconde el texto*/
~~~
* ## TABINDEX
~~~ html
<h1 class="titulo">TITULO </h1>
~~~
~~~ js
titulo.setAttribute("tabindex", "true")
/**Nos permite seleccionar el elemento*/
~~~
* ## STYLE
~~~ html
<h1 class="titulo">Elemento a modificar</h1>
~~~
~~~ js
titulo = document.querySelector(".titulo")

titulo.style.color = "red"
~~~
# ATRIBUTOS DE LOS INPUTS
* ## CLASSNAME
~~~ html
<input type="text" class="input-normal">
~~~
~~~ js
input = document.querySelector(".input-normal")
input.className = "Input- normal"
~~~
* ## VALUE
~~~ html
<input class="input" value="123">
~~~
~~~ js
valor = document.querySelector(".input")

valor.value = "123"
~~~ 
* ## TYPE
~~~ html
<input type="range"class="input" value="123">
~~~
~~~ js
input = document.querySeletor(".input")

input.type = "text" /**Cambia directamente la clase de type*/
~~~
* ## ACCEPT
*Tipos de archivos que se van a aceptar*
~~~ html
<input type="file" class="input">
~~~
~~~ js
input = document.querySeletor(".input")

input.accept = "image/PNG "
~~~
* ## FORM
~~~ html
<form id="formulario">
    <input type= "text" name= "">
    <input type= "text" name= "">
</form>
    <input type="submit" form="formulario">
~~~
~~~ js
input = document.querySeletor("#formulario")

input.form = "formulario2"/**Cambia el formulario que se envia*/
~~~
* ## MINLENGHT
*Cantidad minima de caracteres que recibe*
~~~ html
<input type="text" class="input">
~~~
~~~ js
input = document.querySelector(.input)

input.minLenght = 10
~~~
* ## PLACEHOLDER
*Ejemplo de texto que va dentro del contenedor*
~~~ html
<input type="text" class="input">
~~~
~~~ js
input = document.querySelector(.input)

input.placeholder= "Esto es un texto de prueba"
~~~
# CLASES, CLASSLIST Y METODOS DE CLASSLIST
* ## ADD( )
~~~ html
<h1 class="titulo">Esto es un titulo</h1>
~~~
~~~ js
titulo = document.querySelector(".titulo")

titulo.classList.add("grande") /**Se crea y se le agrega la clase "grande"*/
~~~
* ## REMOVE
~~~ html
<h1 class="titulo">Esto es un titulo</h1>
~~~
~~~ js
titulo = document.querySelector(".titulo")

titulo.classList.remove("titulo") /**Se elimina la clase titulo*/
~~~
* ## CONTAINS
~~~ html
<h1 class="titulo">Esto es un titulo</h1>
~~~
~~~ js
titulo = document.querySelector(".titulo")

valor = titulo.classList.contains("titulo")

valor = true
~~~
* ## TOGGLE( )
*Si tiene la clase la elimina y si no la tiene la agrega*
~~~ html
<h1 class="titulo">Esto es un titulo</h1>
~~~
~~~ js
titulo = document.querySelector(".titulo")

valor = titulo.classList.toggle("titulo")
~~~
# OBTENCION Y MODIFICACION DE ELEMENTOS
* ## TEXTCONT
~~~ html
<h1 class="titulo">Esto es un <b>titulo</b></h1>
~~~
~~~ js
titulo = document.querySelector(".titulo")

resultado = titulo.textCont

resultado = "Esto es un titulo"
~~~
* ## INNERHTML
~~~ html
<h1 class="titulo">Esto es un <b>titulo</b></h1>
~~~
~~~ js
titulo = document.querySelector(".titulo")

resultado = titulo.innerHTML

resultado = "Esto es un <b>titulo</b>"
~~~
* ## OUTERHTML
~~~ html
<h1 class="titulo">Esto es un <b>titulo</b></h1>
~~~
~~~ js
titulo = document.querySelector(".titulo")

resultado = titulo.outerHTML

resultado = "<h1 class="titulo">Esto es un <b>titulo</b></h1>"
~~~
# CREACION DE ELEMENTOS
* ## CREATEELEMENTS( )
**
~~~ html
<div class="contenedor"></div>
~~~
~~~ js
contenedor = document.querySelector(".contenedor")

item = document.creatElement("LI")
~~~
# METODOS DE CHILDS
* ## APPENCHILD