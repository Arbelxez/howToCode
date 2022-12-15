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
* ## CREATEDOCUMENTFRAGMENT( )
*Crea un fragmento en el que se almacena informacion para luego ingresarla toda al mismo tiempo*
~~~ html
<div class="contenedor"></div>
~~~
~~~ js
contenedor = document.querySelector(".contenedor")

fragmento = document.createDocumentFragment()

for(i=0, i<20, i++){
    item = document.createElement("Li")
    item.innerHTML = "Este es un item de la lista"
    fragmento.appendChild(item)
}
contenedor.appendChild(gramento)
~~~
# OBTENCION Y MODIFICACION DE CHILDS
* ## FIRSTELEMENTCHILD
~~~ html
<div class="contenedor">
    <h2>un titulo comun</h2>
    <h4>un subtitulo de chill</h4>
    <p>un parrafo normal</p>
</div>
~~~
~~~ js
contenedor = document.querySelector(".contenedor")

primerHijo = contenedor.firstElementChild

primerHijo =  "<h2>un titulo comun</h2>"

~~~
* ## LASTELEMENTCHILD
~~~ html
<div class="contenedor">
    <h2>un titulo comun</h2>
    <h4>un subtitulo de chill</h4>
    <p>un parrafo normal</p>
</div>
~~~
~~~ js
contenedor = document.querySelector(".contenedor")

ultimoHijo = contenedor.lastElementChild

ultimoHijo = "<p>un parrafo normal</p>"
~~~
* ## CHILDREN 
~~~ html
<div class="contenedor">
    <h2>un titulo comun</h2>
    <h4>un subtitulo de chill</h4>
    <p>un parrafo normal</p>
</div>
~~~
~~~ js
contenedor = document.querySelector(".contenedor")

hijos = contenedor.children

hijos =     
    <h2>un titulo comun</h2>
    <h4>un subtitulo de chill</h4>
    <p>un parrafo normal</p>
~~~
# METODOS DE CHILDS
* ## APPENCHILD( )
*Sirve para insertar elementos como hijos de otros*
~~~ html
<div class="contenedor"></div>
~~~
~~~ js
contenedor = document.querySelector(".contenedor")

item = document.creatElement("LI")

textDelItem = document.createTextNode("Este es un item de la lista")

item.appendChild(textDelItem)

contenedor.appendChild(item)
~~~
~~~ html
<div class = "contenedor">
    <li>Este es un item de la lista</li>
</div>
~~~
* ## REPLACECHILD( )
~~~ html
<div class="contenedor">
    <h2 class="h2">un titulo comun</h2>
    <h4>un subtitulo de chill</h4>
    <p>un parrafo normal</p>
</div>
~~~
~~~ js
contenedor = document.querySelector(".contenedor")

parrafo = document.creatElement("P").innerHTML = "parrafo"
h2_nuevo = document.creatElement("H2")

h2_nuevo.innerHTML= "titulo"

h2_viejo = document.querySelector(".h2")

contenedor.replaceChild(h2_nuevo,h2_antiguo )
~~~

* ## REMOVECHILD( )
~~~ html
<div class="contenedor">
    <h2 class="h2">un titulo comun</h2>
    <h4>un subtitulo de chill</h4>
    <p>un parrafo normal</p>
</div>
~~~
~~~ js
contenedor = document.querySelector(".contenedor")

h2_viejo = document.querySelector(".h2")

contenedor.removeChild(h2_viejo)
~~~
* ## HASCHILDNODE( )
*Para verificar si un elemento tiene un elemento hijo o no*
~~~ html
<div class="contenedor">
    <h2 class="h2">un titulo comun</h2>
    <h4>un subtitulo de chill</h4>
    <p>un parrafo normal</p>
</div>
~~~
~~~ js
contenedor = document.querySelector(".contenedor")

respuesta = contenedor.hasChildNodes()

respuesta= true
~~~
# PROPIEDADES DE PADRES
* ## PARENTELEMENT - PARENTNODE
**
~~~ html
<div class="contenedor">
    <h2 class="h2">un titulo comun</h2>
    <h4>un subtitulo de chill</h4>
    <p>un parrafo normal</p>
</div>
~~~
~~~ js
h2_viejo = document.querySelector(".h2")

respuesta = h2_antiguo.parentElement

respuesta = <div class="contenedor"><div>
~~~
# PROPIEDADES DE HERMANOS
* ## NEXTELEMENTSIBLING
~~~ html
<div class="contenedor">
    <h2 class="h2">un titulo comun</h2>
    <h4 class = "h4">un subtitulo de chill</h4>
    <p>un parrafo normal</p>
</div>
~~~
~~~ js
hermano2 = document.querySelector(".h4")

hermano3 = hermano2.nextElementSibling

hermano3 =     <p>un parrafo normal</p>
~~~
* ## PREVIOUSELEMENTSIBLING
~~~ html
<div class="contenedor">
    <h2 class="h2">un titulo comun</h2>
    <h4 class = "h4">un subtitulo de chill</h4>
    <p>un parrafo normal</p>
</div>
~~~
~~~ js
hermano2 = document.querySelector(".h4")

hermano1 = hermano2.previousElementSibling

hermano1 =  <h2 class="h2">un titulo comun</h2>
~~~
# NODOS EXTRAS
* ## CLOSEST( )
*Nos devuelve el elemento mas cercano que tenga cierca clase*
~~~ html
<div class="div">
    <div class="div">
        <div class="div-2"></div>
    </div>
</div>
~~~
~~~ js
div = document.querySelector(".div-2")

x = div.closest(".div")
x = <div class="div"></div> /**Nos devuelve el div con clase div mas cercano*/
~~~