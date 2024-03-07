// contador de visitas

let visitas = localStorage.getItem('contadorVisitas');


if (!visitas) {
    visitas = 0;
}

visitas++;

localStorage.setItem('contadorVisitas', visitas);

document.getElementById('contadorVisitas').textContent = visitas;

//REESTABLECER CONTADOR DE VISITAS

const Reestablecer = document.getElementById("btnReestablecer");
const contadorVisitas = document.getElementById("contadorVisitas");



btnReestablecer.onclick = function() {
    visitas = 0;
    contadorVisitas.innerHTML = visitas;
}

