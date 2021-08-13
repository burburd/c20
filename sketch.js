//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ballv2
var groundv2
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  //creating objects 
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   var ballv2_options = {
     restitution: 0.75,
     frictionAir: 0.1
    };

   var groundv2_options = {
     isStatic: true
   };
//creating the objects
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ballv2 = Bodies.circle(300,5,20,ballv2_options);
  World.add(world,ballv2);

  groundv2 = Bodies.rectangle(280,156,300,20,groundv2_options);
  World.add(world,groundv2);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  //drawing the objects
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(groundv2.position.x,groundv2.position.y,300,20);
  ellipse(ballv2.position.x,ballv2.position.y,20);
}

