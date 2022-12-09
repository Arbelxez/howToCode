/** PROBLEMA A
Ingresar el monto y mostrar el mas caro
  
Si hay 2 o mas del mismo precio mostrarlo
  
Indicar el vuelto
 
PROBLEMA B
Si no le alcanza para nada le regala el dinero a un vagabundo

Si le alcanza para un boleto de loteria lo compra

Si le alcanza para 2 compra 2

Si le alcanza para 3 los compra y regala el vuelto

Mostrar que compro y el vuelto
 */

let presupuesto1 = prompt("Cual es tu presupuesto Robertito?")



if (presupuesto1 >= 0.6 && presupuesto1 < 1 ){
    alert("Roberto, puedes comprar un helado de agua" )
    alert("Y te sobran " + presupuesto1-0.6 )
}
else if (presupuesto1 >= 1 && presupuesto1 < 1.6 ){
    alert("Roberto, puedes comprar un helado de cremita" )
    alert("Y te sobran " + (presupuesto1-1) )
}
else if (presupuesto1 >= 1.6 && presupuesto1 < 1.7 ){
    alert("Roberto, puedes comprar un helado de heladix" )
    alert("Y te sobran " + (presupuesto1-1.6) )

}
else if (presupuesto1 >= 1.7 && presupuesto1 < 1.8 ){
    alert("Roberto, puedes comprar un helado de heladovich" )
    alert("Y te sobran " + (presupuesto1-1.7) )

}
else if (presupuesto1 >= 1.8 && presupuesto1 < 2.9 ){
    alert("Roberto, puedes comprar un helado de helardo" )
    alert("Y te sobran " + (presupuesto1-1.8) )

}
else if (presupuesto1 >= 2.9){
    alert("Roberto, puedes comprar un helado de confite o un pote de 1/4 de Kg")
    alert("Y te sobran " + (presupuesto1-2.9) )

}
else  {
    alert("Roberto, eres pobre y no puedes comprar nada")
}

