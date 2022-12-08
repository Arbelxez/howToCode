
# INFORMACION BASICA DE GIT

## LS

* ls	/** sirve para mostrar todas las carpetas que hay dentro de un directorio*/
	
* ls -a	/** muestra los archivos ocultos dentro de una carpeta*/
## .GITIGNORE

.gitignore /** se ingresan los nombres los archivos que queremos omitir*/

## PWD
pwd	/** muestra la carpeta dentro de la que te encuentras*/

## CD

* cd	/** entrar salir de una carpeta*/

* cd + "nombre de la carpeta"	/** entras en un carpeta*/

* cd ..	/** sales de una carpeta*/

* cd .git    /** entras en el arhivo .git*/

## CAT

cat + "nombre del archivo" 	/** mostrar el contenido del archivo*/
## RM

rm + " nombre del archivo" 	/** elimina un archivo*/
 ## CODE .

code . /** abre en el vscode la carpeta en la que estas*/

## RESTORE
* restore + " nombre del archivo"	/** recuperar el archio previamente eliminado*/
* restore --staged 	/** recuperar el archio previamente eliminados en etapa de staged*/

## MKDIR

mkdir + ("nombre de la carpeta)		/** crea una nueva carpeta*/

## GIT

* git init	/** inicia y vincula los archivos dentro de la carpeta con git*/                                              

* git mv + " nombre actual" + " nuevo nombre"		/** le cambia de nombre a un archivo*/

* .git	/** abre el archivo .git*/

* git status	/** muestra el estado de los archivos y si estan siendo seguidos o no*/ 
	
  * git status -s 	    /** para que te den menos informacion*/


* git diff    /** muestran los cambios que se van a realizar*/

  * git diff --staged    /** se muestran los cambios que se realizan en la etapa de staged*/

* git log --oneline	/** muetra los cambios realizados*/

* git branch	/** se muestra la ramma del proyecto en la cual se esta trabajando*/

  * git checkout -b + "nombre de la rama"		/** salir de la rama principal y crear una nueva rama*/
  * git checkout + "nombre de la rama"	/** entrar a una rama ya creada*/
  * git checkout master		/** volver al contenido de la rama principal*/
  * git merge + "nombre de la rama"  	/** traer los cambios desde otra rama*/
  
* git add + (" nombre del archivo")	/**monta el archivo seleccionado*/

* git commit -m "Nombre"		/** se envian los archivos a la nuve*/

* git push 		/** sirve para cargarlo todo a la nuve*