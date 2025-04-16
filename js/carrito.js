let carrito = []

function htmlLimpiar(){
    let articulosCarrito = document.getElementById("articulosCarrito")
    articulosCarrito.innerHTML=``
}


function htmlCarrito() {
    htmlLimpiar()
    let articulosCarrito = document.getElementById("articulosCarrito")
    const carritoStorage = sessionStorage.getItem("carrito")
    carrito = JSON.parse(carritoStorage)
    console.log(carrito)
    if (carrito ) {
        let table = document.createElement("table")
        table.className = "table table-striped table-hover gh-table"
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
            const { articulo, cantidad} = prod;
            const tr = document.createElement("tr")
            const thItem = document.createElement("th")
            thItem.scope = "row"
            thItem.innerText = carrito.indexOf(prod) + 1

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
            pCantidad.className = "cantidadPedida" 
            pCantidad.onchange = () => cambiarCantidad(articulo.id, pCantidad.value)
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
            btnEliminar.className ="btn-close eliminarProducto"
            btnEliminar.onclick = () => eliminarProducto(articulo.id)
            tdEliminar.appendChild(btnEliminar)


            tr.append(thItem, tdNombre, tdCantidad, tdPrecio, tdTotal, tdEliminar)
            tbody.appendChild(tr)
            table.appendChild(tbody)
            
        })
        const h2Total = document.createElement("h2")
        h2Total.textContent = "$ " + carrito.reduce((acc, e) => {
            return acc += (parseInt(e.articulo.precio) * parseInt(e.cantidad))
        },0)
        h2Total.className="display-2 col-12"
        articulosCarrito.appendChild(table)
        articulosCarrito.appendChild(h2Total)
    } else {
        const pMensaje = document.createElement("p")
        pMensaje.textContent = "Tu carrito está vacío..."
        pMensaje.className="display-4"
        articulosCarrito.appendChild(pMensaje)
    }
}

function eliminarProducto(id) {
    carrito = carrito.filter(producto => producto.articulo.id != id)
    console.log(carrito.length)
    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    htmlCarrito()
}

function cambiarCantidad(id, cant){
    
    carrito.forEach( e =>{
        if(e.articulo.id == id){
            e.cantidad = cant
        }
    })
    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    htmlCarrito()
}

htmlCarrito()
