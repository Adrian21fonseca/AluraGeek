import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(nombre,precio,imagen){
    const carta = document.querySelector("div");
    lista.className = "card";
    lista.innerHTML = `<img class="producto" src="${imagen}" alt="producto"> 
        <p class="nombre_producto">${nombre}</p>
        <p class="precio">${precio} <img src="img/Vector.svg" alt="basura"></p>
    `

    return carta;
}

async function listarCarta(){
    const listaAPI = await conexionAPI.listarCards()
} 

listarCarta()