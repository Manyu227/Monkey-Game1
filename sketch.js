
var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400)  

 monkey=createSprite(100,310,40,40)
 monkey.addAnimation("moving",monkey_running)
 monkey.scale=0.1
  
 ground=createSprite(500,350,1000,10)
  ground.velocityX=-4
  ground.x=ground.width/2
}


function draw() {
background("white") 
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  spawnObstacles();
  spawnFood();
  textSize(20)
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50)
drawSprites();
}

function spawnObstacles() {
if (frameCount%300===0){
obstacle=createSprite(100,315,40,40)
obstacle.addImage("boom",obstacleImage) 
obstacle.x=Math.round(random(200,300))
obstacle.scale=0.1
obstacle.collide(ground) 
obstacle.velocityX=-3  
}  
 
}
function spawnFood (){
if (frameCount%50===0){
banana=createSprite(100,315,40,40)
banana.addImage("eat",bananaImage) 
banana.y=Math.round(random(120,200))
banana.scale=0.1
banana.velocityX=-7
 
} 
  
}



