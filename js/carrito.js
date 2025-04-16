let carrito = []

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
        table.className = "table table-striped table-hover"
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
            pCantidad.className = "cantidadPedida" 
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
            
        })
        const h2Total = document.createElement("h2")
        h2Total.textContent = "$ " + carrito.reduce((acc, e) => {
            return acc += (parseInt(e.articulo.precio) * parseInt(e.cantidad))
        },0)
        articulosCarrito.appendChild(table)
        articulosCarrito.appendChild(h2Total)
    } else {
        const pMensaje = document.createElement("p")
        pMensaje.textContent = "Tu carrito está vacío..."
        articulosCarrito.appendChild(pMensaje)
    }
    eliminarProducto()
    cambiarCantidad()
    

}

function eliminarProducto() {
    let btnEliminarProductos = document.querySelectorAll(".eliminarProducto")
    btnEliminarProductos.forEach(btn => {
        btn.onclick = (e) => {
            let itemEliminarId = e.currentTarget.id
            carrito = carrito.filter(el => (el.articulo.id != itemEliminarId))
            sessionStorage.removeItem("carrito")
            sessionStorage.setItem("carrito", JSON.stringify(carrito))
            htmlCarrito()
        }
    })
   
}

function cambiarCantidad(){
    let inputsCantidad = document.querySelectorAll(".cantidadPedida")
    inputsCantidad.forEach(e => {
        e.onchange = () => {
            let itemIdTxt = e.id
            let itemId = itemIdTxt.slice(-1)
            carrito.forEach(el => {
                if(el.articulo.id == itemId){
                    el.cantidad = e.value
                    sessionStorage.removeItem("carrito")
                    sessionStorage.setItem("carrito", JSON.stringify(carrito))
                }
            })
            htmlCarrito()
        }
    })

}

htmlCarrito()
