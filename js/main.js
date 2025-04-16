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
    const {id, nombre, sistema, stock, img, precio} = producto

    const card = document.createElement("div")
    card.className = "card"

    const imgCard = document.createElement("img")
    imgCard.src = img
    imgCard.alt =" imagende celular"
    imgCard.className= "card-img-top"

    const divCardBody = document.createElement("div")
    divCardBody.className = "card-body"

    const h5Nombre = document.createElement("h5")
    h5Nombre.className="card-title"
    h5Nombre.textContent = nombre

    const pSistema = document.createElement("p")
    pSistema.className = "card-text"
    pSistema.textContent = "Sistema Op: " + sistema

    const pStock = document.createElement("p")
    pStock.className = "card-text"
    pStock.textContent = "Stock: " + stock

    const pPrecio = document.createElement("p")
    pPrecio.className = "card-text"
    pPrecio.textContent = "Precio: $" + precio

    const inputCantidad = document.createElement("input")
    inputCantidad.type='number'
    inputCantidad.className = "cantidadPedida"
    inputCantidad.min='1'
    inputCantidad.max = stock
    inputCantidad.value='1'
    inputCantidad.id = "cantidad-"+id

    const btnAgregar = document.createElement("button")
    btnAgregar.className="btn btn-primary agregarProducto mt-2 gh-btn"
    btnAgregar.textContent = "Agregar"
    btnAgregar.onclick = () => agregarAlCarrito(producto, inputCantidad.value)

    divCardBody.append(h5Nombre, pSistema, pStock, pPrecio, inputCantidad, btnAgregar)
    card.append(imgCard, divCardBody)
    seccionOfertas.appendChild(card)
  })
}


function agregarAlCarrito(producto, cant) {
  
  const exist = carrito.some(e => e.articulo.id == producto.id)
  if(exist){
    carrito.forEach(e => {
      if(e.articulo.id == producto.id){
        e.cantidad = parseInt(e.cantidad) + parseInt(cant)
      }
    })
  }else{
    carrito.push({articulo: producto, cantidad: cant})
  }
  sessionStorage.setItem("carrito", JSON.stringify(carrito))
  console.log(carrito)
}

//Inicio
verCatalogo(articulos)