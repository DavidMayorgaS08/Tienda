let articulos = [
    {
        id: 1,
        img1: './img/zapato1.jpg',
        img2: './img/zapato1_2.jpg',
        nombre: 'Tenis Advantage',
        tipo: 'Sportswear',
        precio: 236,
    },
    {
        id: 2,
        img1: './img/zapato2.jpg',
        img2: './img/zapato2_2.jpg',
        nombre: 'Tenis Duramo SL',
        tipo: 'Running',
        precio: 276,
    },
    {
        id: 3,
        img1: './img/zapato3.jpg',
        img2: './img/zapato3_2.jpg',
        nombre: 'Tenis Bravada',
        tipo: 'Sportswear',
        precio: 252,
    },
    {
        id: 4,
        img1: './img/zapato4.jpg',
        img2: './img/zapato4_2.jpg',
        nombre: 'Tenis Duramo SL',
        tipo: 'Terrex',
        precio: 284,
    },
    {
        id: 5,
        img1: './img/zapato5.jpg',
        img2: './img/zapato5_2.jpg',
        nombre: 'Tenis Run Falcon',
        tipo: 'Running',
        precio: 205,
    },
    {
        id: 6,
        img1: './img/zapato6.jpg',
        img2: './img/zapato6_2.jpg',
        nombre: 'Tenis Duramo SL 2.0',
        tipo: 'Running',
        precio: 260,
    },
    {
        id: 7,
        img1: './img/zapato7.jpg',
        img2: './img/zapato7_2.jpg',
        nombre: 'Tenis EQ21 Run',
        tipo: 'Running',
        precio: 355,
    },
    {
        id: 8,
        img1: './img/zapato8.jpg',
        img2: './img/zapato8_2.jpg',
        nombre: 'NY 90',
        tipo: 'Originals',
        precio: 315,
    },
    {
        id: 9,
        img1: './img/zapato9.jpg',
        img2: './img/zapato9_2.jpg',
        nombre: 'USA 84',
        tipo: 'Originals',
        precio: 331,
    },
    {
        id: 10,
        img1: './img/zapato10.jpg',
        img2: './img/zapato10_2.jpg',
        nombre: 'Tenis Duramo SL',
        tipo: 'Running',
        precio: 349,
    },
    {
        id: 11,
        img1: './img/zapato11.jpg',
        img2: './img/zapato11_2.jpg',
        nombre: 'X CRAZYFAST.3 LL FG',
        tipo: 'Fútbol',
        precio: 418,
    },
    {
        id: 12,
        img1: './img/zapato12.jpg',
        img2: './img/zapato12_2.jpg',
        nombre: 'Tenis Coreracer',
        tipo: 'Sportswear',
        precio: 229,
    }
];

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    pintarProductos();
});

function pintarProductos() {
    let contCards = document.getElementById('cont_cards');

    articulos.forEach(articulo => {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <img class="img_i" src="${articulo.img1}" alt="">
        <img class="img_hover" src="${articulo.img2}" alt="">
        <div class="cont_text_card">
            <div class="cont_nombre">
                <h3 class="text_nombre">${articulo.nombre}</h3>
            </div>
            <div class="cont_tipo">
                <p class="text_tipo">${articulo.tipo}</p>
            </div>
            <div class="cont_precio">
                <p class="text_precio">$${articulo.precio}</p>
            </div>
            <div class="cont_boton">
                <button class="btn">Agregar al carrito</button>
            </div>
        </div>
    `
        let botonAgregar = card.querySelector('.btn');
        botonAgregar.addEventListener('click', () => {
            agregarAlCarrito(articulo.id);
        });

        contCards.appendChild(card);
    });
}

let totalCarrito = 0;

function agregarAlCarrito(id) {
    const productoSeleccionado = articulos.find(producto => producto.id === id);
    const productoEnCarrito = carrito.find(item => item.producto.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ producto: productoSeleccionado, cantidad: 1 });
    }

    mostrarCarritoEnTabla();
}

// function mostrarCarritoEnTabla() {
//     const totalCarritoElement = document.getElementById('total-carrito');
//     const carritoTabla = document.getElementById('carrito-tabla');
//     carritoTabla.innerHTML = '';

//     carrito.forEach(item => {
//         const producto = item.producto;
//         const cantidad = item.cantidad;
//         const subtotal = producto.precio * cantidad;

//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td class="tg-objetos"><img class="img_carrito" src="${producto.img1}" alt=""></td>
//             <td class="tg-objetos">${producto.nombre}</td>
//             <td class="tg-objetos">$${producto.precio}</td>
//             <td class="tg-objetos">${cantidad}</td>
//             <td class="tg-objetos">$${subtotal}</td>
//             <td class="tg-objetos"><i class="fa-solid fa-xmark" onclick="eliminarProducto(${producto.id})"></i></td>
//         `;
//         carritoTabla.appendChild(row);

//         const totalCarrito = carrito.reduce((total, item) => {
//             return total + (item.producto.precio * item.cantidad);
//         }, 0);

//         totalCarritoElement.innerHTML = `Total del carrito: $${totalCarrito}`;
//     });
// }

function mostrarCarritoEnTabla() {
    const totalCarritoElement = document.getElementById('total-carrito');
    const carritoTabla = document.getElementById('carrito-tabla');
    carritoTabla.innerHTML = '';

    let totalCarrito = 0; // Inicializar el total del carrito en 0 cada vez que se muestra el carrito

    carrito.forEach(item => {
        const producto = item.producto;
        const cantidad = item.cantidad;
        const subtotal = producto.precio * cantidad;

        totalCarrito += subtotal; // Sumar el subtotal al total del carrito

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="tg-objetos"><img class="img_carrito" src="${producto.img1}" alt=""></td>
            <td class="tg-objetos">${producto.nombre}</td>
            <td class="tg-objetos">$${producto.precio}</td>
            <td class="tg-objetos">${cantidad}</td>
            <td class="tg-objetos">$${subtotal}</td>
            <td class="tg-objetos"><i class="fa-solid fa-xmark" onclick="eliminarProducto(${producto.id})"></i></td>
        `;
        carritoTabla.appendChild(row);
    });

    totalCarritoElement.innerHTML = `Total del carrito: $${totalCarrito}`;
}


function eliminarProducto(id) {
    carrito = carrito.filter(item => item.producto.id !== id);
    mostrarCarritoEnTabla();
}

function vaciarCarrito() {
    carrito = [];
    mostrarCarritoEnTabla();
}


function IniciarCarrito() {
    const carrito = document.getElementById('body1');
    const productos = document.getElementById('body2');
    let texto = document.querySelector('.text_listado');

    carrito.style.display = "flex";
    productos.style.display = "none";
    texto.textContent = "Carrito de compras";
}

function FinCarrito() {
    const carrito = document.getElementById('body1');
    const productos = document.getElementById('body2');
    let texto = document.querySelector('.text_listado');

    carrito.style.display = "none";
    productos.style.display = "grid";
    texto.textContent = "Lista de productos";
}