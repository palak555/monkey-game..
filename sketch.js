var PLAY=1;
var END=0;
var gameState=1;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survival_time=0;
var invisibleGround;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(700,400);
  
  ground = createSprite(280,390,2000,30);
  ground.shapeColor="brown";
  ground.velocityX=-4;
  ground.x = ground.width /2; 
  console.log(ground.x);
  
  
  monkey=createSprite(150,330,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;

  
  
  invisibleGround=createSprite(290,400,2000,30);
  invisibleGround.visible=false;
  
}


function draw() {
  background("lightGreen");
  if(gameState===PLAY){
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    
  }
  monkey.velocityY=monkey.velocityY+0.8;  
  
  monkey.collide(invisibleGround);
  
  bananasGroup= new Group();
  obstaclesGroup= new Group();
   
  createBananas();
  createObstacles();
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  stroke("lightGreen");
  textSize(20);
  fill("lightGreen");
  text("score: "+score, 500,50);
  
  stroke("black");
  textSize(21);
  fill("black");
  survival_time=Math.ceil(frameCount/frameRate() )
  text("survival_time "+survival_time,100,50);
    
     monkey.setCollider("rectangle",34,260,monkey.width,monkey.height);
  monkey.debug = false
  }
  
  if(gameState===END){
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX=0;
    invisibleGround.velocityX=0;
    fruitsGroup.destroyEach();
    obstaclesGroup.destroyEach();
    
  }
  } 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}

function createBananas(){
  if(frameCount%80===0){
    var bananas=createSprite(600,300,10,10);
    bananas.y=Math.round(random(150,260));
    bananas.addImage(bananaImage);
    bananas.scale=0.1;
    bananas.velocityX=-3;
    bananas.lifetime=400;
    bananasGroup.add(bananas);
    }
}

function createObstacles(){
  if(frameCount%200===0){
    var obstacles=createSprite(650,370,10,10);
    obstacles.addImage(obstacleImage);
    obstacles.scale=0.1;
    obstacles.velocityX=-4;
    obstacles.lifetime=600;
    obstaclesGroup.add(obstacles);
    
    
  }
}

   
  





  
  
  
  
  
 
  




















