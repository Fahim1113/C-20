//objects
var fixedRect,movingRect;

function setup() {
  //canvas size
  createCanvas(1200,800);
  
  //creating the object with its properties
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
}

function draw() {
  //background colour to black
  background(0);
  
  //to set the y and x position of the moving object to move along the mouse
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x)
  
  //to see if the rectangles are touching eachother or not
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  //showing sprites
  drawSprites();
}