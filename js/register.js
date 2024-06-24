let formRegister = document.querySelector(".form-register");

let emailRegister = document.querySelector("#mail-register");
let contraRegister = document.querySelector("#contra-register");
let contraRepRegister = document.querySelector("#re-contra-register");

let errorMailRegister = document.querySelector(".error-mail-register");
let errorContraRegister = document.querySelector(".error-contra-register");
let errorContraRepRegister = document.querySelector(".error-contraRep-register");

formRegister.addEventListener("submit", function(e){
    e.preventDefault();

    errorMailRegister.innerText= "";
    errorContraRegister.innerText="";
    errorContraRepRegister.innerText="";

    if(emailRegister.value === ""){
        errorMailRegister.innerText = "Por favor complete el campo";
        errorMailRegister.style.display= "block";
        errorMailRegister.style.color= "red";
        errorMailRegister.style.fontSize= "12px";
    }
    if(contraRegister.value === ""){
        errorContraRegister.innerText = "Por favor complete el campo";
        errorContraRegister.style.display= "block";
        errorContraRegister.style.color= "red";
        errorContraRegister.style.fontSize= "12px";
    } else if(contraRegister.value.length < 6){
        errorContraRegister.innerText = "Debe ingresar al menos 6 caracteres";
        errorContraRegister.style.display= "block";
        errorContraRegister.style.color= "red";
        errorContraRegister.style.fontSize= "12px";
    }

    if(contraRegister.value !== contraRepRegister.value){
        errorContraRepRegister.innerText = "Las contraseñas no coinciden";
        errorContraRepRegister.style.display= "block";
        errorContraRepRegister.style.color= "red";
        errorContraRepRegister.style.fontSize= "12px";
    }
    if(emailRegister.value !== "" && emailRegister.value !== "" && contraRegister.value.length >= 6 && contraRegister.value === contraRepRegister.value){
        this.submit();
    }

    let barraCategory = document.querySelector('.barra-category')
        barraCategory.innerHTML = `
        <p><a href="./category.html?categorias=jewelery">ACCESORIOS</a></p>
        <p><a href="./category.html?categorias=electronics">ELECTRÓNICA</a></p>
        <p><a href="./category.html?categorias=men's clothing">HOMBRE</a></p>
        <p><a href="./category.html?categorias=women's clothing">MUJER</a></p>`;
        
});