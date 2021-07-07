
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bottom,left,middle,right;
var ball;

let throwCount=1;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth-20, windowHeight-20);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bottom=new ground(width/2,height-100,width*2,20);
	left=new ground(width*(2/3),height-145,15,75);
	middle=new ground(width*(2/3)+100,height-145,15,75);
	right=new ground(width*(2/3)+200,height-145,15,75);

	ball=Bodies.circle(width/2-20,50,20,{
		friction:0,
		restitution:0.3,
		//density:1.2,
	});
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(250,60,0));
  
	bottom.display();
	left.display();
	middle.display();
	right.display();

	ellipse(ball.position.x,ball.position.y,30);

  drawSprites();

  fill("black");
  textSize(20)

  if(keyWentDown("0")) {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:0});
  }
  if(throwCount==1) {
	text(`Press up arrow to throw the ball\nPress space to restart\nYou have ${throwCount} number of move(s) left`,50,50);
	}
	else {
		text(`You have exhausted your ${throwCount} moves!\nPress space to restart`,50,50);
	}
 
}

function keyPressed() {
	if(keyCode==UP_ARROW) {
		if(throwCount==1) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0.03});
		throwCount=0;
		}
	}
	if(keyCode==32) {
		throwCount=1;
		Matter.Body.setPosition(ball, {x:width/2-20,y:50})
		ball.force={x:0,y:0};

		ellipse(ball.position.x,ball.position.y,30);
	}
}



