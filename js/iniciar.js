function redireccionar() { window.location = "paginaInicio.html" };

function validar() {
    var correo = document.getElementById("email").value;
    var contra = document.getElementById("pass").value;
    debugger;
    var existe = false;
    let usuarioss = JSON.parse(localStorage.getItem("Usuario"));
    for (let i = 0; i < usuarioss.length; i++) {
        if (usuarioss[i].correo === correo && usuarioss[i].contra === contra) {
            existe = true;
        }
    }
    if (existe) {
        redireccionar();
    } else {
        alert('Contraseña incorrecta')
    }

}