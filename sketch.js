var snow,snow2,snow3,snow4,snow;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}


function preload() {
  snow = loadImage("snow3.jpg")
  snow2 = loadImage ("snow4.webp")
}

function draw() {
  background(snow);  
  if (frameCount%10===0) {
    snow3= createSprite(random(0,800),10,50,50)
    snow3.addImage(snow2)
    snow3.velocityY=2
    snow3.scale=0.1
  }
  drawSprites();
}