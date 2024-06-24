let querySearchProducto = new URLSearchParams(location.search);
let category = querySearchProducto.get('categorias');
console.log(category);

fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let categoria = data;
        let contenedorCategory = document.querySelector('.contenedor-category');
        let productosCategory = '';

        for (let i = 0; i < categoria.length; i++) {
            productosCategory +=
                `<article class='contenedor-producto'>
                        <img src="${categoria[i].image}" alt="${categoria[i].title}" class="foto-producto">
                        <p class='textos-secciones' style='text-align: center; font-weight: bold;'>${categoria[i].title}</p>
                        <p class='texto-categoria-producto'><a href="./category.html?categorias=${categoria[i].category}" style='color: black;'>${categoria[i].category.toUpperCase()}</a></p>
                        <p class='textos-precio-producto'> $${categoria[i].price}</p>
                        <p class='texto-secciones'>${categoria[i].description}</p>
                        <a href="./product_detail.html?id=${categoria[i].id}" class="detalle-producto">Ver detalle</a>
                    </article>`;
        }
        contenedorCategory.innerHTML = productosCategory;



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