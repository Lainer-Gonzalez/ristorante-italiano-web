const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnPasta = document.querySelector('.pasta');
const btnPizza = document.querySelector('.pizza');
const btnPostres = document.querySelector('.postres');
const contenedorPlatillos = document.querySelector('.platillos');
document.addEventListener('DOMContentLoaded', () => {
    eventos();
    platillos();
});

const eventos = () => {
    menu.addEventListener('click', abrirMenu);
}

// const abrirMenu = () =>  navegacion.classList.remove('ocultar');
const abrirMenu = () => {
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () => {
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if (document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //    navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);

    // console.log(btnCerrar);
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    });
});
// console.log(imagenes);
imagenes.forEach(imagen => {
    // imagen.src = imagen.dataset.src;
    observer.observe(imagen);
})

const cerrarMenu = (boton, overlay) => {
    boton.addEventListener('click', () => {
        // console.log('click...');
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function () {
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
}

const platillos = () => {
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');
    // console.log(platillo);
    platillos.forEach(platillo => platillosArreglo = [...platillosArreglo, platillo]);
    // console.log(platillosArreglo);
    const ensaladas = platillosArreglo.filter(ensalada => ensalada.getAttribute('data-platillo') === 'ensalada');
    // console.log(ensalada);
    const pastas = platillosArreglo.filter(pasta => pasta.getAttribute('data-platillo') === 'pasta');
    // console.log(pastas);
    const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute('data-platillo') === 'pizza');
    // console.log(pizzas);
    const postres = platillosArreglo.filter(postre => postre.getAttribute('data-platillo') === 'postre');
    // console.log(postres);

    mostrarPlatillos(ensaladas, pastas, pizzas, postres, platillosArreglo);
}

const mostrarPlatillos = (ensaladas, pastas, pizzas, postres, todos) => {
    btnEnsaladas.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada => contenedorPlatillos.appendChild(ensalada));
    });

    btnPasta.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        pastas.forEach(pasta => contenedorPlatillos.appendChild(pasta));
    });

    btnPizza.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza => contenedorPlatillos.appendChild(pizza));
    });

    btnPostres.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre => contenedorPlatillos.appendChild(postre));
    });
    btnTodos.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo => contenedorPlatillos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) => {
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}
