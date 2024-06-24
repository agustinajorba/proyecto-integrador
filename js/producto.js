let ulCart = document.querySelector('.ul-cart'); 
let lista = [];


let querySearchProducto = new URLSearchParams(location.search);
let id = querySearchProducto.get('id');

fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);


        let productoHTML = `
            <article class='contenedor contenedor-producto'>
                <img src="${data.image}" alt="${data.title}" class="foto-producto">
                <p class='textos-secciones' style='text-align:center; font-weight:bold;'>${data.title}</p>
                <p class='texto-categoria-producto'><a href="./category.html?categorias=${data.category}" style='color:black;'>${data.category.toUpperCase()}</a></p>
                <p class='textos-precio-producto'>$${data.price}</p>
                <p class='texto-secciones'>${data.description}</p>
                <a href="#" class="boton-carrito-producto" data-id="${data.id}">Agregar al Carrito</a>
            </article>`;


        let contenedor = document.querySelector('.contenedor-producto');
        contenedor.innerHTML = productoHTML;


        let botonAgregarCarrito = document.querySelector('.boton-carrito-producto');
        botonAgregarCarrito.addEventListener('click', function (e) {
            e.preventDefault();
            let idProducto = botonAgregarCarrito.getAttribute('data-id');


            if (localStorage.getItem('miCart') !== null) {
                lista = JSON.parse(localStorage.getItem('miCart'));
            }


            if (!lista.includes(idProducto)) {
                lista.push(idProducto);
                localStorage.setItem('miCart', JSON.stringify(lista));
                alert('Producto agregado al carrito.');
                window.location.href = './cart.html'; 
            } else {
                alert('Este producto ya está en el carrito.');
            }
        });

    })
    .catch(error => {
        console.log("El error es: " + error);
    });