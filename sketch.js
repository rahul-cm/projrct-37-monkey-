var backImage,backgr;
var player, player_running;
var ground,ground_img;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacle_img;
var groundd;


var count=0;

function preload(){
player_running = loadAnimation("images/Monkey_01.png","images/Monkey_02.png","images/Monkey_03.png","images/Monkey_04.png","images/Monkey_05.png","images/Monkey_06.png","images/Monkey_07.png","images/Monkey_08.png","images/Monkey_09.png","images/Monkey_10.png");
  
backImage=loadImage("images/jungle2.jpg");
  
bananaImg=loadImage("images/Banana.png");
obstacle_img=loadImage("images/stone.png");
  }


function setup(){
  
 createCanvas(400,400);
  
 //backgr=createSprite(200,200,400,400);
  //backgr.addAnimation("backgr",backImage);
  //backgr.x = backgr.width/2;
  //backgr.velocityX = -2; 
  //backgr.scale = 1.3;
  
  player=createSprite(50,340,20,20);
  player.addAnimation("running", player_running);
  player.scale=0.09;
  player.x = player.x+10;
  
  //ground=createSprite(50,370,400,10);
  //ground.visible=false;
  
 
  
  
  FoodGroup=new Group();
  obstaclesGroup=new Group();

stroke("white");
textSize(25);
fill("white");
textFont("Arial");
}

function draw(){
  
  background(backImage);
  
  //count = count+Math.round(getFrameRate()/60);
  camera.x = player.x;
  
  if (keyDown("space")) {
      player.velocityY = -17;
     }
  
     if(keyDown("k")){
      player.x = player.x+10;
      groundd.width = 10*groundd.width;
    }

    if(keyDown("j")){
      player.x = player.x-10;
      groundd.width = 10*groundd.width;
    }
  //adding gravity
  player.velocityY = player.velocityY + 0.8 ;
  

  
 if(obstaclesGroup.isTouching(player)&&count>=50){
    
    
    }

    for(var i=0;i<=camera.x+800;i=i+100){
      groundd = createSprite(i,390,i+800,10);
      groundd.visible = false;
    }
  
  //player.collide(ground);
  player.collide(groundd);
  
  spawnbanana();
  spawnobstacles();
  increasesize();
  resetsize();
  
  drawSprites();
  
  text("Score: "+ count,camera.x,50);
  
  
}

function spawnbanana (){
  if (frameCount % 100 === 0) {
  var banana = createSprite(camera.x+(random(20,110)),200,20,20);
  banana.addImage("banana",bananaImg);
  banana.y = Math.round(random(120,200));
  banana.scale = 0.05;
  banana.velocityX = -1;
  FoodGroup.add(banana);
  }
}  

function spawnobstacles (){
  if (frameCount % 100 === 0) {
  var obstacle = createSprite(400,200,20,20);
  obstacle.addImage("obstacle",obstacle_img);
  obstacle.y = 360;
  obstacle.scale = 0.07;
  obstacle.velocityX = -4;
  obstaclesGroup.add(obstacle);
  }
}

function increasesize(){
  
if(FoodGroup.isTouching(player)){
    count=count+5; 
    FoodGroup.destroyEach();
    var rand = Math.round(random(1,5));
  
    //switch(rand){
      //case 1:player.scale=0.12;
       //       break;
              
      //case 2:player.scale=0.14;
        //      break;
    
     // case 3:player.scale=0.16;
       //       break;
              
      //case 4:player.scale=0.18;
              //break;
              
      //case 5:player.scale=0.20;
        //      break;
              
      //default:break;
    //} 
}  
}  

function resetsize(){
  
if(obstaclesGroup.isTouching(player)){
   
  player.scale=0.09;
  obstaclesGroup.destroyEach();
  count=count-2;
   }
}

