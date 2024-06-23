document.addEventListener("DOMContentLoaded", function () {
    let datosIngresados = localStorage.getItem("datosIngresados");
    let saludoBienvenida = document.querySelector('.saludo-frase');
    let saludoLogin = document.querySelector('.saludo-login');
    let saludoRegister = document.querySelector('.saludo-register');
    let logout = document.querySelector('.link-logout');
    let barra = document.querySelector('.barra')

    if (datosIngresados) {
        let datosUsuario = JSON.parse(datosIngresados);
        if(datosUsuario.email){
            saludoBienvenida.innerText = 'BIENVENIDO: ' + datosUsuario.email;
            saludoBienvenida.style.textAlign = 'right';
            saludoBienvenida.style.marginLeft = '12%';
            logout.innerText = 'LOGOUT';
            barra.style.marginLeft = '4%';
            

            saludoBienvenida.style.display = 'block';
            saludoLogin.style.display = 'none';
            saludoRegister.style.display = 'none';
        }
        
//Hasta acá es lo mismo que el saludo.js

        logout.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('datosIngresados');
            window.location.href = './login.html';
            saludoLogin.style.display = 'block';
            saludoRegister.style.display = 'block';
        });
    }

});