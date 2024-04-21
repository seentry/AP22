    //ejercicio 1
document.addEventListener("DOMContentLoaded", main)

function main() {
    //ejercicio 2
    let parrafos = document.getElementsByTagName("p");

    for (let i = 0; i < parrafos.length; i++) {
        let palabras = parrafos[i].textContent.split(" ");

        parrafos[i].innerHTML += "<br><b>Total palabras: " + palabras.length + "</b>";

    //ejercicio 3
        let nulla = parrafos[i].textContent.includes("nulla");
        if (nulla) {
            let link = "<a href='http://google.com'>nulla</a>";
            parrafos[i].innerHTML = parrafos[i].innerHTML.replace("nulla",link);
        }

    }
    
    //ejercicio 4
    let foto = document.getElementsByTagName("h1");
    
    for (let i = 0; i < foto.length; i++) {
        let img = document.createElement("img");
        img.src = "https://lledogrupo.com/wp-content/uploads/2019/01/star-256.png";
        img.style.width = "16px";
        img.style.marginLeft = "10px";
        foto[i].appendChild(img);
    }

    //ejercicio 5
    let abstract = document.getElementById("abstract");
    let click = false;

    abstract.addEventListener("click", function() {
    abstract.style.backgroundColor = click ? "lightgreen" : "lightblue";
    click = !click;
    });

    //ejercicio 6
    let tamañoOriginal = 1;
    let tamañoActual = tamañoOriginal;
    let incremento = 0.2;

    document.getElementById('content').addEventListener('click', function() {
        tamañoActual += incremento;
        if (tamañoActual <= tamañoOriginal * 2) {
            this.style.fontSize = tamañoActual + 'em';
        } else {
            tamañoActual = tamañoOriginal;
            this.style.fontSize = tamañoOriginal + 'em';
        }
    });



    //ejercicio 8
        var divHora = document.createElement("div");
        divHora.textContent = obtenerHoraActual();
        divHora.style.backgroundColor = "red";
        divHora.style.border = "1px solid black";
        divHora.style.color = "white";
        divHora.style.position = "fixed";
        divHora.style.display = "none";

    // Adjuntar el elemento div al documento
    document.body.appendChild(divHora);

    // Obtener todos los párrafos
    var parrafosD = document.getElementsByTagName("p");

    // Iterar sobre los párrafos
    for (var i = 0; i < parrafosD.length; i++) {
        parrafosD[i].addEventListener("mouseover", function() {
            divHora.style.display = "block"; // Mostrar el div al pasar el ratón sobre el párrafo
        });

        parrafosD[i].addEventListener("mouseout", function() {
            divHora.style.display = "none"; // Ocultar el div al salir del párrafo
        });
    }

    // Agregar el evento mousemove al documento para actualizar la posición del div
    document.addEventListener("mousemove", function(event) {
        var distancia = 5; // Distancia del div al cursor
        var mouseX = event.clientX + distancia; // Posición X del cursor
        var mouseY = event.clientY + distancia; // Posición Y del cursor

        // Establecer la posición del div
        divHora.style.left = mouseX + "px";
        divHora.style.top = mouseY + "px";

        // Actualizar la hora actual en el div
        divHora.textContent = obtenerHoraActual();
    });



    // Función para obtener la hora actual con minutos y segundos
    function obtenerHoraActual() {
        var ahora = new Date();
        var hora = ahora.getHours();
        var minutos = ahora.getMinutes();
        var segundos = ahora.getSeconds();

        // Formatear la hora actual
        return hora + ":" + minutos + ":" + segundos;
    }
}

    //ejercicio 7
    function OcultarMostrar() {
        let oculta = document.getElementsByClassName("oculta");
    
        for (let i = 0; i < oculta.length; i++) {
            let boton = oculta[i];
            let div = boton.nextElementSibling;
    
            if (div.style.display == "none" || div.style.display == "") {
                div.style.display = "block";
                boton.textContent = "Oculta";
            } else {
                div.style.display = "none";
                
                boton.textContent = "Muestra";
            }
        }
    }


