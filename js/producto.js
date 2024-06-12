let querySearchProducto = new URLSearchParams(location.search);
let id = querySearchProducto.get('id');
console.log(id);

fetch(`https://fakestoreapi.com/products/${id}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let contenedor = document.querySelector('.contenedor-producto');


        let productoHTML =
            ` <article class='contenedor contenedor-producto '>
            <img src="${data.image}" alt="${data.title}" class= "foto-producto"></img>
        <p class= 'textos-secciones'>${data.title}</p>
        <p class= 'texto-categoria-producto'>${data.category}</p>
        <p class='textos-precio-producto'> $${data.price}</p>
        <p class= 'texto-secciones'>${data.description}</p>
        <a href="./cart.html?id=${data.id}" class= "boton-carrito-producto">Agregar al Carrito</a>

        </article>`;

        contenedor.innerHTML = productoHTML;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    })