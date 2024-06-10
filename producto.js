let botonVerMas = document.querySelector('.ver-mas')
botonVerMas.addEventListener("click", function(){
    fetch('https://fakestoreapi.com/products/1')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let detalle = data
    })
    
})