
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,ball,ground,world,engine;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin=new Dustbin(1200,650);
	ball=new Paper(200,450,40);
	ground=new Ground(width/2,670,width,20);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin.display();
  ball.display();
  ground.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:85, y:-85});
	}
}



