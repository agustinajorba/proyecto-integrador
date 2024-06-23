//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", function () {
    let mailUsuario = localStorage.getItem('datosIngresados');
    let saludoBienvenida = document.querySelector('.saludo-frase');
    let saludoLogin = document.querySelector('.saludo-login');
    let saludoRegister = document.querySelector('.saludo-register');
    let logout = document.querySelector('.link-logout');

    if (mailUsuario) {
        saludoBienvenida.innerText = 'Bienvenido: ' + mailUsuario + 'Logout';
        saludoBienvenida.style.display = 'block';
        saludoLogin.style.display = 'none';
        saludoRegister.style.display = 'none';

        document.querySelector('.link-logout').addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('datosIngresados');
            window.location.href = './login.html';
        });
    }

});