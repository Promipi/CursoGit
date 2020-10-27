// JavaScript source code
var caja = document.getElementById("text_lines");
var boton = document.getElementById("boton1");
var botoncalcu = document.getElementById("btnCalcu");
var numero1 = document.getElementById("num1");
var numero2 = document.getElementById("num2");



boton.addEventListener("click", funcion);
botoncalcu.addEventListener("click", calcular);

function funcion() {

    var lineas = caja.value
    alert("El texto que tienes adentro es : " + lineas)
}

function calcular() {

    var resultado = int.parse(numero1.value) + int.parse(numero2.value);
    alert("La suma es : " + resultado);
}
