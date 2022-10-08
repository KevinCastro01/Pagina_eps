document.getElementById("formulario").addEventListener("submit", crear)
debugger;
function crear(e) {
  tId = document.getElementById("tId").value;
  nId = document.getElementById("nId").value;
  empre = document.getElementById("empresa").value;
  ciu = document.getElementById("ciudad").value;
  direc = document.getElementById("direccion").value;
  email = document.getElementById("correo").value;
  cPostal = document.getElementById("codigoPostal").value;
  regi = document.getElementById("regimen").value;

  let emplea = {
    tId, nId, empre, ciu, direc, email, cPostal, regi
  }

  if (localStorage.getItem("Empleados") === null) {
    let empleadoss = [];
    empleadoss.push(emplea);
    localStorage.setItem("Empleados", JSON.stringify(empleadoss))
  } else {
    let empleadoss = JSON.parse(localStorage.getItem("Empleados"))
    empleadoss.push(emplea)
    localStorage.setItem("Empleados", JSON.stringify(empleadoss))

  }

  leer();
  document.getElementById("formulario").reset();
  e.preventDefault();

}

function leer() {
  let empleadoss = JSON.parse(localStorage.getItem("Empleados"));
  document.getElementById("tbody").innerHTML = "";
  for (let i = 0; i < empleadoss.length; i++) {
    let tId = empleadoss[i].tId;
    let nId = empleadoss[i].nId;
    let empre = empleadoss[i].empre;
    let ciu = empleadoss[i].ciu;
    let direc = empleadoss[i].direc;
    let email = empleadoss[i].email;
    let cPostal = empleadoss[i].cPostal;
    let regi = empleadoss[i].regi;
    document.getElementById("tbody").innerHTML +=
      `<tr>
<td>${tId}</td>
<td>${nId}</td>
<td>${empre}</td>
<td>${ciu}</td>
<td>${direc}</td>
<td>${email}</td>
<td>${cPostal}</td>
<td>${regi}</td>
<td><button class="btn btn-success" onclick="Editar('${tId}')">Editar</button>
<button class="btn btn-danger" onclick="eliminar('${tId}')">Eliminar</button></td>`
  }
}
leer();

function Editar(tId) {

  var div = document.getElementById("body");
  let empleadoss = JSON.parse(localStorage.getItem("Empleados"));
  for (let i = 0; i < empleadoss.length; i++) {
    if (empleadoss[i].tId === tId) {
      document.getElementById("body").innerHTML =
        `<div class="container">
        <div class="container mt-5 mb-3" id="body">
            <form id="formulario">
                <div class="container row">
                    <h5>Registrar citas</h5>
                    <div class="col-2 mt-3">
                        <label for="ntId" class="form-label">Tipo de identificacion</label>
                    </div>
                    <div class="col-4 mt-3">
                      <select class="form-select" id="ntId" >
                            <option selected disabled value="${empleadoss[i].tId}">${empleadoss[i].tId}</option>
                            <option>CEDULA DE CIUDADANIA</option>
                            <option>CEDULA DE EXTRANJERIA</option>
                            <option>TARJETA DE IDENTIDAD</option>
                            <option>REGISTRO CIVIL</option>
                            <option>OTROS</option>
                      </select>
                    </div>


                    <div class="col-2 mt-3">
                        <label for="nnId">Numero:</label>
                    </div>
                    <div class="col-4 mt-3">
                      <input type="number" id="nnId" required class="form-control" value="${empleadoss[i].nId}">
                    </div>


                    <div class="col-2 mt-3">
                        <label for="nEmpresa">Empresa:</label>
                    </div>
                    <div class="col-4 mt-3">
                      <input type="text" id="nEmpresa" required class="form-control" value="${empleadoss[i].empre}">
                    </div>


                    <div class="col-2 mt-3">
                        <label for="nCiudad">Ciudad:</label>
                    </div>
                    <div class="col-4 mt-3">
                    <select class="form-select" id="nCiudad" >
                            <option selected disabled value="${empleadoss[i].ciu}">${empleadoss[i].ciu}</option>
                            <option>Barranquilla</option>
                            <option>Medellin</option>
                            <option>Cali</option>
                            <option>Bogota</option>
                            <option>Cartagena</option>
                        </select>
                    </div>


                    <div class="col-2 mt-3">
                        <label for="nDireccion">Direccion:</label>
                    </div>
                    <div class="col-4 mt-3">
                      <input type="text" id="nDireccion" required class="form-control" value="${empleadoss[i].direc}">
                    </div>


                    <div class="col-2 mt-3">
                        <label for="nCorreo">Correo:</label>
                    </div>
                    <div class="col-4 mt-3">
                      <input type="email" id="nCorreo" required class="form-control" value="${empleadoss[i].email}">
                    </div>


                    <div class="col-2 mt-3">
                        <label for="nCodigoPostal">Codigo postal:</label>
                    </div>
                    <div class="col-4 mt-3">
                      <input type="number" id="nCodigoPostal" required class="form-control" value="${empleadoss[i].cPostal}">
                    </div>


                    <div class="col-2 mt-3">
                        <label for="nRegimen">Regimen:</label>
                    </div>
                    <div class="col-4 mt-3">
                      <select class="form-select" id="nRegimen" >
                            <option selected disabled value="${empleadoss[i].regi}">${empleadoss[i].regi}</option>
                            <option>Responsable de iva</option>
                            <option>Persona natural responsable de iva</option>
                            <option>Regimen especial</option>
                            <option>Persona no natural responsable de iva</option>
                      </select>
                    </div>


                    <div class="form-check mt-3 ms-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Estoy de acuerdo
                    </label>
                    </div>
                  <div class="mb-3">
                    <td><button class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button></td>
                    <td><button class="btn btn-danger">Cancelar</button></td> 
                  </div>
                </div>
            </form>
        </div>
    </div>`
    }
    div.style = 'block';
  }
}

function actualizar(i) {
  let empleadoss = JSON.parse(localStorage.getItem("Empleados"));
  empleadoss[i].tId = document.getElementById('ntId').value;
  empleadoss[i].nId = document.getElementById('nnId').value;
  empleadoss[i].empre = document.getElementById('nEmpresa').value;
  empleadoss[i].ciu = document.getElementById('nCiudad').value;
  empleadoss[i].direc = document.getElementById('nDireccion').value;
  empleadoss[i].email = document.getElementById('nCorreo').value;
  empleadoss[i].cPostal = document.getElementById('nCodigoPostal').value;
  empleadoss[i].regi = document.getElementById('nRegimen').value;
  localStorage.setItem("Empleados", JSON.stringify(empleadoss));
}

function eliminar(tId) {

  let empleadoss = JSON.parse(localStorage.getItem("Empleados"));
  for (let i = 0; i < empleadoss.length; i++) {
    if (empleadoss[i].tId == tId) {
      empleadoss.splice(i, 1);
      alert('Dato eliminado Correctamente')
    }
  }
  localStorage.setItem("Empleados", JSON.stringify(empleadoss));
  leer();
}