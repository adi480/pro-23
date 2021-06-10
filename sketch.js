var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var city,cityIMG ;
var armyman1,armymanIMG1;
var armyman2,armymanIMG2;
var armyman3,armymanIMG3;
var armyman4,armymanIMG4;
var lightAnimation;
var light;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	cityIMG=loadImage("city.png");
	armymanIMG1=loadImage("army man 1.png");
	armymanIMG2=loadImage("army man 2.png");
	armymanIMG3=loadImage("army man 3.png");
    armymanIMG4=loadImage("army man 2.png");
	lightAnimation=loadAnimation("light.png","light2.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);



	city=createSprite(400, 350,800,700);
	city.addImage(cityIMG);



	


  //army man
  armyman1=createSprite(560, 640,50,50);
  armyman1.addImage(armymanIMG1);
  armyman1.scale=0.3;

  armyman2=createSprite(200, 643,50,50);
  armyman2.addImage(armymanIMG2);
  armyman2.scale=0.5;

  armyman3=createSprite(630, 643,50,50);
  armyman3.addImage(armymanIMG3);
  armyman3.scale=0.5;

  armyman4=createSprite(180, 380,50,50);
  armyman4.addImage(armymanIMG4);
  armyman4.scale=0.5;




	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2,160, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1.5

	groundSprite=createSprite(width/2, height-10   , width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 4 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 665, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 boxPosition=width/2-100
 	boxY=635;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);
	 
	 light=createSprite(400, 450,5,5);
	light.addAnimation("light",lightAnimation);
	lightAnimation.scale=0.02;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  drawSprites();
 
}

function keyPressed() {

if (keyCode === RIGHT_ARROW ){
	helicopterSprite.x+=helicopterSprite.x=20; 
	packageSprite.x+=packageSprite.x=20;
}
if (keyCode === LEFT_ARROW ){
	helicopterSprite.x+=helicopterSprite.x=-20; 
	packageSprite.x+=packageSprite.x=20;
}



 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);  
    //helicopterSprite.velocityX=30;
  }
}



