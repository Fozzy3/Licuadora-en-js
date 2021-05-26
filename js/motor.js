var estadoLicuadora = "apagada";

var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var sonidoBoton = document.getElementById("blender-button-sound");

function controlarLicuadora(){
    if(estadoLicuadora == "apagada"){
        estadoLicuadora = "encendido";
        activarSonidos();
        licuadora.classList.add("active");
    }else{
        estadoLicuadora = "apagada";
        activarSonidos();
        licuadora.classList.remove("active");
    }
}

function activarSonidos(){
    if(sonidoLicuadora.paused){
        sonidoBoton.play();
        sonidoLicuadora.play();
    }else{
        sonidoBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}