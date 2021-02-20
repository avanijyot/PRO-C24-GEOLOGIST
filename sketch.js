//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {

  //to create the canvas
	createCanvas(800, 700);

  //to create the engine and world
	engine = Engine.create();
  world = engine.world;
  
  //to create the stone, plane, iron, rubber, sand and hammer
  stone = new Stone(700, 660, 90, 80);

  plane = new Plane(400, height, 800, 20);
  
  iron = new Iron(200, 680, 70, 40);

  rubber = new Rubber(500, 695, 50);

  sand1 = new Sand(100, 698, 10);
  sand2 = new Sand(370, 698, 10);
  sand3 = new Sand(380, 698, 10);
  sand4 = new Sand(390, 698, 10);
  sand5 = new Sand(290, 698, 10);
  sand6 = new Sand(280, 698, 10);
  sand7 = new Sand(580, 698, 10);
  sand8 = new Sand(590, 698, 10);

  hammer = new Hammer(50, 50, 150, 30);

  //to run the engine
	Engine.run(engine);
  
}


function draw() {

  //rectMode
  rectMode(CENTER);

  //to give the background
  background("lightBlue");

  //to display the plane, stone, iron, rubber, sand and hammer
  plane.display();

  stone.display();

  iron.display();

  rubber.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();

  hammer.display();

  //to draw the objects
  drawSprites();
 
}