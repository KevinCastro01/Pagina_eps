document.getElementById("formularioUsuario").addEventListener("submit", crear)

function crear(e) {
    correo = document.getElementById("email").value
    contra = document.getElementById("pass").value

    let usuarioArray = {
        correo, contra
    }

    if (localStorage.getItem("Usuario") === null) {
        let usuarioCreado = [];
        usuarioCreado.push(usuarioArray);
        localStorage.setItem("Usuario", JSON.stringify(usuarioCreado))
    } else {
        let usuarioCreado = JSON.parse(localStorage.getItem("Usuario"))
        usuarioCreado.push(usuarioArray)
        localStorage.setItem("Usuario", JSON.stringify(usuarioCreado))    
    }
    window.location.href="paginaInicio.html";
}


