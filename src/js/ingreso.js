function IniciarSesion() {

    usuario = document.getElementById("txtUsuario").value;
    password = document.getElementById("txtPass").value;

    if (usuario == 'admin' && password == '1234') {
        swal({
            title: "Bienvenido Usuario",
            text: "Ingreso correcto",
            icon: 'success',
        }).then(() => {
            window.location.href = "./usuario.html";
        })

    } else {
        swal({
            title: "Ingreso incorrecto",
            text: "El usuario o la contraseña son incorrectas",
            icon: 'error',
        })
    }
}