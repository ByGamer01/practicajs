var productos = [
    { id: 1, nombre: "MacBook Air M3", descripcion: "Portátil ultraligero con chip M3.", categoria: "Portátiles", precio: 1299.00 },
    { id: 2, nombre: "iPhone 15 Pro", descripcion: "Móvil con cámara avanzada y titanio.", categoria: "Móviles", precio: 1199.00 },
    { id: 3, nombre: "AirPods Pro", descripcion: "Auriculares con cancelación de ruido.", categoria: "Audio", precio: 279.00 },
    { id: 4, nombre: "Magic Mouse", descripcion: "Ratón inalámbrico recargable.", categoria: "Accesorios", precio: 89.00 },
    { id: 5, nombre: "Galaxy S24", descripcion: "Smartphone Samsung de gama alta.", categoria: "Móviles", precio: 899.00 },
    { id: 6, nombre: "Sony WH-1000XM5", descripcion: "Cascos premium con gran batería.", categoria: "Audio", precio: 399.00 }
];

// Referencias a elementos del HTML
var lista = document.getElementById("listado-productos");
var entradaNombre = document.getElementById("filtro-nombre");
var selectCategoria = document.getElementById("filtro-categoria");

// Pinta una lista de productos en pantalla.
// Recibe el array para poder pintarlo filtrado o entero.
function pintarLista(arrayProductos) {
    lista.textContent = ""; // 🧹 vaciamos antes de pintar (importante para filtros)

    if (arrayProductos.length === 0) {
        var aviso = document.createElement("p");
        aviso.className = "vacio";
        aviso.textContent = "No se han encontrado productos.";
        lista.appendChild(aviso);
        return;
    }

    for (let i = 0; i < arrayProductos.length; i++) {
        var p = arrayProductos[i]; // producto actual

        // 🟢 Creamos el article DENTRO del bucle (uno por producto)
        var articulo = document.createElement("article");
        articulo.className = "producto";

        var titulo = document.createElement("h3");
        titulo.textContent = p.nombre;
        articulo.appendChild(titulo);

        var badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = p.categoria;
        articulo.appendChild(badge);

        var desc = document.createElement("p");
        desc.textContent = p.descripcion;
        articulo.appendChild(desc);

        var precio = document.createElement("p");
        precio.className = "precio";
        precio.textContent = p.precio.toFixed(2) + " €";
        articulo.appendChild(precio);

        var boton = document.createElement("button");
        boton.textContent = "Añadir a favoritos";
        // (luego le ponemos el addEventListener para favoritos)



        articulo.appendChild(boton);

        lista.appendChild(articulo);
    }
}

// Pintamos la lista entera al cargar
pintarLista(productos);

function aplicarFiltros() {
    var textoBuscado = entradaNombre.value.toLowerCase();
    var categoriaElegida = selectCategoria.value;

    var filtrados = [];
    for (let i = 0; i < productos.length; i++) {
        var p = productos[i];

        // ¿coincide con el nombre? (si el input está vacío, pasa todo)
        var coincideNombre = p.nombre.toLowerCase().indexOf(textoBuscado) !== -1;

        // ¿coincide con la categoría? (si está "Todas", pasa todo)
        var coincideCategoria = (categoriaElegida === "" || p.categoria === categoriaElegida);

        if (coincideNombre && coincideCategoria) {
            filtrados.push(p);
        }
    }

    pintarLista(filtrados);
}

entradaNombre.addEventListener("input", aplicarFiltros);
selectCategoria.addEventListener("change", aplicarFiltros);

