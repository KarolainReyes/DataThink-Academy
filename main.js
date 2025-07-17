/*boton bienvenida*/

function mostrarPagina(){
    document.getElementById("login").classList.add("ocultarPagina");
    document.getElementById("lecciones").classList.add("mostrarPagina");
}

const botonInicio=document.getElementById("img-flecha");
botonInicio.addEventListener("click",()=>{
mostrarPagina();
})

/*modulos prueba*/

function mostrarPaginaModulos(leccion){
    document.getElementById("lecciones").style.display="none";
    document.getElementById("teoria").style.display="block";

for(let i=1;i<=5;i++){
    const leccionOcultar=document.getElementById(`leccion${i}`);
    if(leccionOcultar) leccionOcultar.style.display="none";
}

const leccionPresentar=document.getElementById(`leccion${leccion}`);
if (leccionPresentar) leccionPresentar.style.display="flex";
} 

document.getElementById("hoja1").addEventListener("click", () => {
  mostrarPaginaModulos(1);
});
document.getElementById("hoja2").addEventListener("click", () => {
  mostrarPaginaModulos(2);
});
document.getElementById("hoja3").addEventListener("click", () => {
  mostrarPaginaModulos(3);
});
document.getElementById("hoja4").addEventListener("click", () => {
  mostrarPaginaModulos(4);
});
document.getElementById("hoja5").addEventListener("click", () => {
  mostrarPaginaModulos(5);
});
function volverLeccion(){
    document.getElementById("teoria").style.display="none";
    document.getElementById("lecciones").style.display="block";
}
const botonRegresar=document.getElementsByClassName("botonRegresarTeoria");
for(let i=0;i<botonRegresar.length;i++)
botonRegresar[i].addEventListener("click",()=>{
    volverLeccion();
})

/*funcion mostrar quiz*/
function presentarQuiz(){
    document.getElementById("teoria").style.display="none";
    document.getElementById("cuestionario").style.display="block";
}

const botonQuiz=document.getElementsByClassName("presentarQuiz");
for(let i=0;i<botonQuiz.length;i++)
botonQuiz[i].addEventListener("click",()=>{
    presentarQuiz();
})

/*validaciones*/

function validarRespuestasQuiz(){
    const cuestionario1=document.getElementById("box-cuestionario1");
    const respuesta=cuestionario1.querySelectorAll("input[type='radio']");

    let correctas=0;
    respuesta.forEach((respuesta)=>{
        if(respuesta.value==="1"){
            correctas++;
        }
    });
    const total=cuestionario1.querySelectorAll(".pregunta1").length;
    const resultado=(correctas/total)*100;

    if(resultado>=70){
        alert("Aprobaste");
        localStorage.setItem("leccion1","true");
        document.getElementById("cuestionario").style.display = "none";
        document.querySelector(".medidor").style.display = "flex"; 
    }else{
        alert("Vuelva a repetirlo");
    }
}

document.getElementById("hoja2").addEventListener("click", () => {
    const aprobada = localStorage.getItem("leccion1");
    if (aprobada === "true") {
        mostrarPaginaModulos(2);

    } else {
        alert(" Primero debes aprobar la Lección 1 para poder continuar.");
    }
});

document.getElementById("hoja3").addEventListener("click", () => {
    const aprobada = localStorage.getItem("leccion2");
    if (aprobada === "true") {
        mostrarPaginaModulos(3);
    } else {
        alert(" Primero debes aprobar la Lección 2 para poder continuar.");
    }
});

document.getElementById("hoja4").addEventListener("click", () => {
    const aprobada = localStorage.getItem("leccion3");
    if (aprobada === "true") {
        mostrarPaginaModulos(4);
    } else {
        alert(" Primero debes aprobar la Lección 3 para poder continuar.");
    }
});

document.getElementById("hoja5").addEventListener("click", () => {
    const aprobada = localStorage.getItem("leccion4");
    if (aprobada === "true") {
        mostrarPaginaModulos(5);
    } else {
        alert(" Primero debes aprobar la Lección 4 para poder continuar.");
    }
});

if (localStorage.getItem("leccion1") !== "true") {
    document.getElementById("hoja2").classList.add("bloqueada");
    document.getElementById("hoja3").classList.add("bloqueada");
    document.getElementById("hoja4").classList.add("bloqueada");
    document.getElementById("hoja5").classList.add("bloqueada");
}


document.getElementById("enviarQuiz").addEventListener("click",()=>{
    validarRespuestasQuiz();
})