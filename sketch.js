var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var line1Sprite,line2Sprite,line3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	line1Sprite=createSprite(300,600,10,120,{isStatic:true});
    line1Sprite.shapeColor=color("RED")
	line2Sprite=createSprite(500,600,10,120,{isStatic:true});
    line2Sprite.shapeColor=color("RED")
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
    line3Sprite=createSprite(400,655,190,10,{isStatic:true});
    line3Sprite.shapeColor=color("RED")
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

    
   
	groundSprite=createSprite(width/2, height-35, width,10,{isStatic:true});
	groundSprite.shapeColor=color(255)
    

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	console.log(packageBody);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x = packageBody.position.x
  packageSprite.y = packageBody.position.y
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);}}



