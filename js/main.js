//"Base de Datos"

const articulo1 = {
  id: 1,
  nombre: "Celkon A9",
  sistema: "Feature phone",
  stock: 10,
  precio: 433,
};
const articulo2 = {
  id: 2,
  nombre: "ZTE Grand X2",
  sistema: "Android 5.1",
  stock: 50,
  precio: 1286,
};
const articulo3 = {
  id: 3,
  nombre: "alcatel OT-980",
  sistema: "Android 2.1",
  stock: 23,
  precio: 1518,
};
const articulo4 = {
  id: 4,
  nombre: "Philips C700",
  sistema: "Feature phone",
  stock: 3,
  precio: 449,
};
const articulo5 = {
  id: 5,
  nombre: "Samsung Galaxy A20",
  sistema: "Android 9.0, up to Android 11, One UI 3.1",
  stock: 15,
  precio: 1514,
};
const articulo6 = {
  id: 6,
  nombre: "Micromax X40",
  sistema: "Feature phone",
  stock: 5,
  precio: 1413,
};
const articulo7 = {
  id: 7,
  nombre: "Motorola V50",
  sistema: "Feature phone",
  stock: 6,
  precio: 1522,
};
const articulo8 = {
  id: 8,
  nombre: "LG Watch W7",
  sistema: "Android Wear OS 2.0",
  stock: 10,
  precio: 875,
};
const articulo9 = {
  id: 9,
  nombre: "Samsung C3530",
  sistema: "Feature phone",
  stock: 7,
  precio: 385,
};
const articulo10 = {
  id: 10,
  nombre: "Huawei Fusion 2 U8665",
  stock: 9,
  sistema: "Android 2.3",
  precio: 1468,
};

const articulos = [
  articulo1,
  articulo2,
  articulo3,
  articulo4,
  articulo5,
  articulo6,
  articulo7,
  articulo8,
  articulo9,
  articulo10,
];

let carrito = []

//Funciones
function verCatalogo(arrProductos) {
  let seccionOfertas = document.getElementById("seccion-ofertas")

  arrProductos.forEach((producto) => {
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Sistema: ${producto.sistema}</p>
        <p class="card-text">Stock: ${producto.stock}</p>
        <p class="card-text">Precio: $ ${producto.precio}</p>
        <input type="number" id="cantidad-${producto.id}" min = 0 max = ${producto.stock}></input>
        <button class="btn btn-primary agregarProducto" id=${producto.id}>Agregar</button>
      </div>
    `
    seccionOfertas.appendChild(card)
  })
}

verCatalogo(articulos)

function agregarAlCarrito(){
  let agregarProducto = document.querySelectorAll(".agregarProducto")
  agregarProducto.forEach(btn => {
    btn.onclick = (e) => {
      let productId = e.currentTarget.id
      let selectedArticle = articulos.find(art => art.id == productId)
      
    } 
  })
}

