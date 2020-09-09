
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImage;
var boy,boyImage;
var ground;
var stone,string;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango0;
        
function preload()
{
    boyImage = loadImage("boy.png");
    treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1360, 620);

	boy = createSprite(300,480);
	boy.addImage("Boy_Image",boyImage);
    boy.scale = 0.18;
    
    tree = createSprite(1080,330);
    tree.addImage("Tree_Image",treeImage);
    tree.scale = 0.5

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

    ground = new Ground(680,600,1360,50);
    
    
    mango1 = new Mango(1000,200,50,50);
    mango2 = new Mango(1000,280,80,80);
    mango3 = new Mango(910,275,40,40);
    mango4 = new Mango(1100,150,65,65);
    mango5 = new Mango(1100,240,75,75);
    mango6 = new Mango(1150,300,45,45);
    mango7 = new Mango(1200,230,78,78);
    mango8 = new Mango(1170,100,30,30);
    mango9 = new Mango(1200,150,50,50);
    mango0 = new Mango(1300,275,100,100);

    
    
    bird = new Bird(600,100);

    slingshot = new Slingshot(bird.body,{x:200,y:380});

    string1 = new Strings(mango1.body,{x:1000,y:160});
    string2 = new Strings(mango2.body,{x:1000,y:240});
    string3 = new Strings(mango3.body,{x:910,y:235});
    string4 = new Strings(mango4.body,{x:1100,y:110});
    string5 = new Strings(mango5.body,{x:1100,y:200});
    string6 = new Strings(mango6.body,{x:1100,y:260});
    string7 = new Strings(mango7.body,{x:1200,y:190});
    string8 = new Strings(mango8.body,{x:1170,y:60});
    string9 = new Strings(mango9.body,{x:1200,y:110});
    string0 = new Strings(mango0.body,{x:1300,y:230});
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();


  ground.display();


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango0.display();

  detectCollision(bird,mango1);
  detectCollision(bird,mango2);
  detectCollision(bird,mango3);
  detectCollision(bird,mango4);
  detectCollision(bird,mango5);
  detectCollision(bird,mango6);
  detectCollision(bird,mango7);
  detectCollision(bird,mango8);
  detectCollision(bird,mango0);
  detectCollision(bird,mango9);

  fill("red");
  textSize(40);
  text("You have 1 chance to drop as much mango",30,100);
  text("as you can",300,150);

  keyPressed();
 
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  string6.display();
  string7.display();
  string8.display();
  string9.display();
  string0.display();

  bird.display();
  slingshot.display();
  
}

function mouseDragged()
{
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        Matter.Body.setPosition(bird.body, {x:200,y:380})
        slingshot.attach(bird.body);
    }
}
function detectCollision(lbird,lmango)
{
   var mangoBodyPosition = lmango.body.position;
   var birdBodyPosition = lbird.body.position;

   var distance = dist(birdBodyPosition.x,birdBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

   if(distance<= lmango.r + lbird.r)
   {
      string1.fly();
   }
   console.log(distance);
}



