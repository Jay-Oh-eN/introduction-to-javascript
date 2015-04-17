var pulse;
var red = 0;
var green = 0;
var blue = 0;

var t_red = 0;
var t_green = 0;
var t_blue = 0;


function setup() {
  createCanvas(1440, 800);    
  // Create and start the pulse wave oscillator
  pulse = new p5.Pulse();
  pulse.amp(0.5);
  pulse.freq(220);
  pulse.start();
}

function draw() {
  background(red, green, blue);
  red = 255/2 * sin(t_red) + 255/2;
  green = 255/2 * sin(t_green) + 255/2;
  blue = 255/2 * sin(t_blue) + 255/2;

  t_red = t_red + 0.01;
  t_green = t_green + 0.05;
  t_blue = t_blue + 0.09;
  var w = map(mouseX, 0, width, 0, 1);
  w = constrain(w, 0, 1);
  var v = map(mouseY, 0, height, 0, 1);
  v = constrain(v, 0, 1);
  masterVolume(v)
  pulse.width(w)
}
