document.getElementById("formulario").addEventListener("submit", crear);

function crear(e) {
    tid = document.getElementById("tId").value;
    nu = document.getElementById("num").value;
    nom = document.getElementById("nombre").value;
    ciu = document.getElementById("ciudad").value;
    direc = document.getElementById("direccion").value;
    email = document.getElementById("correo").value;
    bar = document.getElementById("barrio").value;
    se = document.getElementById("sede").value;

    let inde = {
        tid,
        nu,
        nom,
        ciu,
        direc,
        email,
        bar,
        se,
    };

    if (localStorage.getItem("Independiente") === null) {
        let independiente = [];
        independiente.push(inde);
        localStorage.setItem("Independiente", JSON.stringify(independiente));
    } else {
        let independiente = JSON.parse(localStorage.getItem("Independiente"));
        independiente.push(inde);
        localStorage.setItem("Independiente", JSON.stringify(independiente));
    }

    leer();
    document.getElementById("formulario").reset();
    e.preventDefault();

    console.log("Independiente Guardado Correctamente");
}

function leer() {
    let independiente = JSON.parse(localStorage.getItem("Independiente"));
    document.getElementById("tbody").innerHTML = "";
    for (let i = 0; i < independiente.length; i++) {
        let tid = independiente[i].tid;
        let nu = independiente[i].num;
        let nom = independiente[i].nom;
        let ciu = independiente[i].ciu;
        let direc = independiente[i].direc;
        let email = independiente[i].email;
        let bar = independiente[i].bar;
        let se = independiente[i].se;
        document.getElementById("tbody").innerHTML += `<tr>
<td>${tid}</td>
<td>${nu}</td>
<td>${nom}</td>
<td>${ciu}</td>
<td>${direc}</td>
<td>${email}</td>
<td>${bar}</td>
<td>${se}</td>
<td><button class="btn btn-success" onclick="Editar('${tid}')">Editar</button>
<button class="btn btn-danger" onclick="eliminar('${tid}')">Eliminar</button></td>
`;
    }
}
leer();

function Editar(tid) {
    var div = document.getElementById("body");
    let independiente = JSON.parse(localStorage.getItem("Independiente"));
    for (let i = 0; i < independiente.length; i++) {
        if (independiente[i].tid === tid) {
            document.getElementById("body").innerHTML = `
            <div class="container">
            <div class="container mt-5 mb-3" id="body">
                <form id="formulario">
                    <div class="container row">
                        <h5>Registrar Independientes</h5>
                        <div class="col-2 mt-3">
                            <label for="ntId">Identificacion:</label>
                        </div>
                        <div class="col-4 mt-3">
                            <select class="form-select" id="ntId" required>
                                <option selected disabled value="${independiente[i].tid}">${independiente[i].tid}</option>
                                <option>CEDULA DE CIUDADANIA</option>
                                <option>CEDULA DE EXTRANJERIA</option>
                                <option>TARJETA DE IDENTIDAD</option>
                                <option>REGISTRO CIVIL</option>
                                <option>OTROS</option>
                            </select>
                        </div>
    
                        <div class="col-2 mt-3">
                            <label for="nnu">Numero:</label>
                        </div>
                        <div class="col-4 mt-3">
                            <input type="number" name="" id="nnu" required class="form-control" value="${independiente[i].nu}">
                        </div>
    
    
                        <div class="col-2 mt-3">
                            <label for="nnom">Nombre:</label>
                        </div>
                        <div class="col-4 mt-3">
                            <input type="text" name="" id="nnom" required class="form-control" value="${independiente[i].nom}">
                        </div>
    
    
                        <div class="col-2 mt-3">
                            <label for="nciu">Ciudad:</label>
                        </div>
                        <div class="col-4 mt-3">
                            <select class="form-select" id="nciu" required>
                                <option selected disabled value="${independiente[i].ciu}">${independiente[i].ciu}</option>
                                <option>Barranquilla</option>
                                <option>Medellin</option>
                                <option>Cali</option>
                                <option>Bogota</option>
                                <option>Cartagena</option>
                            </select>
                        </div>
    
    
                        <div class="col-2 mt-3">
                            <label for="ndirec">Direccion:</label>
                        </div>
                        <div class="col-4 mt-3">
                        <input type="text" name="" id="ndirec" required class="form-control" value="${independiente[i].direc}">
                        </div>
    
    
                        <div class="col-2 mt-3">
                            <label for="ncorreo">Correo:</label>
                        </div>
                        <div class="col-4 mt-3">
                            <input type="email" name="" id="ncorreo" required class="form-control" value="${independiente[i].email}">
                        </div>
    
    
                        <div class="col-2 mt-3">
                            <label for="nbarrio">Barrio:</label>
                        </div>
                        <div class="col-4 mt-3">
                            <input type="text" name="" id="nbarrio" required class="form-control" value="${independiente[i].bar}">
                        </div>
    
    
                        <div class="col-2 mt-3">
                            <label for="nsede">Sede:</label>
                        </div>
                        <div class="col-4 mt-3">
                            <select class="form-select" id="nsede" required>
                                <option selected disabled value="${independiente[i].se}">${independiente[i].se}</option>
                                <option>Sede Norte</option>
                                <option>Sede Sur</option>
                                <option>Sede Este</option>
                                <option>Sede Oeste</option>
                                <option>Sede Centro</option>
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
    div.style = "block";
    }
}

function actualizar(i) {
    let independiente = JSON.parse(localStorage.getItem("Independiente"));
    independiente[i].tid = document.getElementById("ntId").value;
    independiente[i].num = document.getElementById("nnu").value;
    independiente[i].nom = document.getElementById("nnom").value;
    independiente[i].ciu = document.getElementById("nciu").value;
    independiente[i].direc = document.getElementById("ndirec").value;
    independiente[i].email = document.getElementById("ncorreo").value;
    independiente[i].bar = document.getElementById("nbarrio").value;
    independiente[i].se = document.getElementById("nsede").value;
    localStorage.setItem("Independiente", JSON.stringify(independiente));
}

function eliminar(tid) {
    let independiente = JSON.parse(localStorage.getItem("Independiente"));
    for (let i = 0; i < independiente.length; i++) {
        if (independiente[i].tid == tid) {
            independiente.splice(i, 1);
            alert("Dato eliminado Correctamente");
        }
    }
    localStorage.setItem("Independiente", JSON.stringify(independiente));
    leer();
}