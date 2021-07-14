const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var maxDrops = 100;
var rainDrops = [];
var thunder = null;
var thunderFrame = 0;
function preload(){
  thunderAni = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/4.png","images/thunderbolt/3.png","images/thunderbolt/2.png")  
}

function setup(){
    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(width/2,500,30);
    for (var i = 0; i < maxDrops; i++) {
         rainDrops.push(new Drops(Math.round(random(50,width-50)),Math.round(random(0,height/2)),3));
    }
}

function draw(){
    background("black");
    Engine.update(engine);
    umbrella.display();
    for(var i = 0; i<maxDrops; i++) {
        rainDrops[i].display();
        rainDrops[i].updateY();
    }
    if(frameCount % 100 === 0) {
       thunderFrame = frameCount;
       thunder = createSprite(random(50,width-50),random(0,100),10,10);
       thunder.addAnimation("thunder", thunderAni);
       thunder.scale = 0.3;
    }
    if(thunderFrame + 10 === frameCount && thunder !== null) {
       thunder.destroy();
       thunder = null;
       thunderFrame = 0;
    }
    drawSprites();
}   

