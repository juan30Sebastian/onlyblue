var boxPrincipal = document.querySelector(".boxprincipal");
var boxDetalles = document.querySelector(".boxDetalles");
var time = document.querySelector("#time");
var numeroTime = document.querySelector("#numeroTime");

var puntuacionRobot = document.querySelector("#puntuacionRobot");
var contadorPuntuacionRobot = 0;
var puntuacionPeople = document.querySelector("#puntuacionPeople");
var contadorPuntuacionPeople = 0;
var subtitulo = document.querySelector("#subtitulo");
var boxEleccion = document.querySelector(".boxEleccion");
var tijera = document.querySelector("#tijera");
var papel = document.querySelector("#papel");
var piedra = document.querySelector("#piedra");
var btnContinuar = document.querySelector(".continuar");
var tiempo = 100;
var contadorTiempo = 10;
var boxAleatorio = document.querySelector(".boxAleatorio");
var boxObjetoAleatorio = document.querySelector(".boxObjetoAleatorio")
var boxObjetoAleatorioPeople = document.querySelector("#boxObjetoAleatorioPeople")
var imagenAleatoriaRobot = document.querySelector("#imagenAleatoriaRobot")
var imagenAleatoriaPersona = document.querySelector("#imagenAleatoriaPersona");
var panel = document.querySelector(".panel");
var btnPanelJugar = document.querySelector("#btnPanelJugar");
var btnPanelMododejuego = document.querySelector("#btnPanelMododejuego")
var boxRondas = document.querySelector(".boxRondas");
var boxPanelRondas = document.querySelector(".boxPanelRondas");
var tituloRondas = document.querySelector(".tituloRondas");
var btnRondasMenos = document.querySelector("#btnRondasMenos");
var btnRondasMas = document.querySelector("#btnRondasMas");
var textRondas = document.querySelector("#textRondas");

var numeroRondas = 0;
var datoNumeroRondas = 1;
var contadorFinalizar = 0;

btnRondasMenos.addEventListener("click", () => {
   datoNumeroRondas--;
   textRondas.innerHTML = datoNumeroRondas;
})

btnRondasMas.addEventListener("click", () => {
   datoNumeroRondas++;
   textRondas.innerHTML = datoNumeroRondas;
})


btnPanelJugar.addEventListener("click", () => {
   boxPrincipal.style.backgroundColor = "rgb(0, 0, 30)";
   panel.style.backgroundColor = "rgb(0, 0, 30)";
   panel.style.top = "1000px";
   numeroRondas = 0;
   contadorPuntuacionPeople = 0;
   puntuacionPeople.innerHTML  = contadorPuntuacionPeople;
   contadorPuntuacionRobot = 0;
   puntuacionRobot.innerHTML  = contadorPuntuacionRobot;
   btnPanelMododejuego.style.display = "none";
   tiempo = 0;
   contadorTiempo = 11;
   numeroAleatorio = Math.floor(Math.random() * numeroAleatorioRobot.length)
});

jugar();
function jugar(){
setInterval(() => {
   tiempo++;
   contadorTiempo--;
   numeroTime.innerHTML = contadorTiempo;
   switch(tiempo){
    case 3:
      boxRondas.style.display = "none";
      btnPanelJugar.style.display = "none";
   break;
      case 7:
        time.style.backgroundColor = "red";
        break;
        case 10:
            contadorPuntuacionRobot++;
            puntuacionRobot.innerHTML = contadorPuntuacionRobot;
            panel.style.top = "0px";
            boxRondas.style.display = "flex";
            tituloRondas.style.display = "flex";
            tituloRondas.innerHTML = "Te has quedado sin tiempo. Punto para el robot";
            boxPanelRondas.style.display = "none";
            break;
            case 14:

            numeroRondas++;

            if(numeroRondas == datoNumeroRondas){
               panel.style.top = "0px";
               boxRondas.style.display = "flex";
               boxPanelRondas.style.display = "none";
               tituloRondas.innerHTML = "...";
               tituloRondas.style.fontSize = "6rem";
               tituloRondas.style.display = "flex"
               tiempo = 100;
               btnPanelJugar.style.display = "none";

               contadorPuntuacionPeople
               contadorPuntuacionRobot
         contadorFinalizar = 0;
               setInterval(() => {
                  contadorFinalizar++;
                  switch(contadorFinalizar){
                     case 3:
                        if(contadorPuntuacionRobot > contadorPuntuacionPeople){
                           tituloRondas.style.color = "red";
                           tituloRondas.innerHTML = "Perdiste";
                        }if(contadorPuntuacionRobot < contadorPuntuacionPeople){
                           tituloRondas.style.color = "#90EE90";
                           tituloRondas.innerHTML = "Ganaste";
                        }if(contadorPuntuacionRobot === contadorPuntuacionPeople){
                           tituloRondas.innerHTML = "Empate";
                        }
                     break;
                     case 8:
                     panel.style.backgroundColor = "rgb(0, 0, 30)";
                     tituloRondas.style.fontSize = "2rem";   
                     tituloRondas.innerHTML = "Número de rondas";
                     tituloRondas.style.color = "white";
                     boxPanelRondas.style.display = "flex";
                     btnPanelJugar.style.display = "block";
                     numeroRondas = 0;
         
                     time.style.backgroundColor = "#3a4153"
            boxPrincipal.style.transform = "translatey(0px)"
            boxPrincipal.style.backgroundColor = "rgb(0, 0, 30)";
            boxDetalles.style.transform = "translatey(0px)"
            boxEleccion.style.transform = "translatey(0px)"
            subtitulo.innerHTML = "Elige una tarjeta";
            boxEleccion.style.display = "flex";            
            
            break;
            case 10:
               contadorFinalizar = 100;
            break;
                     
                  }
               }, 1000);   
            }else {
         
               panel.style.top = "1000px";
               time.style.backgroundColor = "rgb(0, 0, 30)";
               tiempo = 0;
               contadorTiempo = 11;
               
            }
            
            break;
   }
}, 1000);

}
var tiempoRevolver = 100;
var sumaValores;

tijera.addEventListener("click", () => {
   tiempo = 1000;
   boxPrincipal.style.transform = "translatey(-1000px)";
   boxPrincipal.style.backgroundColor = "transparent";
   boxDetalles.style.transform  = "translatey(-1000px)";
   boxEleccion.style.transform = "translatey(1000px)";
   boxAleatorio.style.display = "flex";
   subtitulo.innerHTML = "¿Quién ganará?"
   boxObjetoAleatorioPeople.style.border = "5px solid transparent"
   btnContinuar.style.transform = "translatey(1000px)"
   imagenAleatoriaPersona.src = "../imagenes/logo/tijeras.png"
   numeroDeTarjeta = 1;
   sumaValores = numeroDeTarjeta + numeroAleatorio;
   tiempoRevolver = 0;

})


papel.addEventListener("click", () => {
   tiempo = 1000;
   boxPrincipal.style.transform = "translatey(-1000px)";
   boxPrincipal.style.backgroundColor = "transparent";
   boxDetalles.style.transform = "translatey(-1000px)";
   boxEleccion.style.transform = "translatey(1000px)";
   boxAleatorio.style.display = "flex";
   subtitulo.innerHTML = "¿Quién ganará?"
   boxObjetoAleatorioPeople.style.border = "5px solid transparent"
   btnContinuar.style.transform = "translatey(1000px)"
   imagenAleatoriaPersona.src = "../imagenes/logo/hoja-de-papel.png"
   tiempoRevolver = 0;
   numeroDeTarjeta = 4;
   sumaValores = numeroDeTarjeta + numeroAleatorio;
})


piedra.addEventListener("click", () => {
   tiempo = 1000;
   boxPrincipal.style.transform = "translatey(-1000px)";
   boxPrincipal.style.backgroundColor = "transparent";
   boxDetalles.style.transform = "translatey(-1000px)";
   boxEleccion.style.transform = "translatey(1000px)";
   boxAleatorio.style.display = "flex";
   subtitulo.innerHTML = "¿Quién ganará?"
   boxObjetoAleatorioPeople.style.border = "5px solid transparent"
   btnContinuar.style.transform = "translatey(1000px)"
   imagenAleatoriaPersona.src = "../imagenes/logo/piedra.png"
   tiempoRevolver = 0;
   numeroDeTarjeta = 7;
   sumaValores = numeroDeTarjeta + numeroAleatorio;
})


revolverTarjetas();
function revolverTarjetas(){
   setInterval(() => {
      tiempoRevolver += 1;
      switch(tiempoRevolver){
case 1:
   imagenAleatoriaRobot.src = "../imagenes/logo/piedra.png";
break;
case 3:
imagenAleatoriaRobot.src = "../imagenes/logo/tijeras.png";
   break;
   case 6:
imagenAleatoriaRobot.src = "../imagenes/logo/hoja-de-papel.png";
   break;
   case 9:
   imagenAleatoriaRobot.src = "../imagenes/logo/piedra.png";
break;
case 12:
imagenAleatoriaRobot.src = "../imagenes/logo/tijeras.png";
   break;
   case 15:
imagenAleatoriaRobot.src = "../imagenes/logo/hoja-de-papel.png";
   break;
   case 18:
   imagenAleatoriaRobot.src = "../imagenes/logo/piedra.png";
break;
case 21:
imagenAleatoriaRobot.src = "../imagenes/logo/tijeras.png";
   break;
   case 24:
imagenAleatoriaRobot.src = "../imagenes/logo/hoja-de-papel.png";
   break;
   case 27:
   imagenAleatoriaRobot.src = "../imagenes/logo/piedra.png";
break;
case 30:
imagenAleatoriaRobot.src = "../imagenes/logo/tijeras.png";
   break;
   case 33:
imagenAleatoriaRobot.src = "../imagenes/logo/hoja-de-papel.png";
break;
   case 36:
         imagenAleatoriaRobot.src = imagenRobotAleatoria[numeroAleatorio]; 
         switch(sumaValores){
            case 1:
               subtitulo.innerHTML = "Empate";
               boxObjetoAleatorioPeople.style.border = "5px solid #3a4153"   
               break;
            case 2:
               subtitulo.innerHTML = "Ganaste";
               contadorPuntuacionPeople++;
               puntuacionPeople.innerHTML = contadorPuntuacionPeople;
            boxObjetoAleatorioPeople.style.border = "5px solid #90EE90"
               break;
            case 3:
               subtitulo.innerHTML = "Perdiste";
               contadorPuntuacionRobot++;
              puntuacionRobot.innerHTML = contadorPuntuacionRobot 
              boxObjetoAleatorioPeople.style.border = "5px solid red"
            break;
            case 4:
               subtitulo.innerHTML = "Perdiste";
               contadorPuntuacionRobot++;
              puntuacionRobot.innerHTML = contadorPuntuacionRobot 
              boxObjetoAleatorioPeople.style.border = "5px solid red"
              break;
            case 5:
               subtitulo.innerHTML = "Empate";
               boxObjetoAleatorioPeople.style.border = "5px solid #3a4153"   
               break;
            case 6:
               subtitulo.innerHTML = "Ganaste";
               contadorPuntuacionPeople++;
               puntuacionPeople.innerHTML = contadorPuntuacionPeople;
               boxObjetoAleatorioPeople.style.border = "5px solid #90EE90"
               break;
            case 7:
               subtitulo.innerHTML = "Ganaste";
               contadorPuntuacionPeople++;
               puntuacionPeople.innerHTML = contadorPuntuacionPeople;
               boxObjetoAleatorioPeople.style.border = "5px solid #90EE90"
               break;
            case 8:
               subtitulo.innerHTML = "Perdiste";
               contadorPuntuacionRobot++;
              puntuacionRobot.innerHTML = contadorPuntuacionRobot;
              boxObjetoAleatorioPeople.style.border = "5px solid red"
              break;
            case 9:
               subtitulo.innerHTML = "Empate";
               boxObjetoAleatorioPeople.style.border = "5px solid #3a4153"   
               break;
         }
         break;
         case 50:

            numeroRondas++;      
            

            if(numeroRondas == datoNumeroRondas){
               panel.style.top = "0px";
               boxRondas.style.display = "flex";
               boxPanelRondas.style.display = "none";
               tituloRondas.innerHTML = "...";
               tituloRondas.style.fontSize = "6rem";
               tituloRondas.style.display = "flex"
               tiempo = 100;
               btnPanelJugar.style.display = "none";

               contadorPuntuacionPeople
               contadorPuntuacionRobot
         contadorFinalizar = 0;
               setInterval(() => {
                  contadorFinalizar++;
                  switch(contadorFinalizar){
                     case 3:
                        if(contadorPuntuacionRobot > contadorPuntuacionPeople){
                           tituloRondas.style.color = "red";
                           tituloRondas.innerHTML = "Perdiste";
                        }if(contadorPuntuacionRobot < contadorPuntuacionPeople){
                           tituloRondas.style.color = "#90EE90";
                           tituloRondas.innerHTML = "Ganaste";
                        }if(contadorPuntuacionRobot === contadorPuntuacionPeople){
                           tituloRondas.innerHTML = "Empate";
                        }
                     break;
                     case 8:
                     panel.style.backgroundColor = "rgb(0, 0, 30)";
                     tituloRondas.style.fontSize = "2rem";   
                     tituloRondas.innerHTML = "Número de rondas";
                     tituloRondas.style.color = "white";
                     boxPanelRondas.style.display = "flex";
                     btnPanelJugar.style.display = "block";
                     numeroRondas = 0;
         
                     time.style.backgroundColor = "#3a4153"
            boxPrincipal.style.transform = "translatey(0px)"
            boxPrincipal.style.backgroundColor = "rgb(0, 0, 30)";
            boxDetalles.style.transform = "translatey(0px)"
            boxEleccion.style.transform = "translatey(0px)"
            subtitulo.innerHTML = "Elige una tarjeta";
            boxEleccion.style.display = "flex";            
            
            break;
            case 10:
               contadorFinalizar = 100;
            break;
                     
                  }
               }, 1000);   
            }else {
         
            time.style.backgroundColor = "#3a4153"
            boxPrincipal.style.transform = "translatey(0px)"
            boxPrincipal.style.backgroundColor = "rgb(0, 0, 30)";
            boxDetalles.style.transform = "translatey(0px)"
            boxEleccion.style.transform = "translatey(0px)"
            subtitulo.innerHTML = "Elige una tarjeta";
            boxEleccion.style.display = "flex";
            tiempo = 0;
            contadorTiempo = 11;
            numeroAleatorio = Math.floor(Math.random() * numeroAleatorioRobot.length)
            }}
   }, 100);
}




var numeroAleatorioRobot = [0, 1, 2]

var numeroAleatorio = Math.floor(Math.random() * numeroAleatorioRobot.length)

var  imagenRobotAleatoria = ["../imagenes/logo/tijeras.png", "../imagenes/logo/hoja-de-papel.png", "../imagenes/logo/piedra.png"]

