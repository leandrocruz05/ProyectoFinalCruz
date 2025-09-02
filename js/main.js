const contenedorIndumentaria = document.getElementById('contenedor-indumentaria')
const carritoIcono = document.getElementById('carrito-icono')
const carritoContador = document.getElementById('carrito-contador')
const carritoPanel = document.getElementById('carrito-panel')
const carritoItems = document.getElementById('carrito-items')
const carritoTotal = document.getElementById('carrito-total')
const finalizarCompraBtn = document.getElementById('finalizar-compra')
const vaciarCarritoBtn = document.getElementById('vaciar-carrito')
const loaderIndumentaria = document.getElementById('loader-indumentaria')

// Inicializar carrito
let carrito = []
let indumentaria = []
let indumentariaOriginal = []

// Loader (cargando..)
const mostrarLoader = () => {
    loaderIndumentaria.style.display = 'block'
    contenedorIndumentaria.style.display = 'none'
}
const ocultarLoader = () => {
    loaderIndumentaria.style.display = 'none'
    contenedorIndumentaria.style.display = 'flex'
}

// Muestro los productos del array
const MostrarProductos = (productos = indumentaria) => {
    contenedorIndumentaria.innerHTML = ''
    productos.forEach((producto) => {
        const productoEnCarrito = carrito.find(item => item.id === producto.id)
        contenedorIndumentaria.innerHTML += `
            <div class="card-producto" id=${producto.id}>
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="info-producto">
                    <h2>${producto.nombre}</h2>
                    <p>${producto.descripcion}</p>
                    <span>$${producto.precio}</span>
                    <button class="btn-la-quiero" data-id="${producto.id}">¡La quiero!</button>
                </div>
            </div> 
        `
    })
    contenedorIndumentaria.style.display = 'flex'
    AgregarAlCarrito()
}

// Contador flotante carrito
const actualizarContador = () => {
    let totalCantidad = carrito.reduce((acc, el) => {
        return acc + el.cantidad
    }, 0)

    carritoContador.innerHTML = totalCantidad

    if (totalCantidad > 0) {
        carritoContador.classList.remove('oculto')
    } else {
        carritoContador.classList.add('oculto')
    }
}

//Guardo el carrito en LocalStorage
const guardarCarrito = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

// Cargar carrito desde LocalStorage
const cargarCarrito = () => {
    const carritoGuardado = localStorage.getItem('carrito')
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado)
    }
}

// Hago el calculo de productos en el carrito
const calculoTotal = () => {
    const total = carrito.reduce((acc, item) => {
        return acc + (item.precio * item.cantidad)
    }, 0)
    return total
}

// Muestro productos al carrito
const MostrarCarrito = () => {
    carritoItems.innerHTML = ''

    // Si esta vacio lo seteo desde aca
    if (carrito.length === 0) {
        carritoItems.innerHTML = '<p>El carrito está vacío</p>'
        carritoTotal.textContent = 'Total: $0'
        return
    }

    carrito.forEach((item) => {
        carritoItems.innerHTML += `
            <div class="carrito-modelo">
                <p>${item.nombre} x${item.cantidad}</p>
                <p>$${(item.precio * item.cantidad)}</p>
                <button class="eliminar-item" data-id="${item.id}">X</button>
            </div>
            `
    })

    carritoTotal.innerHTML = `<p class="total"> Total: $${calculoTotal()}</p>`
    EliminarDelCarrito()
}

// Agrego productos al carrito
const AgregarAlCarrito = () => {
    const botonAgregar = document.querySelectorAll('.btn-la-quiero')
    botonAgregar.forEach((boton) => {
        boton.addEventListener('click', (evento) => {
            let idProducto = parseInt(evento.target.closest('.card-producto').id)
            let producto = indumentaria.find(prod => prod.id === idProducto)

            // Verifico si el producto ya esta en el carrito
            const productoEnCarrito = carrito.find(item => item.id === idProducto)
            if (productoEnCarrito) {
                productoEnCarrito.cantidad++
            } else {
                carrito.push({ ...producto, cantidad: 1 })
            }
            guardarCarrito()
            actualizarContador()
            MostrarCarrito()
            Toastify({ // Agrego mensaje al comprar
                text: `🛒¡Se agrego ${producto.nombre} al carrito!`,
                duration: 2500,
                gravity: "top",
                position: "center",
                backgroundColor: "red",
                stopOnFocus: true
            }).showToast();
        })
    })
}

// Elimino productos del carrito
const EliminarDelCarrito = () => {
    const botonEliminar = document.querySelectorAll('.eliminar-item')
    botonEliminar.forEach((boton) => {
        boton.addEventListener('click', (evento) => {
            let idProducto = parseInt(evento.target.dataset.id)
            carrito = carrito.filter(item => item.id !== idProducto)
            guardarCarrito()
            actualizarContador()
            MostrarCarrito()
        })
    })
}

// Vaciar el carrito
vaciarCarritoBtn.addEventListener('click', () => {
    carrito = []
    guardarCarrito()
    actualizarContador()
    MostrarCarrito()
    MostrarProductos()
})

// Terminar compra
finalizarCompraBtn.addEventListener('click', () => {
    if (carrito.length === 0) {
        Swal.fire({
            title: 'Carrito vacío',
            text: 'Agrega productos antes de comprar.',
            icon: 'info'
        })
        return
    }
    let resumenCompra = carrito.map(item =>
        `${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}`
    )
    let totalCompra = calculoTotal()
    Swal.fire({
        title: 'Resumen de tu compra',
        html: `<div>
                    ${resumenCompra}
                </div>
                <br><hr><br>
                <strong>Total: $${totalCompra}</strong>
              `,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Confirmar compra',
        cancelButtonText: 'Cancelar'
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            formularioFinCompra()
        }
    })
})

// Formulario de compra
const formularioFinCompra = () => {
    swal.fire({
        title: 'Formulario de compra',
        html: `
            <form id="formulario-compra">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" required>

                <label for="number">Telefono:</label>
                <input type="tel" id="number" required>

                <label for="email">Email:</label>
                <input type="email" id="email" required>
            </form>
        `,
        confirmButtonText: 'Finalizar compra',
    }).then((result) => {
        if (result.isConfirmed) {
            try {
                // Obtener los valores del formulario
                const nombre = document.getElementById('nombre').value
                const telefono = document.getElementById('number').value
                const email = document.getElementById('email').value

                // Valido que los campos básicos no estén vacíos
                if (nombre && telefono && email) {
                    Swal.fire({
                        title: '¡Compra realizada!',
                        text: `Gracias ${nombre} por tu compra!`,
                        icon: 'success',
                        html: ` Te enviaremos un código de compra a: <strong>${email}</strong>
                                <br>
                                Ante cualquier inconveniente, nos contactaremos al <strong>${telefono}</strong>`,
                    })
                    // Vacío el carrito
                    carrito = []
                    guardarCarrito()
                    actualizarContador()
                    MostrarCarrito()
                    MostrarProductos()
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Por favor completa todos los campos.',
                        icon: 'error'
                    })
                }
            } catch (error) {
                Swal.fire({
                    title: 'Error inesperado',
                    text: 'Ocurrió un error al procesar el formulario. Intenta nuevamente.',
                    icon: 'error'
                })
            }
        }
    })
}

// Mostrar carrito
carritoIcono.addEventListener('click', () => {
    carritoPanel.classList.toggle('abre')
    actualizarContador()
    MostrarCarrito()
})

// Cierra el carrito desde el botón
const cerrarCarrito = () => {
    carritoPanel.classList.remove('abre');
}

// Si clickeo fuera del panel, se cierra
document.addEventListener('click', (evento) => {
    if (!carritoPanel.contains(evento.target) && !carritoIcono.contains(evento.target)) {
        carritoPanel.classList.remove('abre')
    }
})

// Renderizar productos al cargar DOM
document.addEventListener('DOMContentLoaded', () => {
    cargarCarrito()
    mostrarLoader()
    fetch('js/productos.json')
        .then(response => response.json())
        .then(data => {
            indumentaria = data
            indumentariaOriginal = data
            ocultarLoader()
            MostrarProductos()
            actualizarContador()
            MostrarCarrito()
        })
        .catch(() => {
            loaderIndumentaria.innerHTML = '' //<p>Error al cargar los productos</p>
        })
})