/* Mostrar pantalla principal */
function mostrarPagina() {
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
                            mostrarFelicitacion(correctas, "leccion1", modsig,"cuestionario1");
                        } else {
                            mostrarFallo(correctas,"cuestionario1");
                        }
                    });
                });
                break;

            case "hoja-2":
                document.getElementById("lecciones").classList.toggle("oculto");
                document.getElementById("leccion2").classList.toggle("oculto");
                break;
            case "hoja-3":
                document.getElementById("lecciones").classList.toggle("oculto");
                document.getElementById("leccion3").classList.toggle("oculto");
                break;
            case "hoja-4":
                document.getElementById("lecciones").classList.toggle("oculto");
                document.getElementById("leccion4").classList.toggle("oculto");
                break;
            case "hoja-5":
                document.getElementById("lecciones").classList.toggle("oculto");
                document.getElementById("leccion5").classList.toggle("oculto");
                break;
            default:
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
function mostrarFelicitacion(puntaje, leccionKey, modsig,leccionnum) {
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

/* Validar respuestas manualmente (si se usa por separado) */

/* Validar progreso de módulos */
document.getElementById("hoja2").addEventListener("click", () => {
    const aprobada = localStorage.getItem("leccion1");
    if (aprobada === "true") {
        mostrarPaginaModulos(2);
    } else {
        alert("Primero debes aprobar la Lección 1 para continuar.");
    }
});

document.getElementById("hoja3").addEventListener("click", () => {
    const aprobada = localStorage.getItem("leccion2");
    if (aprobada === "true") {
        mostrarPaginaModulos(3);
    } else {
        alert("Primero debes aprobar la Lección 2 para continuar.");
    }
});

document.getElementById("hoja4").addEventListener("click", () => {
    const aprobada = localStorage.getItem("leccion3");
    if (aprobada === "true") {
        mostrarPaginaModulos(4);
    } else {
        alert("Primero debes aprobar la Lección 3 para continuar.");
    }
});

document.getElementById("hoja5").addEventListener("click", () => {
    const aprobada = localStorage.getItem("leccion4");
    if (aprobada === "true") {
        mostrarPaginaModulos(5);
    } else {
        alert("Primero debes aprobar la Lección 4 para continuar.");
    }
});

/* Bloquear módulos si no se han aprobado */
function actualizarBloqueoModulos() {
    for (let i = 2; i <= 5; i++) {
        const aprobado = localStorage.getItem(`leccion${i - 1}`);
        const hoja = document.getElementById(`hoja${i}`);
        if (aprobado !== "true") {
            hoja.classList.add("bloqueada");
        } else {
            hoja.classList.remove("bloqueada");
            hoja.classList.add("desbloqueado");
        }
    }
}

actualizarBloqueoModulos();

/* Si usas validación externa */
