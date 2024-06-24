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
        <p class= 'textos-secciones' style='text-align :center; font-weight:bold;'>${data.title}</p>
        <p class= 'texto-categoria-producto'><a href="./category.html?id=${data.id}" style='color:black;'>${data.category.toUpperCase()}</a></p>
        <p class='textos-precio-producto'> $${data.price}</p>
        <p class= 'texto-secciones'>${data.description}</p>
        <a href="./cart.html?id=${data.id}" class= "boton-carrito-producto">Agregar al Carrito</a>
        </article>`;

        contenedor.innerHTML = productoHTML;

        let barraCategory = document.querySelector('.barra-category')
        barraCategory.innerHTML = `
        <p><a href="./category.html?categorias=jewelery">ACCESORIOS</a></p>
        <p><a href="./category.html?categorias=electronics">ELECTRÓNICA</a></p>
        <p><a href="./category.html?categorias=men's clothing">HOMBRE</a></p>
        <p><a href="./category.html?categorias=women's clothing">MUJER</a></p>`;
    })
    
    .catch(function (error) {
        console.log("El error es: " + error);
    })