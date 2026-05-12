/*🎯 Requisitos del JS
1. Datos
Crea un array productos con al menos 3 objetos: { id, nombre, precio }.
2. Login (form #form-login)

Evitar la recarga al enviar.
El usuario debe ser solo letras y números (regex).
La contraseña debe tener entre 6 y 12 caracteres, una mayúscula, una minúscula y un número.
Si hay error → mostrarlo en #error.
Si todo OK → guardar el usuario en sessionStorage y pintar "Hola, [usuario]" en #zona-usuario.

3. Mostrar usuario al cargar la página
Si ya hay usuario en sessionStorage (porque la página se recargó), pintar "Hola, X" directamente en #zona-usuario y no mostrar el formulario.
4. Pintar productos
Recorrer el array y pintar cada producto en #lista-productos con su nombre, precio y un botón "Añadir".
5. Añadir al carrito
Al pulsar "Añadir":

Coger el carrito de localStorage (si no existe, array vacío).
Meter el producto.
Volver a guardar en localStorage.
Actualizar el número de #contador.
Repintar #lista-carrito con los productos añadidos.

6. Vaciar cistella
Botón #btn-vaciar → borrar el carrito de localStorage, poner el contador a 0 y vaciar #lista-carrito.*/

var productos = [
    { id: 1, nombre: "Pan", precio: 1.5 },
    { id: 2, nombre: "Leche", precio: 1.2 }
];

var login = document.getElementById("form-login");
var usuario = document.getElementById("usuario");
var contraseña = document.getElementById("password");
var error = document.getElementById("error");
var zona = document.getElementById("zona-usuario");
var seccion = document.getElementById("seccion-login");

login.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!/^[a-zA-Z0-9]+$/.test(usuario.value)) {
        // Solo letras y numeros
        error.textContent = "Error: Solo el usuario solo puede contener letras y numeros.";
    } else if (contraseña.value.length < 6 || contraseña.value.length > 12) {
        error.textContent = "La contraseña debe de tener entre 6 y 12 caracteres.";
    } else if (!/[A-Z]/.test(contraseña.value)) {
        error.textContent = "La contraseña debe tener una mayuscula";
    } else if (!/[a-z]/.test(contraseña.value)) {
        error.textContent = "La contraseña debe tener una minuscula";
    } else if (!/[0-9]/.test(contraseña.value)) {
        error.textContent = "La contraseña debe tener un numero";
    } else {
        sessionStorage.setItem("usuario", usuario.value);
        zona.textContent = "Hola, " + usuario.value;
        seccion.hidden = true;
    }
});

if (sessionStorage.getItem("usuario") != null) {
    zona.textContent = "Hola, " + nombreGuardado;
    seccion.hidden = true;
}

function pintarLista() {
    var div = document.getElementById("lista-productos");

    for (let i = 0; i < productos.length; i++) {
        var ul = document.createElement("ul");
        ul.textContent = productos[i].nombre + " - " + productos[i].precio + "€";

        var boton = document.createElement("button");
        boton.textContent = "Añadir";

        ul.appendChild(boton);
        div.appendChild(ul);
    }
}

    boton.addEventListener("click", function () {
        var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(productos[i]);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        contador.textContent = carrito.length;
        pintarCarrito();
    });

function pintarCarrito() {
    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    var listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.textContent = "";
    for (let i = 0; i < carrito.length; i++) {
        var li = createElement("li");
        li.textContent = carrito[i].nombre + " - " + carrito[i].precio + "€";
        listaCarrito.appendChild(li);
    }
}

var vaciar = document.getElementById("btn-vaciar");
vaciar.addEventListener("click", function () {
    localStorage.removeItem("carrito");
    contador.textContent = "0";
    listaCarrito.textContent = "";
});
