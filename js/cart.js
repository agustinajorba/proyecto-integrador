let querySearchProducto = new URLSearchParams(location.search);
let id = querySearchProducto.get('id');
//console.log(id);
let arrayCart = [];
let finalizarCompraButton = document.querySelector('.boton-comprar');
let contenedorCart = document.querySelector('.contenedor-cart');
let carrito = localStorage.getItem('cart');


if (carrito !== null) {
   arrayCart = JSON.parse(carrito);
}


if (arrayCart.length === 0) {
   contenedorCart.innerText = 'Su carrito está vacío';
   finalizarCompraButton.style.display = 'none';
   //tengo que borrar o no el boton de compra???
} else {
   let productosCarrito = '';


   for (let i = 0; i < arrayCart.length; i++) {
       fetch(`https://fakestoreapi.com/products/${arrayCart[i]}`)
           .then(function (response) {
               return response.json();
           })
           .then(function (data) {
               productosCarrito +=
                   ` <article class=' contenedor-producto '>
           <img src="${data.image}" alt="${data.title}" class= "foto-producto"></img>
       <p class= 'textos-secciones' style='text-align :center; font-weight:bold;'>${data.title}</p>
       <p class= 'texto-categoria-producto'><a href="./category.html?id=${data.id}" style='color:black;'>${data.category.toUpperCase()}</a></p>
       <p class='textos-precio-producto'> $${data.price}</p>
       </article>`;


               if (arrayCart.length === 0) {
                   contenedorCart.innerHTML = productosCarrito;
                   finalizarCompraButton.style.display = 'block';
               }
           })
           .catch(function (error) {
               console.log(error);
           });
   }
   finalizarCompraButton.addEventListener("click", function (e) {
       e.preventDefault();
       alert('¡Gracias por tu compra!');
       localStorage.removeItem("carrito") 
   })

   let barraCategory = document.querySelector('.barra-category')
   barraCategory.innerHTML = `
   <p><a href="./category.html?categorias=jewelery">ACCESORIOS</a></p>
   <p><a href="./category.html?categorias=electronics">ELECTRÓNICA</a></p>
   <p><a href="./category.html?categorias=men's clothing">HOMBRE</a></p>
   <p><a href="./category.html?categorias=women's clothing">MUJER</a></p>`;


}





