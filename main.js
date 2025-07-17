/* Mostrar pantalla principal */
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("usuarioActivo") === "true") {
        document.getElementById("login").classList.add("oculto");
        document.getElementById("lecciones").classList.remove("oculto");
    }
});
function mostrarPagina() {
    localStorage.setItem("usuarioActivo", "true");
    document.getElementById("login").classList.add("oculto");
    document.getElementById("lecciones").classList.remove("oculto");
}

const botonInicio = document.getElementById("img-flecha");
botonInicio.addEventListener("click", () => {
    mostrarPagina();
});

/* Regresar desde teoría */
const botonesRegreso = document.getElementsByClassName("botonRegresarTeoria");
for (let i = 0; i < botonesRegreso.length; i++) {
    botonesRegreso[i].addEventListener("click", () => {
        document.getElementById("lecciones").classList.toggle("oculto");
        document.getElementById(`leccion${i + 1}`).classList.toggle("oculto");
    });
}

/* Evento para clic en módulos */
document.addEventListener('click', function (event) {
    const elementoClicado = event.target;
    if (elementoClicado.classList.contains("desbloqueado")) {
        switch (elementoClicado.id) {
            case "hoja-1":
                let modsig = "hoja2";
                document.getElementById("lecciones").classList.toggle("oculto");
                document.getElementById("leccion1").classList.toggle("oculto");
                document.getElementById("presentarQuiz1").addEventListener("click", () => {
                    document.getElementById("leccion1").classList.toggle("oculto");
                    document.getElementById("box-cuestionario1").classList.toggle("oculto");

                    document.getElementById("enviarQuiz").addEventListener("click", function () {
                        let correctas = 0;
                        document.getElementById("cuestionario1").classList.toggle("oculto");
                        for (let i = 1; i <= 4; i++) {
                            const opciones = document.getElementsByName("op-" + i);
                            for (let opcion of opciones) {
                                if (opcion.checked) {
                                    if (opcion.value === "1") {
                                        correctas++;
                                    }
                                    break;
                                }
                            }
                        }

                        if (correctas >= 3) {
                            mostrarFelicitacion(correctas, "leccion1","box-cuestionario1");
                        } else {
                            mostrarFallo(correctas,"cuestionario1");
                        }
                    });
                });
                break;

            case "hoja-2":
                document.getElementById("lecciones").classList.toggle("oculto");
                document.getElementById("leccion2").classList.toggle("oculto");
                document.getElementById("presentarQuiz2").addEventListener("click", () => {
                    document.getElementById("leccion2").classList.toggle("oculto");
                    document.getElementById("box-cuestionario2").classList.toggle("oculto");

                    document.getElementById("enviarQuiz2").addEventListener("click", function () {
                        let correctas = 0;
                        document.getElementById("cuestionario1").classList.toggle("oculto");
                        for (let i = 1; i <= 4; i++) {
                            const opciones = document.getElementsByName("op-" + i);
                            for (let opcion of opciones) {
                                if (opcion.checked) {
                                    if (opcion.value === "1") {
                                        correctas++;
                                    }
                                    break;
                                }
                            }
                        }

                        if (correctas >= 3) {
                            mostrarFelicitacion(correctas, "leccion2","box-cuestionario2");
                        } else {
                            mostrarFallo(correctas,"cuestionario1");
                        }
                    });
                });
                break;
                case "hoja-3":
                    document.getElementById("lecciones").classList.toggle("oculto");
                    document.getElementById("leccion3").classList.toggle("oculto");
                    document.getElementById("presentarQuiz3").addEventListener("click", () => {
                        document.getElementById("leccion3").classList.toggle("oculto");
                        document.getElementById("box-cuestionario3").classList.toggle("oculto");
    
                        document.getElementById("enviarQuiz3").addEventListener("click", function () {
                            let correctas = 0;
                            document.getElementById("cuestionario1").classList.toggle("oculto");
                            for (let i = 1; i <= 4; i++) {
                                const opciones = document.getElementsByName("op-" + i);
                                for (let opcion of opciones) {
                                    if (opcion.checked) {
                                        if (opcion.value === "1") {
                                            correctas++;
                                        }
                                        break;
                                    }
                                }
                            }
    
                            if (correctas >= 3) {
                                mostrarFelicitacion(correctas, "leccion3", "box-cuestionario3");
                            } else {
                                mostrarFallo(correctas, "cuestionario3");
                            }
                        });
                    });
                    break;
    
                case "hoja-4":

                    document.getElementById("lecciones").classList.toggle("oculto");
                    document.getElementById("leccion4").classList.toggle("oculto");
                    document.getElementById("presentarQuiz4").addEventListener("click", () => {
                        document.getElementById("leccion4").classList.toggle("oculto");
                        document.getElementById("box-cuestionario4").classList.toggle("oculto");
    
                        document.getElementById("enviarQuiz4").addEventListener("click", function () {
                            let correctas = 0;
                            document.getElementById("cuestionario1").classList.toggle("oculto");
                            for (let i = 1; i <= 4; i++) {
                                const opciones = document.getElementsByName("op-" + i);
                                for (let opcion of opciones) {
                                    if (opcion.checked) {
                                        if (opcion.value === "1") {
                                            correctas++;
                                        }
                                        break;
                                    }
                                }
                            }
    
                            if (correctas >= 3) {
                                mostrarFelicitacion(correctas, "leccion4","box-cuestionario4");
                            } else {
                                mostrarFallo(correctas, "cuestionario4");
                            }
                        });
                    });
                    break;
    
                case "hoja-5":
                    document.getElementById("lecciones").classList.toggle("oculto");
                    document.getElementById("leccion5").classList.toggle("oculto");
                    document.getElementById("presentarQuiz5").addEventListener("click", () => {
                        document.getElementById("leccion5").classList.toggle("oculto");
                        document.getElementById("box-cuestionario5").classList.toggle("oculto");
    
                        document.getElementById("enviarQuiz5").addEventListener("click", function () {
                            let correctas = 0;
                            document.getElementById("box-cuestionario5").classList.toggle("oculto");
                            for (let i = 1; i <= 4; i++) {
                                const opciones = document.getElementsByName("op-" + i);
                                for (let opcion of opciones) {
                                    if (opcion.checked) {
                                        if (opcion.value === "1") {
                                            correctas++;
                                        }
                                        break;
                                    }
                                }
                            }
    
                            if (correctas >= 3) {
                                mostrarFelicitacion(correctas, "leccion5", "box-cuestionario5");
                            } else {
                                mostrarFallo(correctas, "cuestionario1");
                            }
                        });
                    });
                    break;
    
        }
    }
});

/* Función para mostrar el quiz */
function presentarQuiz() {
    document.getElementById("teoria").style.display = "none";
    document.getElementById("cuestionario").style.display = "block";
}

const botonQuiz = document.getElementsByClassName("presentarQuiz");
for (let i = 0; i < botonQuiz.length; i++) {
    botonQuiz[i].addEventListener("click", () => {
        presentarQuiz();
    });
}

/* Mostrar mensaje de aprobación */
function mostrarFelicitacion(puntaje, leccionKey,leccionnum) {
    localStorage.setItem(leccionKey, "true");

    let felicidadesDiv = document.createElement("div");
    felicidadesDiv.classList.add("felicidades");

    document.getElementsByClassName("felicidades-mal")[0].classList.toggle("oculto");
    felicidadesDiv.innerHTML = `
        <h1>APROBASTE</h1>
        <h2>${puntaje}/4</h2>
        <img src="./img/ranafeli.png">
        <h2>Pasa al siguiente módulo</h2>
        <button id="continuarBtn">Continuar</button>`;
    document.getElementsByClassName("felicidades-mal")[0].appendChild(felicidadesDiv);

    document.getElementById("continuarBtn").addEventListener("click", function () {
        felicidadesDiv.remove();
        document.getElementById(leccionnum).classList.toggle("oculto");
        document.getElementsByClassName("felicidades-mal")[0].classList.toggle("oculto");
        location.reload();
    });
}

/* Mostrar mensaje de fallo */
function mostrarFallo(puntaje) {
    let malDiv = document.createElement("div");
    malDiv.classList.add("mal");

    document.getElementsByClassName("felicidades-mal")[0].classList.toggle("oculto");
    malDiv.innerHTML = `
        <h1>NO APROBASTE</h1>
        <h2>${puntaje}/4</h2>
        <img src="./img/ranatite.png">
        <h2>Intenta de nuevo</h2>
        <button id="continuarBtnFallo">Continuar</button>`;
    document.getElementsByClassName("felicidades-mal")[0].appendChild(malDiv);

    document.getElementById("continuarBtnFallo").addEventListener("click", function () {
        malDiv.remove();
        document.getElementsByClassName("felicidades-mal")[0].classList.toggle("oculto");
        location.reload();
    });
}


/* Bloquear módulos si no se han aprobado */

function actualizarBloqueoModulos() {
    for (let i = 2; i <= 5; i++) {
        const leccionAnterior = `leccion${i - 1}`;
        const moduloActual = document.getElementById(`hoja-${i}`);

        if (localStorage.getItem(leccionAnterior) === "true") {
            moduloActual.classList.remove("bloqueado");
            moduloActual.classList.add("desbloqueado");
        } else {
            moduloActual.classList.remove("desbloqueado");
            moduloActual.classList.add("bloqueado");
        }
    }
}

actualizarBloqueoModulos();