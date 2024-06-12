fetch('https://fakestoreapi.com/products')
    .then(function (response) {
        return response.json();

    })
    .then(function (data) {
        console.log(data);

        let contenedor = document.querySelector('.contenedor');
        let productos = [];
        for (let i = 0; i < data.length; i++) {
            let producto = data[i];
            productos +=
                `
        <article class='contenedor contenedor-producto '>
        <img src="${producto.image}" alt="${producto.title}" class= "foto-producto"></img>
        <p class= 'textos-secciones'>${producto.title}</p>
        <a href="./producto.html?id=${producto.id}" class='ver-mas textos-secciones'>Ver Más</a>
        <p class='textos-precios textos-secciones'> $${producto.price}</p>
        </article>
        `;
        }
        contenedor.innerHTML = productos;


    })

    .catch(function (error) {
        console.log("El error es: " + error);
    })
