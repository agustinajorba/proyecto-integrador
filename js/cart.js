let querySearch = new URLSearchParams(location.search);
let id = querySearch.get('id');
let ulCart = document.querySelector('.ul-cart');
let contenedorCart = document.querySelector('.contenedor-cart');
let lista = [];
let finalizarCompraButton = document.querySelector('.boton-comprar');

if (lista.length === 0) {
    contenedorCart.innerText = 'Su carrito está vacío';
        finalizarCompraButton.style.display = 'none';
}

if (localStorage.getItem('miCart') !== null) {
    let recuperoCart = localStorage.getItem("miCart");
lista = JSON.parse(recuperoCart);
}


if (id !== null && !lista.includes(id)) {
    lista.push(id);

}
    localStorage.setItem('miCart', JSON.stringify(lista));
    let cart = '';
    for (let i = 0; i < lista.length; i++) {
        fetch(`https://fakestoreapi.com/products/${lista[i]}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                cart += `<article class='contenedor contenedor-producto '>
                <img src="${data.image}" alt="${data.title}" class= "foto-producto"></img>
            <p class= 'textos-secciones' style='text-align :center; font-weight:bold;'>${data.title}</p>
            <p class= 'texto-categoria-producto'><a href="./category.html?categorias=${data.category}"" style='color:black;'>${data.category.toUpperCase()}</a></p>
            <p class='textos-precio-producto'> $${data.price}</p>
            </article>`;
                ulCart.innerHTML = cart;
                finalizarCompraButton.addEventListener("click",function (e) {
                    e.preventDefault();
                        alert('¡Gracias por tu compra!');
                        window.location = "index.html"; 
                        localStorage.removeItem("cart");
                })
            
            })
            .catch(function (error) {
                console.log(error);
            })
    
    }