//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", function () {
    let datosIngresados = localStorage.getItem("datosIngresados");
    let saludoBienvenida = document.querySelector('.saludo-frase');
    let saludoLogin = document.querySelector('.saludo-login');
    let saludoRegister = document.querySelector('.saludo-register');
    let logout = document.querySelector('.link-logout');

    if (datosIngresados) {
        let datosUsuario = JSON.parse(datosIngresados);
        if(datosUsuario.email){
            saludoBienvenida.innerText = 'Bienvenido: ' + datosUsuario.email;

            saludoBienvenida.style.display = 'block';
            saludoLogin.style.display = 'none';
            saludoRegister.style.display = 'none';
        }

        document.querySelector('.link-logout').addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('datosIngresados');
            window.location.href = './login.html';
        });
    }

});