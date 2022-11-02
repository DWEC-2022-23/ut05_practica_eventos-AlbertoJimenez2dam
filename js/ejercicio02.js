hidden = [null, false, false, false];
curBlock = 1;

function muestraOculta() {
    if (hidden[curBlock]) {
        document.getElementById('enlace_' + curBlock).innerHTML = 'Ocultar contenidos';
        document.getElementById('contenidos_' + curBlock).style.display = 'block';

        hidden[curBlock] = false;
    } else {
        document.getElementById('enlace_' + curBlock).innerHTML = 'Mostrar contenidos';
        document.getElementById('contenidos_' + curBlock).style.display = 'none';

        hidden[curBlock] = true;
    }
}

for (let i = 1; i <= 3; i++) {
    document.getElementById('enlace_' + i).addEventListener('click', function() {
        curBlock = i;
        muestraOculta();
    });
}