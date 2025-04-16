let carrito = []


// function verCarrito() {
//     let articulosCarrito = document.getElementById("articulosCarrito")
//     let carritoStorage = sessionStorage.getItem("carrito")
//     if (carritoStorage) {
//         carrito = JSON.parse(carritoStorage)
//         carrito.forEach((producto) => {
//             let totalItem = parseInt(producto.articulo.precio) * parseInt(producto.cantidad)
//             let card = document.createElement("div")
//             card.className = "card"
//             card.innerHTML = `
//                 <div class="card-body">
//                     <h5 class="card-title">${producto.articulo.nombre}</h5>
//                     <p class="card-text">Sistema: ${producto.articulo.sistema}</p>
//                     <p class="card-text">Cantidad: ${producto.cantidad}</p>
//                     <p class="card-text">Precio: $ ${producto.articulo.precio}</p>
//                     <p class="card-text">Total item: $ ${totalItem}</p>
//                     <button class="btn btn-primary eliminarProducto" id=${producto.articulo.id}>Eliminar</button>
//                 </div>
//             `
//             articulosCarrito.appendChild(card)
//         });

//         let divTotal = document.createElement("div")
//         // divTotal.className = "card-title"
//         divTotal.innerHTML = `
//             <p class="card-title"> Total: $ ${carrito.reduce((acc, itemCarrito) => {
//             return acc += parseInt(itemCarrito.articulo.precio) * parseInt(itemCarrito.cantidad)
//         }, 0)}
//         </p>
//         `
//         articulosCarrito.appendChild(divTotal)



//     } else {
//         articulosCarrito.innerHTML = `<h2>Tu carrito está vacío</h2>`
//         return
//     }
// }


function htmlLimpiar(){
    let articulosCarrito = document.getElementById("articulosCarrito")
    articulosCarrito.innerHTML=``
}


function htmlCarrito() {
    htmlLimpiar()
    let articulosCarrito = document.getElementById("articulosCarrito")
    const carritoStorage = sessionStorage.getItem("carrito")
    if (carritoStorage) {
        carrito = JSON.parse(carritoStorage)
        let table = document.createElement("table")
        table.className = "table"
        table.innerHTML = `
     <thead>
        <tr>
            <th scope="col">Item</th>
            <th scope="col">Nombre</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Total</th>
            <th scope="col">Eliminar</th>
        </tr>
    </thead>
    `
        let tbody = document.createElement("tbody")

        carrito.forEach(prod => {
            const { articulo, cantidad } = prod;
            const tr = document.createElement("tr")
            const thItem = document.createElement("th")
            thItem.scope = "row"
            thItem.innerText = articulo.id

            const tdNombre = document.createElement("td")
            const pNombre = document.createElement("p")
            pNombre.textContent = `${articulo.nombre}`
            tdNombre.appendChild(pNombre)

            const tdCantidad = document.createElement("td")
            const pCantidad = document.createElement("input")
            pCantidad.type = 'number'
            pCantidad.min = '1'
            pCantidad.value = cantidad      
            pCantidad.size = '1'
            pCantidad.id = "cantidad-" + articulo.id 
            tdCantidad.appendChild(pCantidad)

            const tdPrecio = document.createElement("td")
            const pPrecio = document.createElement("p")
            pPrecio.textContent = `$ ${articulo.precio}`
            tdPrecio.appendChild(pPrecio)

            const tdTotal = document.createElement("td")
            const pTotal = document.createElement("p")
            pTotal.textContent = `$ ${parseInt(articulo.precio) * parseInt(cantidad)}`
            tdTotal.appendChild(pTotal)

            const tdEliminar = document.createElement("td")
            const btnEliminar = document.createElement("button")
            btnEliminar.id = articulo.id
            btnEliminar.className ="btn-close eliminarProducto"
            tdEliminar.appendChild(btnEliminar)


            tr.append(thItem, tdNombre, tdCantidad, tdPrecio, tdTotal, tdEliminar)
            tbody.appendChild(tr)
            table.appendChild(tbody)
            articulosCarrito.appendChild(table)
        })
    } else {
        const pMensaje = document.createElement("p")
        pMensaje.textContent = "Tu carrito está vacío..."
        articulosCarrito.appendChild(pMensaje)
    }
    eliminarProducto()

}

function eliminarProducto() {
    let btnEliminarProductos = document.querySelectorAll(".eliminarProducto")
    console.log(btnEliminarProductos)
    btnEliminarProductos.forEach(btn => {
        btn.onclick = (e) => {
            let itemEliminarId = e.currentTarget.id
            console.log(itemEliminarId)
            carrito = carrito.filter(el => (el.articulo.id != itemEliminarId))
            sessionStorage.removeItem("carrito")
            sessionStorage.setItem("carrito", JSON.stringify(carrito))
            htmlCarrito()

        }
    })
}

htmlCarrito()
