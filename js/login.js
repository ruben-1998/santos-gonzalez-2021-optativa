
 

function iniciar(){
    var usuario, clave;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;

    if(usuario == "" || clave == ""){
        alert("Rellene los campos");
        return false;
    } else if(usuario == "admin" && clave == "admin"){
        window.location = "admin.html";
        return false;
    } else {
        alert("Datos incorrectos, verifique usuario y contraseÃ±a");
        return false;
    }
}


