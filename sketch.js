
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer= new Hammer(200, 100)
	plane = new Plane(500,height-20,1000,40)
	stone1= new Stone(100, 200, 70, 100)
	stone2= new Stone(700, 200, 100, 70)
	rubber1= new Rubber()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.display()
  plane.display()
  stone1.display()
  stone2.display()
  rubber1.display();
  drawSprites();
 
}



