let ulCart = document.querySelector('.ul-cart'); 
let contenedorCart = document.querySelector('.contenedor-cart'); 
let lista = [];


if (localStorage.getItem('miCart') !== null) {
    let recuperoCart = localStorage.getItem("miCart");
    lista = JSON.parse(recuperoCart);
}


if (lista.length === 0) {
    contenedorCart.innerText = 'Su carrito está vacío';
    finalizarCompraButton.style.display= 'none';
} else {
    let cart = '';

    lista.forEach(id => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                cart += `<article class='contenedor contenedor-producto'>
                            <img src="${data.image}" alt="${data.title}" class= "foto-producto">
                            <p class= 'textos-secciones' style='text-align :center; font-weight:bold;'>${data.title}</p>
                            <p class= 'texto-categoria-producto'><a href="./category.html?categorias=${data.category}" style='color:black;'>${data.category.toUpperCase()}</a></p>
                            <p class='textos-precio-producto'> $${data.price}</p>
                        </article>`;
                ulCart.innerHTML = cart;
            })
            .catch(error => {
                console.log('Error al obtener producto:' + error);
            });
    });
}


let finalizarCompraButton = document.querySelector('.boton-comprar');
finalizarCompraButton.addEventListener("click", function (e) {
    e.preventDefault();
    alert('¡Gracias por tu compra!');
    window.location = "index.html"; 
    localStorage.removeItem("miCart"); 
});
