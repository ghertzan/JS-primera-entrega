//"Base de Datos"

const articulo1 = {
  id: 1,
  nombre: "Celkon A9",
  sistema: "Feature phone",
  stock: 10,
  img: "../img/ID1.jpg",
  precio: 433,
};
const articulo2 = {
  id: 2,
  nombre: "ZTE Grand X2",
  sistema: "Android 5.1",
  stock: 50,
  img: "../img/ID2.jpg",
  precio: 1286,
};
const articulo3 = {
  id: 3,
  nombre: "alcatel OT-980",
  sistema: "Android 2.1",
  stock: 23,
  img: "../img/ID3.jpg",
  precio: 1518,
};
const articulo4 = {
  id: 4,
  nombre: "Philips C700",
  sistema: "Feature phone",
  stock: 3,
  img: "../img/ID4.jpg",
  precio: 449,
};
const articulo5 = {
  id: 5,
  nombre: "Samsung Galaxy A20",
  sistema: "Android 9.0, up to Android 11, One UI 3.1",
  stock: 15,
  img: "../img/ID5.jpg",
  precio: 1514,
};
const articulo6 = {
  id: 6,
  nombre: "Micromax X40",
  sistema: "Feature phone",
  stock: 5,
  img: "../img/ID6.jpg",
  precio: 1413,
};
const articulos = [
  articulo1,
  articulo2,
  articulo3,
  articulo4,
  articulo5,
  articulo6,
];

let carrito = []

//Funciones
function verCatalogo(arrProductos) {
  let seccionOfertas = document.getElementById("seccion-ofertas")

  arrProductos.forEach((producto) => {
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
      <img src= ${producto.img} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Sistema: ${producto.sistema}</p>
        <p class="card-text">Stock: ${producto.stock}</p>
        <p class="card-text">Precio: $ ${producto.precio}</p>
        <input type="number" id="cantidad-${producto.id}" min = 0 max = ${producto.stock} value=0></input>
        <button class="btn btn-primary agregarProducto" id=${producto.id}>Agregar</button>
      </div>
    `
    seccionOfertas.appendChild(card)
  })
  agregarAlCarrito()
}


function agregarAlCarrito() {
  let carritoStorage = sessionStorage.getItem("carrito")
  if (carritoStorage) {
    carrito = JSON.parse(carritoStorage)
  }
  let botones = document.querySelectorAll(".agregarProducto")
  botones.forEach(element => {
    element.onclick = (e) => {
      let itemId = e.currentTarget.id
      let cantTxt = document.getElementById("cantidad-" + itemId).value
      if (cantTxt != 0) {
        if (carrito.some(e => e.articulo.id == itemId)) {
          carrito.forEach((element) => {
            if (element.articulo.id == itemId) {
              element.cantidad = parseInt(element.cantidad) + parseInt(cantTxt)
              console.log(element.cantidad)
            }
          })
        } else {
          let item = articulos.find(articulo => articulo.id == itemId)
          carrito.push({ articulo: item, cantidad: parseInt(cantTxt) })
        }
        sessionStorage.setItem("carrito", JSON.stringify(carrito))
      }
      console.log(carrito)
    }
  })
}

//Inicio
verCatalogo(articulos)