const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground,platform,block1,block2,block3,block4,block5,block6,block7,block8,block9;

var engine,world;

function setup() {
  createCanvas(800,400);
  
engine = Engine.create();
world = engine.world;
  ground = new Ground(600,height,1200,20);
    platform = new Ground(600, 150, 120, 20);
    platform2 = new Ground(500,250,240,20);

    block1 = new Box(570,140);
    block2 = new Box(600,130);
    block3 = new Box(630,120);
    block4 = new Box(630,110);
    block5 = new Box(600,100);

    block6 = new Box(570,90);
    block7 =  new Box(600,80);
    //block8 =  new Box(420,195);

    //block9 = new Box(390,155);

    polygon = Bodies.circle(50,200,20);
    World.add(world,this.body);

    slingShot = new SlingShot(this.polygon,{x:100,y:200});

    imageMode(CENTER);

    image(polygon_immg,polygon.position.x,polygon.position.y,40,40);
    
}




function draw() {
  background("red");  
  
Engine.update(engine);

ground.display();
platform.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
platform2.display();
 }