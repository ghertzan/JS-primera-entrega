//"Base de Datos"

const articulo1 = {
  id: 1,
  nombre: "Celkon A9",
  sistema: "Feature phone",
  precio: 433,
};
const articulo2 = {
  id: 2,
  nombre: "ZTE Grand X2",
  sistema: "Android 5.1",
  precio: 1286,
};
const articulo3 = {
  id: 3,
  nombre: "alcatel OT-980",
  sistema: "Android 2.1",
  precio: 1518,
};
const articulo4 = {
  id: 4,
  nombre: "Philips C700",
  sistema: "Feature phone",
  precio: 449,
};
const articulo5 = {
  id: 5,
  nombre: "Samsung Galaxy A20",
  sistema: "Android 9.0, up to Android 11, One UI 3.1",
  precio: 1514,
};
const articulo6 = {
  id: 6,
  nombre: "Micromax X40",
  sistema: "Feature phone",
  precio: 1413,
};
const articulo7 = {
  id: 7,
  nombre: "Motorola V50",
  sistema: "Feature phone",
  precio: 1522,
};
const articulo8 = {
  id: 8,
  nombre: "LG Watch W7",
  sistema: "Android Wear OS 2.0",
  precio: 875,
};
const articulo9 = {
  id: 9,
  nombre: "Samsung C3530",
  sistema: "Feature phone",
  precio: 385,
};
const articulo10 = {
  id: 10,
  nombre: "Huawei Fusion 2 U8665",
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

console.log("***SISTEMA VENTAS***");
console.log("***Bienvenido a la tienda de telefonía móvil***");
console.log("**Menú de opciones** \n\n\n");

let opcion = 0;
let carrito = [];
let total = 0;
do {
  console.log("1. Ver catálogo");
  console.log("2. Añadir artículo al carrito");
  console.log("3. Ver carrito");
  console.log("4. Eliminar artículo del carrito");
  console.log("5. Ver total de la compra");
  console.log("6. Salir");
  opcion = parseInt(prompt("Introduce el número de la opción que desees: "));
  switch (opcion) {
    case 1:
      verCatalogo();

      break;
    case 2:
      console.log("***Agregar artículo al carrito***");
      agregarAlCarrito();
      break;
    case 3:
      console.log("***Ver carrito***");
      console.log(verCarrito());
      break;
    case 4:
      console.log("***Eliminar artículo del carrito***");
      eliminarArticulo();
      break;
    case 5:
      console.log("***Ver total de la compra***");
      verTotal();
      break;
    case 6:
      console.log("***Salir***");
      finalizar();
      break;
    default:
      alert("Opción no válida, por favor, elige una opción válida.");
      console.clear();

      break;
  }
} while (opcion != 6);
console.log("Gracias por su visita, vuelva pronto!");

//Funciones
function verCatalogo() {
  console.log("***Catálogo de artículos***");
  for (const articulo of articulos) {
    console.log(
      `Cod: ${articulo.id}\n Nombre: ${articulo.nombre}\n Sistema: ${articulo.sistema}\n Precio: ${articulo.precio}`
    );
  }
}

function agregarAlCarrito() {
  let op = "";
  do {
    console.clear();
    verCatalogo();
    let cod = parseInt(
      prompt("Introduce el código del artículo que deseas agregar al carrito: ")
    );
    let articulo = articulos.find((articulo) => articulo.id === cod);
    if (articulo) {
      let cant = parseInt(prompt("Introduce la cantidad que deseas: "));
      if (cant > 0) {
        carrito.push({ item: articulo, cantidad: cant });
        alert("Artículo añadido al carrito.");
      } else {
        alert("Cantidad no válida.");
        alert("No se agregaron articulos al carrito.");
      }
    } else {
      alert("Código no válido.");
    }
    op = prompt("¿Queres agregar otro artículo? (s/n): ");
  } while (op != "n");
  console.clear();
}

function verCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    console.clear();
    return;
  }
  let salida = "";
  console.log("***Carrito de compras*** VISUALIZAR CARRITO");
  for (const elemento of carrito) {
    salida += "--------------------------------- \n";
    salida += ` Producto: ${elemento.item.nombre}\n 
                 Cantidad: ${elemento.cantidad}\n 
                 Precio: ${elemento.item.precio}\n 
                 Total: ${totalItem(elemento)}\n 
                 Cod: ${elemento.item.id}\n`;
  }
  return salida;
}

function eliminarArticulo() {
  console.clear();
  console.log("***Eliminar artículo del carrito***");
  verCarrito();
  let cod = parseInt(prompt("¿Que articulo deseas eliminar?"));
  let pedido = carrito.find((e) => e.item.id === cod);
  if (pedido) {
    alert(`Articulo encontrado: ${pedido.item.nombre}`);
    let cant = parseInt(
      prompt(
        `¿Cuantas unidades deseas eliminar?\n El pedido tiene actualmente ${pedido.cantidad} unidades`
      )
    );
    if (cant > 0 && cant <= pedido.cantidad) {
      pedido.cantidad = pedido.cantidad - cant;
      if (pedido.cantidad === 0) {
        carrito = carrito.filter((e) => e.item.id !== cod);
        alert("Articulo eliminado del carrito");
      } else {
        alert(
          `Se modificaron la unidades del articulo. Cantidad Actual: ${pedido.cantidad}`
        );
      }
    }
  }
}

function totalCarrito() {
  let total = 0;
  for (const elemento of carrito) {
    total += totalItem(elemento);
  }
  return total;
}

function totalItem(it) {
  return it.item.precio * it.cantidad;
}

function verTotal() {
  console.clear();
  console.log(`El total de la compra es: \$ ${totalCarrito()}`);
  console.log(`El detalle de tu compra: \n ${verCarrito()}`);
}

function finalizar() {
  if (carrito.length === 0) {
    alert("Carrito vacío");
  } else {
    console.clear();
    alert(
      `Gracias por tu compra el numero de tu pedido es: ${Math.getRandomInt(
        1236544987
      )}`
    );
  }
}
