var cuadrado = new Rect(10, 10, 100, 100);
cuadrado.addTo(stage);
cuadrado.fill('cyan');
cuadrado.animate('1.5s', {
  rotation: Math.PI*2,
  x: 700,
  fillColor: 'black'
});
var cuadrado = new Rect(10, 10, 100, 100);
cuadrado.addTo(stage);
cuadrado.fill('green');
cuadrado.animate('1.5s', {
  rotation: Math.PI*2,
  y: 550,
  fillColor: 'gray'
});

var cuadrado = new Rect(10, 10, 100, 100);
cuadrado.addTo(stage);
cuadrado.fill('red');
cuadrado.animate('1.5s', {
  rotation: Math.PI*2,
  x: 700,
  y:550,
  fillColor: 'green'
});