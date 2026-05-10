var formulario = document.getElementById("formulario");
var usuario = document.getElementById("usuario");
var pwd = document.getElementById("password");
var error = document.getElementById("error");
var bienvenida = document.getElementById("saludo");
var botonSalir = document.getElementById("salir");

if (sessionStorage.getItem("usuario") !== null) {
    bienvenida.textContent = "Bienvenido, " + sessionStorage.getItem("usuario");
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();   // evita que la página se recargue

    

    if (usuario.value === "") {
        error.textContent = "Falta el usuario";
        return;
    } else if (pwd.value.length < 6) {
        error.textContent = "Contraseña demasiado corta.";
        return;
    } else if (!/[A-Z]/.test(pwd.value)) {
        // si no hay mayuscula mnuestro error
        error.textContent = "Falta una mayúscula.";
        return;
    } else if (!/[0-9]/.test(pwd.value)) {
        error.textContent = "Falta un número.";
        return;
    }

    sessionStorage.setItem("usuario", usuario.value);

    bienvenida.textContent = "Bienvenido, " + usuario.value;
});

botonSalir.addEventListener("click", function () {
    sessionStorage.removeItem("usuario");

    bienvenida.textContent = "Bienvenido, invitado";
});