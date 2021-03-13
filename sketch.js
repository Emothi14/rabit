var garden,rabbit;
var gardenImg,rabbitImg;
var orangel,orangeimg;
var redl,redimg;
var apple,appleimg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  orangeimg=loadImage("orangeLeaf.png")
  redimg=loadImage("redImage.png")
  appleimg=loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX

  {
  if(frameCount%60==0){
spawnapple()}
    else
    if(frameCount%40==0)
    {spawnredl()}
  else
    if(frameCount%40==0)
{
  spawnorangel()
}
  
  
  
  }
  drawSprites();
}

function spawnapple(){
apple =createSprite(random(50,350),40,10,10);
apple.addImage(appleimg);
apple.scale=0.1;
apple.velocity.y=10;

}

function spawnredl()
{
  redl=createSprite(random(50,360),40,50,30,30)
  redl.addImage(redimg)
  redl.scale=0.1;
  redl.velocity.y=8;
  redl.lifetime=150
}

function spawnorangel()
{
  orangel=createSprite(random(50,350),40,50,10,10)
  orangel=addImage(orangeimg)
  orangel.scale=0.1
  orangel.velocity.y=8
  orangel.lifetime=50
  
  
  
}