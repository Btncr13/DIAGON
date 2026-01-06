// Seleccionamos los elementos que necesitamos
const botonAnadir = document.querySelector('.btn-anadir');
const contadorCarrito = document.getElementById('cart-count');
const inputCantidad = document.querySelector('.input-cantidad');

// Variable para guardar el número total de productos
let totalProductos = 0;

// Existe el botón en esta página? (Por si está en la Home donde no hay botón)
if (botonAnadir) {

    // Escuchamos el "Click"
    botonAnadir.addEventListener('click', () => {

        // Cogemos la cantidad que haya puesto el usuario
        const cantidad = parseInt(inputCantidad.value);

        // Suma al total
        totalProductos = totalProductos + cantidad;

        // Actualiza la burbujita roja
        contadorCarrito.innerText = totalProductos;
        contadorCarrito.classList.add('visible'); // Hacemos que se vea

        // Feedback visual
        alert("¡Genial! Has añadido " + cantidad + " producto(s) al carrito 🛒");
    });
}