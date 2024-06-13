fetch('https://fakestoreapi.com/products')
    .then(function (response) {
        return response.json();

    })
    .then(function (data) {
        console.log(data);

        let contenedorAccecorios = document.querySelector('.contenedor');
        let Accesorios = [];
        for (let i = 4; i < 8; i++) {
            let producto = data[i];
            Accesorios +=
                `
        <article class='contenedor contenedor-producto '>
        <img src="${producto.image}" alt="${producto.title}" class= "foto-producto"></img>
        <p class= 'textos-secciones'>${producto.title}</p>
        <a href="./producto.html?id=${producto.id}" class='ver-mas textos-secciones'>Ver Más</a>
        <p class='textos-precios textos-secciones'> $${producto.price}</p>
        </article>
        `;
        }
        contenedorAccecorios.innerHTML = Accesorios;

        let contenedorElectronica = document.querySelector('.contenedor-2')
        let Electronica = [];
        for (let i = 8; i < 12; i++) {
            let producto = data[i];
            Electronica +=
                `
        <article class='contenedor contenedor-producto'>
        <img src="${producto.image}" alt="${producto.title}" class= "foto-producto"></img>
        <p class= 'textos-secciones'>${producto.title}</p>
        <a href="./producto.html?id=${producto.id}" class='ver-mas textos-secciones'>Ver Más</a>
        <p class='textos-precios textos-secciones'> $${producto.price}</p>
        </article>
        `;
        }
        contenedorElectronica.innerHTML = Electronica;



    })

    .catch(function (error) {
        console.log("El error es: " + error);
    })
