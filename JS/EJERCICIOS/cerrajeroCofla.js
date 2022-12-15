const contenedor = document.querySelector(".flex-container");

let contador = 0;

function crearLlave(nombre,modelo,precio){
    contador++;
    img = '<img src="llave.png" class="llave-img">';
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id='${modelo}'>${modelo}</h3>`;
    precio = `<p>Precio: <b>${precio} $</b></p>`;
    return [img,nombre,modelo,precio];

}
 
let documentFragment = document.createDocumentFragment()

for (var i = 1; i <= 20; i++){
    let modeloRandom = Math.round(Math.random()*1000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave ${i}`,`modelo ${modeloRandom}`, `${precioRandom}`)
    
    let div = document.createElement("DIV")
    div.tabIndex = i
    div.classList.add(`flex-item`,`item-${i}`)
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3]
    documentFragment.appendChild(div)
    
}
contenedor.appendChild(documentFragment)