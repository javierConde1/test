var cuadrado = new Rect(10, 10, 100, 100);
cuadrado.addTo(stage);
cuadrado.fill('red');

var rectac = new Rect(100,150,150,250)
.addTo(stage)
.attr('fillColor','black');

var circulo = new Circle(500,250,100,0,150)
.addTo(stage)
.attr('fillColor','cyan');