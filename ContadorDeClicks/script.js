/*<p id="cuenta">0</p>
<button id="sumar">+1</button> 
<button id="reset">Reset</button>*/

var contador = document.getElementById("cuenta");
var boton = document.getElementById("sumar");
var reiniciar = document.getElementById("reset");
var i = 0;

boton.addEventListener("click", function () {
    i = i + 1;
    contador.textContent = i;
});

reiniciar.addEventListener("click", function () {
    i = 0;
    contador.textContent = 0;
});