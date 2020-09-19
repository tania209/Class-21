function setup() {
  createCanvas(800,800);
  fixed = createSprite(400, 500, 100, 100);
  moving = createSprite(300,100,50,50);

  fixed2 = createSprite(400,100,60,60);
  fixed2.velocityY= 5;
  
  fixed3 = createSprite(200,400,100,100);

  fixed4 = createSprite(600,400,150,150);

  fixed4.velocityX = -2;
}

function draw() {
  background("blue"); 
 // moving.x = mouseX
 // moving.y = mouseY 


if(isTouching(moving,fixed4)){
  fixed4.shapeColor = "green";
  moving.shapeColor = "green";
}
else{
  fixed4.shapeColor = "red";
    moving.shapeColor = "red";
}
bounceOff(fixed,fixed2);
  text(moving.width/2+fixed.width/2,20,50);
  text(moving.x-fixed.x,400,50);
  drawSprites();
}
