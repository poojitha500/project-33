const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



var bg;
var snow1, snowImg;

function preload(){
bg = loadImage("snow1.jpg");
snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
 //snow1 = new Snow(400,0,10,10);
}

function draw() {
  background(bg);  
  Engine.update(engine);
  var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
}
  if(frameCount%90===0){
    snow1 = createSprite(random(10,700),10,10,10,options);
 snow1.addImage(snowImg);
  snow1.scale = 0.1;
  snow1.velocityY = 2;
  }
 // snow1.display();
  drawSprites();
}