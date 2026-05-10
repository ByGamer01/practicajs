/* Enunciado:
Crea un script que cumpla estos requisitos:

Tienes un array vacío llamado tareas al principio del script.
Cuando se haga clic en el botón "Añadir":

Lee lo que el usuario ha escrito en el input.
Si está vacío (sin escribir nada), no hagas nada.
Si tiene texto, añádelo al array tareas.
Vacía el input para que pueda escribir otra (input.value = "").
Llama a una función pintarTareas() que repinte la lista entera.


La función pintarTareas() debe:

Vaciar el <ul> (pista: ul.textContent = "" borra todo lo que hay dentro).
Recorrer el array tareas con un for.
Por cada tarea, crear un <li> con su texto y meterlo en el <ul>.
Actualizar el <p id="contador"> para que muestre "Tareas: X" donde X es el número de tareas.


Llama a pintarTareas() también al principio (después de declarar el array) para que la primera vez se pinte (aunque esté vacío al inicio).

Lo que NO pido (para no sobrecargar): no hace falta guardar en localStorage ni botón de borrar. Solo añadir y mostrar.
*/
/* 
var tareas = [];
pintarTareas();

var boton = document.getElementById("anadir");
var entrada = document.getElementById("nueva-tarea");

boton.addEventListener("click", function () {
    if (entrada.value !== "") {
        tareas.push(entrada.value);
        entrada.value = "";
        pintarTareas();
    }
});
function pintarTareas() {
    var ul = document.getElementById("tareas");
    ul.textContent = "";

    for (var i = 0; i < tareas.length; i++) {
        var documento = document.createElement("li");
        documento.textContent = tareas[i];
        ul.appendChild(documento);
    }

    var contador = document.getElementById("contador");
    contador.textContent = "Tareas: " + tareas.length;
}
*/
// ------------------------------------------
// Reto final, con localStorage, para que recuerde las tareas aunque se cambie de página o se cierre el navegador. No es obligatorio, pero es un buen ejercicio para practicar lo aprendido sobre localStorage.

var datos = localStorage.getItem("tareas");
var tareas;
if (datos !== null) {
    tareas = JSON.parse(datos); // leerlo: de string a array
} else {
    tareas = [];
}

pintarTareas();

var boton = document.getElementById("anadir");
var entrada = document.getElementById("nueva-tarea");

boton.addEventListener("click", function () {
    if (entrada.value !== "") {
        tareas.push(entrada.value);
        localStorage.setItem("tareas", JSON.stringify(tareas)); // guardarlo: de array a string
        entrada.value = "";
        pintarTareas();
    }
});
function pintarTareas() {
    var ul = document.getElementById("tareas");
    ul.textContent = "";

    for (var i = 0; i < tareas.length; i++) {
        var documento = document.createElement("li");
        documento.textContent = tareas[i];
        ul.appendChild(documento);
    }

    var contador = document.getElementById("contador");
    contador.textContent = "Tareas: " + tareas.length;
}