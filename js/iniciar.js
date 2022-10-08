function redireccionar() { window.location = "paginaInicio.html" };

function validar() {
    let usuarioss = JSON.parse(localStorage.getItem("Usuario"));
    for (let i = 0; i < usuarioss.length; i++) {
        let email = usuarioss[i].email;
        let pass = usuarioss[i].pass;

        if (usuarioss.email == email && usuarioss.pass == pass) {
            redireccionar();
        }
        else {
            alert('Contraseña incorrecta')
        }
    }
}