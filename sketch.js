var fixedRect,movingRect 

function setup() {
  createCanvas(1500,600);
  fixedRect = createSprite(200,200,80,100);
  movingRect = createSprite(400,400,80,100);
}

function draw() {
  background("cyan");  
movingRect.x = mouseX;
movingRect.y = mouseY;

if(movingRect.x - fixedRect.x <  movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
   movingRect.y- fixedRect.y < movingRect.width/2 + fixedRect.width/2 &&
   fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2){
  movingRect.shapeColor = "red"
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}



  drawSprites();
}




