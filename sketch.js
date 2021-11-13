var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
var toca;

function preload(){
  toca1 = loadSound("jump.wav");
  toca2 = loadSound("tono4.mp3");
  toca3 = loadSound("tono1.mp3");
  toca4 = loadSound("tono2.mp3");
  toca5 = loadSound("tono5.mp3");
  toca6 = loadSound("tono6.mp3");
  toca7 = loadSound("tono7.mp3");
}


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(Toca(movingRect, gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
    toca5.play();

  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
    

  }
  if(Toca(movingRect, gameObject2)){
    movingRect.shapeColor = "yellow";
    gameObject2.shapeColor = "yellow";
    toca2.play();
  }
  else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
  if(Toca(movingRect, gameObject3)){
    movingRect.shapeColor = "purple";
    gameObject3.shapeColor = "purple";
    toca3.play();
  }
  else {
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }
  if(Toca(movingRect, gameObject4)){
    movingRect.shapeColor = "orange";
    gameObject4.shapeColor = "orange";
    toca4.play();
  }
  else {
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }
  if(Toca(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
   toca6.play();
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}