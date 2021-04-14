var canvas;
var music;
var wall1,wall2,wall3,wall4
var ball

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    wall1 = createSprite(100,500,150,20)
   wall2 = createSprite(300,500,150,20)
   wall3 = createSprite(500,500,150,20)
  wall4 = createSprite(700,500,150,20)

   wall1.shapeColor="red"
   wall2.shapeColor="blue"
   wall3.shapeColor="green"
   wall4.shapeColor="black"
   
   ball = createSprite(random(20,750),100,50,50)
   ball.shapeColor="brown"
   ball.velocityX=5
   ball.velocityY=5
}

function draw() {
    background(rgb(169,169,169));
    drawSprites()
    edge=createEdgeSprites()
    ball.bounceOff(edge)
    if(ball.isTouching(wall1)&& ball.bounceOff(wall1)){
        ball.shapeColor="red"
    }
    if(ball.isTouching(wall2)&& ball.bounceOff(wall2)){
        ball.shapeColor="blue"
    }
    if(ball.isTouching(wall3)&& ball.bounceOff(wall3)){
        ball.shapeColor="green"
    }if(ball.isTouching(wall4)&& ball.bounceOff(wall4)){
        ball.shapeColor="black"
    }
}
