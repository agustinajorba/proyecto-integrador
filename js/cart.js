//Agregar al final para que funcione la barra de navegacion
let barraCategory = document.querySelector('.barra-category')
        barraCategory.innerHTML = `
        <p><a href="./category.html?categorias=jewelery">ACCESORIOS</a></p>
        <p><a href="./category.html?categorias=electronics">ELECTRÓNICA</a></p>
        <p><a href="./category.html?categorias=men's clothing">HOMBRE</a></p>
        <p><a href="./category.html?categorias=women's clothing">MUJER</a></p>`;

