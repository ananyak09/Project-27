var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,roof;
var rope,rope2,rope3 , rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(390,230,345,20);
	bobObject1 = new Bob(390,400);
	bobObject2 = new Bob(435,400);
	bobObject3 = new Bob(480,400);
	bobObject4 = new Bob(345,400);
	bobObject5 = new Bob(300,400);
    bobDiameter = 30;
	rope = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:10});
	}
}