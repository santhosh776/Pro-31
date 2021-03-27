const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var man,ManImg;
var thunder1,thunder2,thunder3,thunder4;
function preload(){
    thunder1=loadImage("thunder1.png");
    thunder2=loadImage("thunder2.png");
    thunder3=loadImage("thunder3.png");
    thunder4=loadImage("thunder4.png");
}

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
   // man=createSprite(200,350,20,30);
   // man.addAnimation("man1",ManImg)
   // man.velocityX=3;
    man=new umbrella(200,350);
}

function draw(){
 background("black")

 Engine.update(engine);

 



}   

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    thunderCreatedFrame=frameCount
    var thunder=createSprite(random(10,370),random(10,30),10,10)
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: thunder.addImage(thunder1);
              break;
      case 2: thunder.addImage(thunder2);
              break;
      case 3: thunder.addImage(thunder3);
              break;
      case 4: thunder.addImage(thunder4);
              break;
      default: break;
    }   
    thunder.scale=random(0.3,0.6)
    thunder.LifeTime=100
  }
}