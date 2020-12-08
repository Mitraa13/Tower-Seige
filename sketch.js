const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,ground1,polygon;
var backgroundImg,date;
var box1,box2,box3box4,box5,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15,box16;
var b1,b2,b3,b4,b5;
var b6,b7,b8,b9;

var Score = 0;


function preload() {
  getTime();
}

function setup() {
  createCanvas(1350,650);
  stroke(255)

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(500+100,550-100,250,20);
  ground1 = new Ground(1050,200,200,20);
  base = new Ground(width/2,600,width,30);
  polygon = new hexagon(150,height/2,50,50);

  //level 1
  box1 = new box(500+100,520-100,25,40);
  box2 = new box(475+100,520-100,25,40);
  box3 = new box(525+100,520-100,25,40);
  box4 = new box(450+100,520-100,25,40);
  box5 = new box(550+100,520-100,25,40);
  box6 = new box(425+100,520-100,25,40);
  box7 = new box(575+100,520-100,25,40);

  //level 2
  box8 = new box(500+100,480-100,25,40);
  box9 = new box(475+100,480-100,25,40);
  box10 = new box(525+100,480-100,25,40);
  box11 = new box(450+100,480-100,25,40);
  box12 = new box(550+100,480-100,25,40);

  //level 3  and 4
  box13 = new box(475+100,440-100,25,40);
  box14 = new box(500+100,440-100,25,40);
  box15 = new box(525+100,440-100,25,40);
  box16 = new box(500+100,400-100,25,40);

  //lvl 1
  b1 = new box(1050,170,25,40);
  b2 = new box(1025,170,25,40);
  b3 = new box(1075,170,25,40);
  b4 = new box(1000,170,25,40);
  b5 = new box(1100,170,25,40);

  //lvl 2 and 3
  b6 = new box(1050,130,25,40);
  b7 = new box(1025,130,25,40);
  b8 = new box(1075,130,25,40);

  b9 = new box(1050,90,25,40);

  chain = new SlingShot(polygon.body,{x:150 , y:200});
 
}

function draw() {

  if(backgroundImg)
  background(backgroundImg);

  Engine.update(engine);  
  
  stroke("black");
  fill(135,206,234);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill(254,191,202);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill(62,223,207);
  box13.display();
  box14.display();
  box15.display();
  fill(128,128,128);
  box16.display();

  fill(135,206,234);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  fill(62,223,207);
  b6.display();
  b7.display();
  b8.display();
  fill(254,191,202);
  b9.display();

  ground.display();
  ground1.display();
  polygon.display();
  chain.display();
  base.display();

  fill("white");
  stroke("black");
  textSize(20);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  text("Press Space to get a second chance",100,60);
  textSize(20);
  text("Score:"+Score,1250,50);

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX , y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed ()
{
  if(keyCode === 32){
    chain.attach(polygon.body);
  }
} 

async function getTime(){

  var getinfo = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var getinfoType = await getinfo.json();
  console.log(getinfoType);

  var dt = getinfoType.datetime;
  console.log(dt);

  var time = dt.slice(11,13);
  console.log(time);

  if((time>=0600) && (time<=1900)){
      bg = "bg.jpg";
  } else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);

}
