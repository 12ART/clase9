var box;


function setup() {
  createCanvas(800, 700);
  box = createSprite(200, 200, 50,50 );
}

function draw() {
  background("pink");
  
  if(keyIsDown(UP_ARROW)){
     box.y -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y += 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x -= 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    box.x += 5;
  }

  drawSprites();

}