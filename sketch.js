
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var ball
var Yeet


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

    soundFormats('mp3', 'ogg');
    Yeet = loadSound("sprites/yeet-sound-effect (1).mp3")

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	ball = new Ball(100,500)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  ball.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:160,y:-160})
		Yeet.play()
	}
}

