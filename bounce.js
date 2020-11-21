var movingRect, fixedRect;
function setup() {
  createCanvas(800,800);

 movingRect = createSprite(400,100, 50, 50);
 fixedRect = createSprite(400,700,90,70);

 movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";

 movingRect.debug = true;
 fixedRect.debug = true;

 movingRect.velocityY=2;
 fixedRect.velocityY=-2;

}

function draw() {
  background(0); 
  
 
  console.log(movingRect.x);

 /* if(fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2&&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2&&
    fixedRect.y - movingRect.y<= fixedRect.height/2 + movingRect.height/2){

    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }*/

  if(fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2){
        movingRect.velocityX = -movingRect.velocityX;
        fixedRect.velocityX = - fixedRect.velocityX;
    }
    if(movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2&&
        fixedRect.y - movingRect.y<= fixedRect.height/2 + movingRect.height/2){
            movingRect.velocityY = -movingRect.velocityY;
            fixedRect.velocityY = -movingRect.velocityY;
        }


  drawSprites();
}