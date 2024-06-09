fetch('https://fakestoreapi.com/products')
    .then(function (response) {
        return response.json();

    })
    .then(function (data) {
        console.log(data.results)
        let prueba = document.querySelector('.prueba')
        let productos = "";
        for (let i = 0; i < data.length; i++) {
            let producto = data[i];
            productos +=
                `
        <article>
        <img src="${producto.image}" alt="${producto.title}"></img>
        <p>${producto.title}</p>
        <p> $${producto.price}</p>
        </article>
        `;
        }
        prueba.innerHTML = productos;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    })


let botonAddToCart = document.querySelector('.boton-carrito');

botonAddToCart.addEventListener('click', function(){


})