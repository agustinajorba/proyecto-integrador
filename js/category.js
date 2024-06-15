let querySearchProducto = new URLSearchParams(location.search);
let id = querySearchProducto.get('id');
console.log(id);

fetch('https://fakestoreapi.com/products/category/${id}')
    .then(function (response) {
        return response.json();

    })
    .then(function (data) {
        console.log(data);
        let contenedorCategory = document.querySelector('.contenedor-category');
        let productosCategory = [];
        let subCategory = document.querySelector('.category');
        
        for (let i = 0; i < 12; i++) {
            let producto = data[i];
            Electronica +=
                `
        <article class='contenedor-category'>
        <img src="${producto.image}" alt="${producto.title}" class= "foto-producto"></img>
        <p class= 'textos-secciones'>${producto.title}</p>
        <a href="./producto.html?id=${producto.id}" class='ver-mas textos-secciones'>Ver Más</a>
        <p class='textos-precios textos-secciones'> $${producto.price}</p>
        </article>
        `;
        }
        contenedorCategory.innerHTML = productosCategory;

let barraCategory = document.querySelector('.barra category')
barraCategory.innerHTML = `<li><a href="./category.html?categories=${arrayCategorias.category="jewelery"}">Accesorios</a></li>
                          <li><a href="./category.html?categories=${arrayCategorias.category="electronics"}">Electronica</a></li>
                          <li><a href="./category.html?categories=${arrayCategorias.category="men's clothing"}">Ropa hombre</a></li>
                          <li><a href="./category.html?categories=${arrayCategorias.category="women's clothing"}">Ropa mujer</a></li>`
    })

    .catch(function (error) {
        console.log("El error es: " + error);
    })