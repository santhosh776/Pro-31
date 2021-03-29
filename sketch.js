const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var thunder1,thunder2,thunder3,thunder4;
var maxDrops=100;
var thunderCreatedFrame=0;
var drops=[];
function preload(){
    thunder1=loadImage("thunder1.png");
    thunder2=loadImage("thunder2.png");
    thunder3=loadImage("thunder3.png");
    thunder4=loadImage("thunder4.png");
}

function setup(){
        engine = Engine.create();
        world = engine.world;
     createCanvas(400,700);
   
   // man=createSprite(200,350,20,30);
   // man.addAnimation("man1",ManImg)
   // man.velocityX=3;
    umbrella=new umbrella(200,500);
    if(frameCount % 150 === 0){
    for(var i=0 ; i<maxDrops ; i++)
    {
          drops.push(new createDrop(random(0,400),random(0,400)))
    }
}
}

function draw(){

        Engine.update(engine);
 background("black")
 var rand = Math.round(random(1,4));
 if(frameCount % 60 === 0) {
        thunderCreatedFrame=frameCount
        var thunder=createSprite(random(10,370),random(10,30),10,10)
        
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
        
      }
   if(thunderCreatedFrame +50 === frameCount && thunder)
   {
        thunder.destroy();
   }
   umbrella.display();
   for (var i=0; i<maxDrops;i++){
           drops[i].showDrop()
           drops[i].updateY()
   }
   drawSprites();
}   

