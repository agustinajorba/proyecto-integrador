let formRecover= document.querySelector(".form-recover");

let emailRecover= document.querySelector("#email-recover");
let checkboxRecover= document.querySelector("#terminos");

let errorEmailRecover= document.querySelector(".error-email-recover");
let errorCheckboxRecover= document.querySelector(".error-checkbox-recover");

formRecover.addEventListener("submit", function(e){
    e.preventDefault();
    
    errorEmailRecover.innerText="";
    errorCheckboxRecover.innerText="";

    if(emailRecover.value ==""){
        errorEmailRecover.innerText= "Por favor escriba su email"
        errorEmailRecover.style.display= "block"
        errorEmailRecover.style.color= "red";
        errorEmailRecover.style.fontSize= "12px";

    }
    if(!checkboxRecover.checked){
        errorCheckboxRecover.innerText="Por favor acepte el campo Quiero recuperar mi contraseña";
        errorCheckboxRecover.style.display= "block";
        errorCheckboxRecover.style.color= "red";
        errorCheckboxRecover.style.fontSize= "12px";
    }

    if(emailRecover.value !=="" && checkboxRecover.checked){
        let mensajeExito= document.querySelector(".mensaje-exito");
        mensajeExito.innerHTML= `
        <p style= "font-weight: bold;">Recibirás un email con las instrucciones para recuperar tu contraseña</p>
        <p style="text-align: center;"><a href="./login.html" style="color: black; text-decoration: underline; font-weight: bold;">Ir al login</a></p>`;
        formRegister.style.display = "block";
        mensajeExito.style.display= "block";
        
        this.submit();

    }

    let barraCategory = document.querySelector('.barra-category')
        barraCategory.innerHTML = `
        <p><a href="./category.html?categorias=jewelery">ACCESORIOS</a></p>
        <p><a href="./category.html?categorias=electronics">ELECTRÓNICA</a></p>
        <p><a href="./category.html?categorias=men's clothing">HOMBRE</a></p>
        <p><a href="./category.html?categorias=women's clothing">MUJER</a></p>`;

})