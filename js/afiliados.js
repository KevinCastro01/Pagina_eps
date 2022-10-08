document.getElementById("formulario").addEventListener("submit", crear)

function crear(e) {
  tDocumento = document.getElementById("tipoDocumento").value;
  nId = document.getElementById("numerId").value;
  pacient = document.getElementById("paciente").value;
  fech = document.getElementById("fecha").value;
  espe = document.getElementById("especialidad").value;

  let student = {
    tDocumento, nId, pacient, fech, espe
  }

  if (localStorage.getItem("Estudiantes") === null) {
    let estudiantes = [];
    estudiantes.push(student);
    localStorage.setItem("Estudiantes", JSON.stringify(estudiantes))
  } else {
    let estudiantes = JSON.parse(localStorage.getItem("Estudiantes"))
    estudiantes.push(student)
    localStorage.setItem("Estudiantes", JSON.stringify(estudiantes))

  }

  leer();
  document.getElementById("formulario").reset();
  e.preventDefault();
}

function leer() {
  let estudiantes = JSON.parse(localStorage.getItem("Estudiantes"));
  document.getElementById("tbody").innerHTML = "";
  for (let i = 0; i < estudiantes.length; i++) {
    let tDocumento = estudiantes[i].tDocumento;
    let nId = estudiantes[i].nId;
    let pacient = estudiantes[i].pacient;
    let fech = estudiantes[i].fech;
    let espe = estudiantes[i].espe;
    document.getElementById("tbody").innerHTML +=
      `<tr>
<td>${tDocumento}</td>
<td>${nId}</td>
<td>${pacient}</td>
<td>${fech}</td>
<td>${espe}</td>
<td><button class="btn btn-success" onclick="Editar('${tDocumento}')">Editar</button>
<button class="btn btn-danger" onclick="eliminar('${tDocumento}')">Eliminar</button></td>
`
  }
}
leer();

function Editar(tDocumento) {

  var div = document.getElementById("body");
  let estudiantes = JSON.parse(localStorage.getItem("Estudiantes"));
  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].tDocumento === tDocumento) {
      document.getElementById("body").innerHTML = `
        <div class="container mt-4 abs-center" id="body">
        <div class="card col-6 d-flex ">
        <div class="card-body ">
            <form id="formulario">
          <h5 class="card-title">Actualizar citas</h5>

          <div class="mb-3">
            <label for="nTdocumento" class="form-label">Tipo de identifiacion</label>
            <select class="form-select" id="nTdocumento" required>
                <option selected disabled value="${estudiantes[i].tDocumento}">${estudiantes[i].tDocumento}</option>
                <option>CEDULA DE CIUDADANIA</option>
                <option>CEDULA DE EXTRANJERIA</option>
                <option>TARJETA DE IDENTIDAD</option>
                <option>REGISTRO CIVIL</option>
                <option>OTROS</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="nnId" class="form-label">No documento</label>
            <input type="number" class="form-control" id="nnId" value="${estudiantes[i].nId}">
          </div>

          <div class="mb-3">
            <label for="nPacient" class="form-label">Paciente</label>
            <input type="text" class="form-control" id="nPacient" value="${estudiantes[i].pacient}">
          </div>

          <div class="mb-3">
            <label for="nfecha" class="form-label">Fecha</label>
            <input type="datetime-local" class="form-control" id="nfecha" value="${estudiantes[i].fech}">
          </div>

          <div class="mb-3">
          <label for="nEspe" class="form-label">Especialidad</label>
          <select class="form-select" id="nEspe" required>
              <option selected disabled value="${estudiantes[i].espe}">${estudiantes[i].espe}</option>
              <option>MEDICO GENERAL</option>
              <option>OFTALMOLOGIA</option>
              <option>PEDIATRIA</option>
              <option>GINECOLOGIA</option>
              <option>ODONTOLOGIA</option>
          </select>
          </div>

          <div class="mb-3">
          <td><button class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button></td>
          <td><button class="btn btn-danger">Cancelar</button></td> 
          </div>
          
        </form>
        </div>
      </div>
    </div>
        `
    }
    div.style = 'block';
  }
}

function actualizar(i) {
  let estudiantes = JSON.parse(localStorage.getItem("Estudiantes"));
  estudiantes[i].tDocumento = document.getElementById('nTdocumento').value;
  estudiantes[i].nId = document.getElementById('nnId').value;
  estudiantes[i].pacient = document.getElementById('nPacient').value;
  estudiantes[i].fech = document.getElementById('nfecha').value;
  estudiantes[i].espe = document.getElementById('nEspe').value;
  localStorage.setItem("Estudiantes", JSON.stringify(estudiantes));
}

function eliminar(tDocumento) {

  let estudiantes = JSON.parse(localStorage.getItem("Estudiantes"));
  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].tDocumento == tDocumento) {
      estudiantes.splice(i, 1);
      alert('Dato eliminado Correctamente')
    }
  }
  localStorage.setItem("Estudiantes", JSON.stringify(estudiantes));
  leer();
}