const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

var score = 0;
var score2 = 0;

function preload(){

  hookimg = loadImage("hook.png");

  win = loadSound("win.mp3");

}

function setup(){

  createCanvas(1366, 625);

  engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 625, 1366, 20);

  right = new Ground(1366, 625/2, 20, 1366);
  left = new Ground(0, 625/2, 20, 1366);

  ball = new Ball(200, 200);
  ball2 = new Ball(500, 200);

  hook1 = new Hook(1235, 140);
  hook2 = new Hook(1325, 140);
  hook3 = new Hook(1310, 190);
  hook4 = new Hook(1250, 190);

  f = createSprite(200, 200, 20, 20);
  f.shapeColor = ("red");

  g = createSprite(500, 200, 20, 20);
  g.shapeColor = ("blue");

  fix = createSprite(1280, 179, 5, 5);
  fix.visible = false;

}

function draw(){

  background("black");

  Engine.update(engine);

  f.x = ball.body.position.x;
  f.y = ball.body.position.y;

  g.x = ball2.body.position.x;
  g.y = ball2.body.position.y;

  Matter.Body.applyForce(ball.body, ball.body.position, {	x : 0, y : 10 });
  Matter.Body.applyForce(ball2.body, ball2.body.position, {	x : 0, y : 10 });

  textSize(20);
  fill("red")
  text("Score: "+ score, 30, 50);

  textSize(20);
  fill("blue")
  text("Score: "+ score2, 30, 100);

  ball.display();
  ball2.display();

  hook1.display();
  hook2.display();
  hook3.display();
  hook4.display();

  image(hookimg, 1230, 100, 130, 130);

  ground.display();
  right.display();
  left.display();

  if(f.isTouching(fix)){

    score = score + 1;
    win.play();

  }

  if(g.isTouching(fix)){

    score2 = score2 + 1;
    win.play();

  }

  drawSprites();

}

function keyPressed(){

	if(keyCode === UP_ARROW){

	  Matter.Body.applyForce(ball.body, ball.body.position, {	x : 0, y : -103 });

	}

  if(keyCode === LEFT_ARROW){

	  Matter.Body.applyForce(ball.body, ball.body.position, {	x : -100, y : 0 });

	}

  if(keyCode === RIGHT_ARROW){

	  Matter.Body.applyForce(ball.body, ball.body.position, {	x : 100, y : 0 });

	}

	if(keyCode === 87){

	  Matter.Body.applyForce(ball2.body, ball2.body.position, {	x : 0, y : -103 });

	}

  if(keyCode === 65){

	  Matter.Body.applyForce(ball2.body, ball2.body.position, {	x : -100, y : 0 });

	}

  if(keyCode === 68){

	  Matter.Body.applyForce(ball2.body, ball2.body.position, {	x : 100, y : 0 });

	}

}