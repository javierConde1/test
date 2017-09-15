new Rect(10, 10, 100, 100)
.addTo(stage)
.attr('fillColor', 'cyan')

  /*.animate(new KeyframeAnimation('5s',{
    from: {x:0, y:0},
    '0.05%': {x:1000, y:0},
    to: {x:0, y:0}
  }))*/
  .animate(new KeyframeAnimation('5s',{
    from: {x:600, y:0},
    '0.05%': {x:300, y:0},
    to: {x:600, y:200},
    '0.05%': {x:0, y:100},
  }));

  /*new Circ(10,10,10,100,100)
  .addTo(stage)
  .attr('fillColor', 'cyan');*/