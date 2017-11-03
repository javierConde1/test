var cuadrado = new Rect(10, 10, 100, 100);
cuadrado.addTo(stage);
cuadrado.fill('red');

var rectac = new Rect(100,150,150,250)
.addTo(stage)
.attr('fillColor','black');

var circulo = new Circle(500,250,100,0,150)
.addTo(stage)
.attr('fillColor','cyan');

var estrella = new Star(50,500,10,10,5)
.addTo(stage)
.attr('fillColor','cyan');

var poligono = new Ellipse(500,500,150,100)
.addTo(stage)
.attr('fillColor','brown');