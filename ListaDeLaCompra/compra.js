var cabecera = document.getElementById("nombre");
var boton = document.getElementById("cerrar");
var listaUL = document.getElementById("lista");
var usuario = sessionStorage.getItem("user");

if (usuario === null) {
    window.location.href = "login.html";
} else {
    cabecera.textContent = usuario;
};

boton.addEventListener("click", function () {
    sessionStorage.removeItem("user");
    window.location.href = "login.html";
});

// Lista de la compra

var compra = localStorage.getItem("compra");
var compras = [];

if (compra === null) {
    compras = [];
} else {
    compras = JSON.parse(compra);
}

pintarLista();           // ← solo aquí

function pintarLista() {
    listaUL.textContent = "";

    for (let i = 0; i < compras.length; i++) {
        var li = document.createElement("li");
        li.textContent = compras[i];



        var botonX = document.createElement("button");
        botonX.textContent = "X";
        botonX.addEventListener("click", function () {
            compras.splice(i, 1);
            localStorage.setItem("compra", JSON.stringify(compras));
            pintarLista();
        });

        li.appendChild(botonX);
        listaUL.appendChild(li)
    }
}

var botonAnadir = document.getElementById("anadir");
var producto = document.getElementById("producto");

botonAnadir.addEventListener("click", function () {
    if (producto.value !== "") {
        compras.push(producto.value);
        localStorage.setItem("compra", JSON.stringify(compras));
        producto.value = "";
        pintarLista();
    }
});
