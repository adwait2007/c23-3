// alias for the original name - namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

// our engine and world
var engine, world;
var box1,box2;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world // we create our world using property of engine world

  box1 = new Box(200,300,50,50);
  box2 = new Box(200,100,50,100);

  ground=new Ground(200,390,400,20);
}

function draw() {
  //background(255,255,255);  
  background(125,255,215); 
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
  //drawSprites();
}