// ==========================
// ANIMACIONES AL HACER SCROLL
// ==========================
const elementos = document.querySelectorAll(".animacion");

window.addEventListener("scroll", () => {
    elementos.forEach(el => {
        const posicion = el.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {
            el.classList.add("activo");
        }
    });
});


// ==========================
// CARRITO DE COMPRAS
// ==========================
const productos = document.querySelectorAll(".producto");
const contadorHtml = document.getElementById("contador-carrito");

let total = 0;

function actualizarContador() {
    if (contadorHtml) {
        contadorHtml.textContent = total;
    }
}

productos.forEach(prod => {

    const btnAgregar = prod.querySelector(".agregar-carrito");
    const panel = prod.querySelector(".contador-cantidad");
    const btnRestar = prod.querySelector(".restar");
    const btnSumar = prod.querySelector(".sumar");
    const cantidadHtml = prod.querySelector(".cantidad");

    let cantidad = 0;

    btnAgregar.addEventListener("click", () => {
        panel.classList.remove("oculto");

        cantidad = 1;
        cantidadHtml.textContent = cantidad;

        total++;
        actualizarContador();

        btnAgregar.disabled = true;
    });

    btnSumar.addEventListener("click", () => {
        cantidad++;
        cantidadHtml.textContent = cantidad;

        total++;
        actualizarContador();
    });

    btnRestar.addEventListener("click", () => {

        if (cantidad > 0) {
            cantidad--;
            cantidadHtml.textContent = cantidad;

            total--;
            actualizarContador();
        }

        if (cantidad === 0) {
            panel.classList.add("oculto");
            btnAgregar.disabled = false;
        }
    });

});


// ==========================
// BOTÓN VACIAR CARRITO 
// ==========================
const btnVaciar = document.getElementById("vaciar-carrito");

if (btnVaciar) {
    btnVaciar.addEventListener("click", () => {

        total = 0;
        actualizarContador();

        // 🔥 RESETEAR TODOS LOS PRODUCTOS VISUALMENTE
        productos.forEach(prod => {
            const panel = prod.querySelector(".contador-cantidad");
            const cantidadHtml = prod.querySelector(".cantidad");
            const btnAgregar = prod.querySelector(".agregar-carrito");

            panel.classList.add("oculto");
            cantidadHtml.textContent = 0;
            btnAgregar.disabled = false;
        });

        alert("Carrito vaciado 🛒");
    });
}


// ==========================
// VALIDACIÓN FORMULARIO
// ==========================
const formulario = document.getElementById("formulario");

if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || correo === "" || mensaje === "") {
            alert("Por favor completa todos los campos.");
            return;
        }

        if (!correo.includes("@") || !correo.includes(".")) {
            alert("Ingresa un correo válido.");
            return;
        }

        alert("Mensaje enviado correctamente ✅");
        formulario.reset();
    });
}
