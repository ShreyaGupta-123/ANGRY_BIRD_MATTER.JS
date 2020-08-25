const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;

var world,engine,bodies;
var box1, box2,box3,box4,box5,ground;
var pig,pig2;
var log,log2,log3,log4;
var bird,bird2;
var platform;
var slingShot;
var bg;

function preload(){
  bg=loadImage('Sprites/bg.png');
}

function setup(){
var canvas=createCanvas(1200,400);
engine=Engine.create();
world=engine.world;

box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
box3=new Box(700,240,70,70);
box4=new Box(920,240,70,70);
box5=new Box(810,160,70,70);

ground=new Ground(600,390,1200,20);

pig=new Pig(810,350,50,50);
pig2=new Pig(810,220,50,50);

platform=new Ground(150,305,300,170);

log=new Log(810,260,300,PI/2);
log2=new Log(810,180,300,PI/2);
log3=new Log(760,120,150,PI/7);
log4=new Log(870,120,150,-PI/7);

bird=new Bird(100,100,50,50);

slingShot=new Slingshot(bird.body,{x:200,y:50});
}

function draw() {
  background(bg); 
  Engine.update(engine) ;
  box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();

platform.display();

 ground.display();

 pig.display();
 pig2.display();

 log.display();
 log2.display();
 log3.display();
 log4.display();

 bird.display();
 slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}
