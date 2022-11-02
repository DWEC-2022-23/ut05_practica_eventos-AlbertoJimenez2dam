function setTriple() {
    document.getElementById('numero').innerHTML = document.getElementById('numero').innerHTML * 3;
}

document.getElementById('numero').ondblclick = function() {
    setTriple()
};