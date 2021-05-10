const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies

var bgimage1;
var engine, world;
var snow=[]

function preload() {
  bgimage1=loadAnimation("snow3.jpg","snow2.jpg","snow3.jpg")

 
}


function setup() {
  createCanvas(800,400);
  engine= Engine.create()
  world= engine.world;
  
  
}

function draw() {
  background(0); 
  Engine.update(engine)
  animation(bgimage1, 300, 200);
  snow.push(new Snow(random(0,800),0))
  for(var i=0; i<snow.length;i=i+1){
   snow[i].display()
  }

}