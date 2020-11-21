function isTouching(object1, object2){

    if(object1.x - object2.x <= object1.width/2 + object2.width/2 &&
      object2.x - object1.x <= object1.width/2 + object2.width/2&&
      object2.y - object1.y <= object1.height/2 + object2.height/2&&
      object1.y - object2.y<= object1.height/2 + object2.height/2){
  
      return true;
  
    }
    else{
      return false;
    }
    
  
  }
  
  function bounceOff(object3,ob4){
  
    if(object3.x - ob4.x <= object3.width/2+ob4.width/2 &&
      ob4.x - object3.x <= object3.width/2 + ob4.width/2){
       object3.velocityX=-object3.velocityX;
       ob4.velocityX=-ob4.velocityX;
      
      }
      if(object3.y - ob4.y <= object3.height/2 + ob4.height/2 &&
        ob4.y - object3.y <= object3.height/2 + ob4.height/2){
          ob4.velocityY=-ob4.velocityY;
          object3.velocityY=-object3.velocityY;
        }
  }