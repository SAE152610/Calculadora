function setResultado (value) {
    document.getElementById('resultado').innerHTML = value;
}

function getResultado (){
    return(document.getElementById('resultado').innerHTML);
}

function add(key) {
    var resultado = getResultado();
    if (resultado!= isNaN(key)) setResultado(resultado + key)
    else setResultado(key);
}

function igual () {
    var resultado = eval(getResultado ());
    setResultado(resultado)
}

function cancelar () {
    setResultado(0)
}