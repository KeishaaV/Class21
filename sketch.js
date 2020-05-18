var moving, fixed;
var fixedRect, movingRect;

function setup() {
  createCanvas(800,600);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  moving= createSprite(200, 390, 50, 80);
  moving.shapeColor= "pink";

  fixed= createSprite(200,20,50,50);
  fixed.shapeColor= "red"; 

  moving.velocityY=-5;
  fixed.velocityY=5; 
}

function draw() {

  background(0);
 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 bounceOff(moving,fixed);  

 if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "pink";
  fixedRect.shapeColor = "pink";
  }else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }

  drawSprites();
}
