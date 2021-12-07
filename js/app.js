//Contenedor del carrito
const carrito = document.querySelector('#carrito')
//Contenedor de los cursos
const listaCursos = document.querySelector('#lista-cursos')
//Botón para vaciar el carrito
const vaciarCarrito = document.querySelector('#vaciar-carrito')
//Enlace para agregar al carrito
const agregarAlCarrito = document.querySelector('.agregar-carrito')
//Inserción html
const cursosEnCarrito = document.querySelector('tbody')

//Arreglo donde se guardaran los cursos del carrito
let cursosCarrito = []

//Se prepara para escuchar eventos
cargarEventosDelDOM()

function cargarEventosDelDOM() {
    //Se aplica delegation al contenedor lista de cursos
    listaCursos.addEventListener('click', agregar )
}

function agregar(e) {
    if (e.target.classList.contains('agregar-carrito')) {
        //Aplico traversing para ingresar a cada elemento que se requiere
        const tarjeta = e.target.parentElement.parentElement
        const imagen = tarjeta.childNodes[1].getAttribute('src')
        const nombre = tarjeta.childNodes[3].childNodes[1].textContent
        const precio = tarjeta.childNodes[3].childNodes[7].childNodes[1].textContent
        const cantidad = 1
        //Este objeto será el que se enviara al html para destructurar e incorporar
        const elementoEnCarrito = {
            imagen,
            nombre,
            precio,
            cantidad
        }
        mostrarEnCarrito(elementoEnCarrito)
    }
}

//Función de renderizado html
function mostrarEnCarrito(curso) {
    const {imagen, nombre, precio, cantidad} = curso
    //Plantilla html
    const HTML = `<tr>
    <td><img src="${imagen}" width = 90></td>
    <td>${nombre}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td><span class="borrar-curso">x</span></td>
    </tr>`
    cursosEnCarrito.innerHTML += HTML
}