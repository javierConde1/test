var Objeto1 = new Object(); 
var Objeto2 = new Object();
Objeto1.X = 5;
Objeto1.Y = 10;
Objeto2.X = 6;
Objeto2.Y = 11;

function DistanciaDeObj (){
    var long = Math.pow((Objeto1.X - Objeto2.X),2);
    var lat = Math.pow((Objeto1.Y - Objeto2.Y),2);
    var D = Math.sqrt((long + lat));
    return D;
}

console.log("La distancia entre los objetos es = " + DistanciaDeObj());
