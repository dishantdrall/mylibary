var movingRect, fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup() {
  createCanvas(800,800);

 movingRect = createSprite(200, 200, 50, 50);
 fixedRect = createSprite(400,400,90,70);

 movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";

 gameObject1 = createSprite(100,100, 50, 50);
 gameObject2 = createSprite(300, 100, 50, 50);
 gameObject3 = createSprite(500, 100, 50, 50);
 gameObject4 = createSprite(700, 100, 50, 50);

 gameObject1.shapeColor = "blue";
 gameObject2.shapeColor = "blue";
 gameObject3.shapeColor = "blue";
 gameObject4.shapeColor = "blue";

 movingRect.debug = true;
 fixedRect.debug = true;

 gameObject1.velocityX=3;
 gameObject4.velocityX=-3;
}

function draw() {
  background(0); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect, gameObject2)){
    gameObject2.shapeColor = "yellow";
    movingRect.shapeColor = "purple";

  }
  if(isTouching(movingRect, gameObject4)){
    gameObject4.shapeColor = "pink";
    movingRect.shapeColor = "brown";
  }
  

  console.log(movingRect.x);
  bounceOff(gameObject1,gameObject4);
 
  drawSprites();
}

