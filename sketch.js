var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var cube;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
cube= new Cube(400,200,10,10);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  cube.display();
}