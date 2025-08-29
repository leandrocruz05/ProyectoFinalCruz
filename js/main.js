const contenedorIndumentaria = document.getElementById('contenedor-indumentaria')
const carritoIcono = document.getElementById('carrito-icono')
const carritoContador = document.getElementById('carrito-contador')
const carritoPanel = document.getElementById('carrito-panel')
const carritoItems = document.getElementById('carrito-items')
const carritoTotal = document.getElementById('carrito-total')
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
                    <button data-id="${producto.id}">¡La quiero!</button>
                </div>
            </div> 
        `
    })
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
    const botonAgregar = document.querySelectorAll('.info-producto button')
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

// Terminar compra funciona como vaciar el carrito (hoy)
vaciarCarritoBtn.addEventListener('click', () => {
    carrito = []
    guardarCarrito()
    actualizarContador()
    MostrarCarrito()
    //alert('¡Gracias por tu compra!')
})

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