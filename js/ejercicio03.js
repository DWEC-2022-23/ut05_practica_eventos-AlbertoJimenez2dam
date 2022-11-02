var info = document.getElementById('info');

var infoTitle = document.getElementById('infoTitle');

var infoLine1 = document.getElementById('infoLine1');
var infoLine2 = document.getElementById('infoLine2');

// Detects mouse move
window.addEventListener('mousemove', event => {
    info.style.backgroundColor = '#FFFFFF';

    onMouse(event);
}, true);

// Detects mouse click
window.addEventListener('mousedown', event => {
    info.style.backgroundColor = '#FFFFCC';

    onMouse(event);
}, true);

// Detects keyboard click
window.addEventListener('keydown', event => {
    info.style.backgroundColor = '#CCE6FF';

    infoTitle.innerHTML = 'Teclado';
    infoLine1.innerHTML = 'Carácter [' + event.key + ']';
    infoLine2.innerHTML = 'Código [' + event.key.charCodeAt(0) + ']';
}, true);

function onMouse(event) {
    infoTitle.innerHTML = 'Raton';
    infoLine1.innerHTML = 'Navegador [' + event.screenX + ', ' + event.screenY + ']';
    infoLine2.innerHTML = 'Página [' + event.pageX + ', ' + event.pageY + ']';
}