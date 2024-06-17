let form= document.querySelector("form");

let email= document.querySelector("#mail");
let contra= document.querySelector("#contra");

let errorMail= document.querySelector(".error-mail");
let errorContra= document.querySelector(".error-contra");

datosUsuario={}


form.addEventListener("submit", function(e){
    e.preventDefault();
    if(email.value==""){
        errorMail.innerText= alert("Por favor complete el campo email")
    }
    
    if(contra.value==""){
        errorContra.innerText= alert("Por favor complete el campo contraseña")
    }else if(contra.value.length <6){
        errorContra.innerText= alert("La contraseña debe tener al menos 6 caracteres")

    }
    else{
        datosUsuario.email=email.value;
        datosUsuario.contra= contra.value;
        let datos= JSON.stringify(datosUsuario)
        localStorage.setItem("datosIngresados",datos)
        let recuperoDatos = localStorage.getItem("datosIngresados")
        let datosRecuperados = JSON.parse(recuperoDatos)
            console.log(datosRecuperados)
        this.submit();
    }
})