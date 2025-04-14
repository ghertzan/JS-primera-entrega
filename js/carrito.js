let carrito = []

function verCarrito(){
    let articulosCarrito = document.getElementById("articulosCarrito")
    let carritoStorage = localStorage.getItem("carrito")
    if(carritoStorage){
        carrito = JSON.parse(carritoStorage)
        carrito.forEach( (producto) => {
            let card = document.createElement("div")
            card.className = "card"
            card.innerHTML =`
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Sistema: ${producto.sistema}</p>
                    <p class="card-text">Stock: ${producto.stock}</p>
                    <p class="card-text">Precio: $ ${producto.precio}</p>
                    <input type="number" id="cantidad-${producto.id}"min = 0 max = ${producto.stock}></input>
                    <button class="btn btn-primary eliminarProducto" id=${producto.id}>Eliminar</button>
                </div>
            `
            articulosCarrito.appendChild(card)
        });
        eliminarProducto()
    }else{
        articulosCarrito.innerHTML = `<h2>Tu carrito está vacío</h2>`
        return
    }
}

function eliminarProducto(){
    let btnEliminarProductos = document.querySelectorAll(".eliminarProducto")
    btnEliminarProductos.forEach( btn => {
        btn.onclick = (e) => {
            let itemEliminarId = e.currentTarget.id
            carrito = carrito.filter(el => (el.id != itemEliminarId))
        }
    })
}

verCarrito()