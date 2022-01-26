const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    player = new Player();
    ground = new Ground();
    
}

function draw(){
    console.log(player.body.position.x);
    background("gray");
    Engine.update(engine);
    ground.display();
    player.display();
    player.showLife();
}