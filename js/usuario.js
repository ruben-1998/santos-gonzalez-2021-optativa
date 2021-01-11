function iniciar(){
    var usuario, clave;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;

    if(usuario == "" || clave == ""){
        alert("Rellene los campos");
        return false;
    } else if(usuario == "ruben" && clave == "1234"){
        window.location = "usuario.html";
        return false;
    } else {
        alert("Datos incorrectos, verifique usuario y contraseÃ±a");
        return false;
    }
}