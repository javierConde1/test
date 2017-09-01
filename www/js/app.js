var base = 5;
var altura = 7;
var diametro = 10;
var radio = 5;
var areaRectangulo = base * altura;
var areaCirculo = Math.PI * Math.pow(radio,2);
var areaTriangulo = (base * altura) / 2;
var volumenEsfera = Math.PI * Math.pow(diametro, 3);
console.log("El area de mi rectangulo es igual : " + areaRectangulo);
console.log("El area de mi cirulo es igual : " + areaCirculo);
console.log("El area de mi triangulo es igual : " + areaTriangulo);
console.log("El volumen de mi esfera es igual : " + volumenEsfera);

function saludo (){
    console.log("Hola Javier");
}

saludo();

var nombre = "javier";
function saludar(){
    if(true){
        var nombre = "alejandro";
    }
    console.log(`Hola ${nombre}`);
}
saludar()

function saludar10(){
    let i=0
    for(i; i<10; i++){
        console.log(`Hola ${nombre}`);
    }
    console.log(`El valor de i es ${i}`);
}
saludar10();