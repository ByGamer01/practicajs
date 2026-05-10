// document.getElementById("titulo").textContent  = "Adios";
/* document.getElementById("boton").addEventListener("click", function() {
    document.getElementById("titulo").textContent = "Holaaaaa";
});
document.getElementById("boton2").addEventListener("click", function() {
    document.getElementById("titulo").textContent = document.getElementById("entrada").value;
});*/

/*var frutas = ["Manzana", "Plátano", "Naranja", "Uvas"];
var lista = document.getElementById("lista");
for (var i = 0; i < frutas.length; i++) {
    var elemento = document.createElement("li");
    elemento.textContent = frutas[i]; // les damos su respectivo valor a cada elemento un li
    lista.appendChild(elemento); // metemos los li dentro del ul
}*/

/* var productos = [
    { nombre: "Manzana", precio: 1.20 },
    { nombre: "Plátano", precio: 0.80 },
    { nombre: "Naranja", precio: 1.50 }
];

var lista = document.getElementById("lista");

for (var i = 0; i < productos.length; i++) {
    var elemento = document.createElement("li");
    elemento.textContent = productos[i].nombre + " - " + productos[i].precio + "€";
    lista.appendChild(elemento);
}*/

/* var productos = [
    { nombre: "Manzana", precio: 1.20 },
    { nombre: "Plátano", precio: 0.80 },
    { nombre: "Naranja", precio: 1.50 }
];

var lista = document.getElementById("lista");
var mensaje = document.getElementById("mensaje");

for (let i = 0; i < productos.length; i++) {
    let p = productos[i];

    // 1. Crear el <li> con el texto del producto
    var elemento = document.createElement("li");
    elemento.textContent = p.nombre + " - " + p.precio + "€ ";

    // 2. Crear un <button> y ponerle texto "Comprar"
    var boton = document.createElement("button");
    boton.textContent = "Comprar";

    // 3. Cuando se haga clic en ESE botón, cambiar el mensaje
    boton.addEventListener("click", function() {
        mensaje.textContent = "Has comprado: " + p.nombre;
    });

    // 4. Meter el botón DENTRO del <li>
    elemento.appendChild(boton);

    // 5. Meter el <li> dentro de la <ul>
    lista.appendChild(elemento);
}
*/


/*
// Guardar datos en el localStorage (navegador)
localStorage.setItem("clave", "valor");      // guardar
var x = localStorage.getItem("clave");       // leer (devuelve string o null)
localStorage.removeItem("clave");            // borrar uno
localStorage.clear();                        // borrar todo

var boton = document.getElementById("guardar");
boton.addEventListener("click", function() {
    var entrada = document.getElementById("entrada");
    localStorage.setItem("nombre", entrada.value);
});
var boton2 = document.getElementById("borrar");
boton2.addEventListener("click", function() {
    localStorage.removeItem("nombre");
});
*/

// Que al cambviar la pagina, recuerde el nombre
var nombreGuardado = localStorage.getItem("nombre");

if (nombreGuardado !== null) {
    document.getElementById("saludo").textContent = "Hola, " + nombreGuardado;
}

var boton = document.getElementById("guardar");
boton.addEventListener("click", function () {
    var entrada = document.getElementById("entrada");
    localStorage.setItem("nombre", entrada.value);
    document.getElementById("saludo").textContent = "Hola, " + entrada.value;

});
var boton2 = document.getElementById("borrar");
boton2.addEventListener("click", function () {
    localStorage.removeItem("nombre");
    document.getElementById("saludo").textContent = "Hola, desconocido";

});