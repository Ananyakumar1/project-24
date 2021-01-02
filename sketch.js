
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,side,paper;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	ground = new Ground(600,height,1200,20)
	side1  = new Side(1000,380,200,15)
	side2  = new Side(900,347,15,80)
	side3  = new Side(1100,347,15,80)
	paperball = new Paper(100,100,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  paperball.display();
}

function keyPressed(){
   if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paperball.body,paperball.body.position,{x:6,y:-6})
   }
}

