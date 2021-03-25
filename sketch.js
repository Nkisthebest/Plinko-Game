const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world ,ground;
var divisions = [];
var plinkos = [];
var particles = [];
function setup() {
  createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground();
  p1 = new Particle(200,200,10);
}
function draw() {
  background(0); 
  Engine.update(engine);
  for( var k = 10 ; k<=width;k=k+60){
    divisions.push(division=new Division(k,640,10,200));
    division.display();
  }
  for(var j = 50 ; j<=500;j=j+50){
    for( var i = 20 ; i<= width ; i = i + 50){
      plinkos.push(plink = new Plinko(i,j,5));
      plink.display();
    }
  }
  for(var l = 50 ; l<=475; l = l+50){
    particles.push(part = new Particle(l,25,10));
    part.display();
  }
  ground.display();
}