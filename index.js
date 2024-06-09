fetch('https://fakestoreapi.com/products')
    .then(function(response) {
        return response.json();
        
    })
    .then(function(data){
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            document.querySelector('.articulos-home').innerHTML + Image
            
        }


    })
    .catch(function(error){
        console.log("El error es: " + error);
    })
