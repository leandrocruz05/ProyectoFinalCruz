// Defino los productos
const indumentaria = [
    {
        id: 1,
        nombre: 'Camiseta titular',
        descripcion: '',
        precio: 70000,
        imagen: 'https://scontent.feze10-1.fna.fbcdn.net/v/t39.30808-6/526953639_1161706842657219_9024885114500291040_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGjnzrsXVcaza3gQWMdhCKV9q_4kZ8V2Zj2r_iRnxXZmExAVDKUyNJ1p3lhu_DNf6mGwNDnP_aC6QKGnS8-ayQ3&_nc_ohc=Kq4rNruJQPIQ7kNvwEc1cm_&_nc_oc=AdkKm-ECACAkTlP2PD2JmcAMU4wQrxlkrUSzimw9t9cn3EtJxJKfT7r4VeJyJ7Z9V7t8pytE5G7o-bTj5KNO22QV&_nc_zt=23&_nc_ht=scontent.feze10-1.fna&_nc_gid=THCzZR01rs9vXAEBf63h_w&oh=00_AfV_RujIQMisc4La4hr831ck5r_FcojsWNxxqqge4tedrA&oe=689E0696',
    },
    {
        id: 2,
        nombre: 'Camiseta LAtidos',
        descripcion: '',
        precio: 70000,
        imagen: 'https://scontent.feze10-1.fna.fbcdn.net/v/t39.30808-6/519666854_1150246443803259_2060709860945923974_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEZNb0rOQby2bGDqzYOXNNART1NYbT4YZRFPU1htPhhlJ9BhGM40ktKbu7gJbBjzZkdJMXJWgR3vfAgGxKYRXw0&_nc_ohc=FmQVjvfjSUUQ7kNvwGuFpFr&_nc_oc=Adki-ISIcdfVpMjkDeSqCE92IOr8QB774GmKuSFlWLqIfQuLTbLYqGA74k3M1CMS8dpYwCBJ2lsVNeCgPVTa8lGF&_nc_zt=23&_nc_ht=scontent.feze10-1.fna&_nc_gid=-ascb_lv5rP-f57TMj-3uQ&oh=00_AfUHFFrsavtTObz2aL_1hz46wEzERtk8aM3xjfk7oDXnMg&oe=689DF280',
    },
    {
        id: 3,
        nombre: 'Camiseta Alternativa II',
        descripcion: '',
        precio: 65000,
        imagen: 'https://scontent.feze10-1.fna.fbcdn.net/v/t39.30808-6/503421355_1111772107650693_8826242905283330112_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFhvze0Pz5qOG4c-tPf4vds6gd5Tqol8YzqB3lOqiXxjCktvE0MI5mLqCo4wRVbl1ycalrK6lDvFha3u-GN92lO&_nc_ohc=gNjY-FDWYn4Q7kNvwEEiqWm&_nc_oc=AdltLCIlfD8MvZkcIw7M_CjrShXnNewls45MA8HeglIHHmz22eTTh3wQsMPTzGlj4rOh3w5euJ2F4OmxXdikJXr5&_nc_zt=23&_nc_ht=scontent.feze10-1.fna&_nc_gid=iPRbfBCh9-w8A-natKbe7g&oh=00_AfXut4xCtQ0sKHoHZNdYN6VIn4KYEClH-NDm7RiMNk9JSw&oe=689E04B6',
    },
    {
        id: 4,
        nombre: 'Camiseta Pura Sangre',
        descripcion: '',
        precio: 54000,
        imagen: 'https://scontent.feze10-1.fna.fbcdn.net/v/t39.30808-6/484869944_1051377850356786_848457372542093431_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEsUmHyNvyxZNb15XOf9hsWeCY95N6FsCF4Jj3k3oWwIby3ykdo3z5nWc-zo2LTjlJbY_-pU-zI6J4ycT7ST5VY&_nc_ohc=G3FIGErH8PcQ7kNvwFILLbt&_nc_oc=AdmJqHrP_RXXfsncly0LdxDiAQV_F4enAfbCbVZWV2gZn3GeILILW3qo8neVSG1kXsta8ww4Cv0hZCcBe_IeYWIz&_nc_zt=23&_nc_ht=scontent.feze10-1.fna&_nc_gid=f17qm2mfMrBATS2XQcQFOQ&oh=00_AfXM1PkDc6-brnpbtlngz4f3uBFhtUJo4_9QMTiEO2n56w&oe=689DEBDC',
    },
    {
        id: 5,
        nombre: 'Buzo Canguro c/ friza',
        descripcion: '',
        precio: 59000,
        imagen: 'https://scontent.feze10-1.fna.fbcdn.net/v/t39.30808-6/528238664_1161626465998590_2916936599237299466_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeExKO2Dnl3r4dsMrvh8kVQ7MrrqHzRG14IyuuofNEbXgvM2FJnSM52jwURKUyYFGvOBirYg8FiHq0zow1Y-79BC&_nc_ohc=SMZhqZ8OuKIQ7kNvwG0ctq_&_nc_oc=AdlKUEn2-WYowua_5DB11dtAEZs6VARYgDyDCWNtok27CjVmJEmr5Iu6NHEqP_cIY3Zu34Gy82KpXAccRRKiXp0P&_nc_zt=23&_nc_ht=scontent.feze10-1.fna&_nc_gid=6LXJbQKxbvN-JAkziB9INQ&oh=00_AfVws_7OK95M1s_OfZZyd4GouKF8E-NbS96Sp0zfQ6Nxuw&oe=689F1192',
    },
    {
        id: 6,
        nombre: 'Buzo Condór II Azul',
        descripcion: '',
        precio: 59000,
        imagen: 'https://scontent.feze10-1.fna.fbcdn.net/v/t39.30808-6/528048736_1161641615997075_3043037777733875094_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGdQAFecME650PzYHFG7DW-UuzR1ykA2MpS7NHXKQDYyrNrRsNWhywr4YdMdrfm1RJNO-PzQsvGEEZVns13idGh&_nc_ohc=BX3flPNHEakQ7kNvwHxtQTC&_nc_oc=AdmzdKWJeyQhWNcRHgfEtqKVtHA4PQOvwfV0mPHBIQxJ_OEuHy4NnHoDUwP_Vi-QLx8yp5icfnm7b3A0IuoA83rw&_nc_zt=23&_nc_ht=scontent.feze10-1.fna&_nc_gid=NQeQA0WehXGt3n7OUp6uMw&oh=00_AfVK-ZLa4rMBeT_sic2tYleitnYS161hUwKbmjQrqQhTCg&oe=689EFAFE',
    },
    {
        id: 7,
        nombre: 'Buzo Condor II Rojo',
        descripcion: '',
        precio: 59000,
        imagen: 'https://scontent.feze10-1.fna.fbcdn.net/v/t39.30808-6/515753081_1139340551560515_778446875678609614_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF0Er-5XofwE_kr9QHcpVbIsgeeVtSUr-myB55W1JSv6TQRTkwmMiP94WqFYP5jCRpjTz0VJMkM09bWbSRVJClM&_nc_ohc=8pg0IxA98U4Q7kNvwG_78HO&_nc_oc=Adk_-pcshfwrX3g-EmUL22tJCvTo_2_hrYcQ55Jtas75ofNn7Cpyh1jcS4hbw2fHpwAZY2z5panUsOafTzizOYx6&_nc_zt=23&_nc_ht=scontent.feze10-1.fna&_nc_gid=qNdbRjfKpMcnk3Q6DvGs8g&oh=00_AfUDGRF0kth0yPVU9Md-HdtfFqi7EQnQhoSUsjIDkJZJHw&oe=689EF8DC',
    },
    {
        id: 8,
        nombre: 'Camperon impermeable',
        descripcion: '',
        precio: 145000,
        imagen: 'https://scontent.feze10-1.fna.fbcdn.net/v/t39.30808-6/516899040_1139338681560702_7080762761174326570_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGcxcbw6WzeNs2-oPKior0LFoHhGU4tYPcWgeEZTi1g9yUsX-a4O6GfygZsJlrdDG1ICKmPjhR7KnrEBxDiqO3p&_nc_ohc=wXwTremxyi8Q7kNvwHUFZkh&_nc_oc=AdmK8AdMwWpjHJUTmxWklRb04mmGgT1BaTRH2B5MtesCoSsHELllyIe4mQHBpfnjpv0FgS78wVjhuBncprNFgmiX&_nc_zt=23&_nc_ht=scontent.feze10-1.fna&_nc_gid=k7H768CZRRnKZ9-4Mm25sw&oh=00_AfUOpcfBIpbqT9ZYzloD_gek6dzz2d56OunRc1JPzNZ93A&oe=689EFE88',
    },
]

const contenedorIndumentaria = document.getElementById('contenedor-indumentaria')
const carritoIcono = document.getElementById('carrito-icono')
const carritoContador = document.getElementById('carrito-contador')
const carritoPanel = document.getElementById('carrito-panel')
const carritoItems = document.getElementById('carrito-items')
const carritoTotal = document.getElementById('carrito-total')
const vaciarCarritoBtn = document.getElementById('vaciar-carrito')

// Inicializar carrito
let carrito = []

// Muestro los productos del array
const MostrarProductos = () => {
    contenedorIndumentaria.innerHTML = ''
    indumentaria.forEach((producto) => {
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
    MostrarProductos()
    actualizarContador()
    MostrarCarrito()
    AgregarAlCarrito()
})

