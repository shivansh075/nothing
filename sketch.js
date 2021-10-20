var flyingcow , flyingcowImg ;
var ground ;
var angrycow , angrycowImg ;
var lasercow , lasercowImg ;
var okcow , okcowImg ;
var apple , appleImg;
var banana , bananaImg;
var rottenapple , rottenappleImg;
var rottenbanana , rottenbananaImg;
var strawberry , strawberryImg;
var rottenstrawberry , rottenstrawberryImg;
var grass , grassImg;
var jungle , jungleImg;
var sky , skyImg;
var trap , trapImg;
var volcano1 , volcano1Img;
var volcano2 , volcano2Img;
var playbuttons;
var restartbutton , restartbuttonImg;

function preload(){

    jungleImg = loadImage("jungle.png");
    skyImg = loadImage("sky.png");
    flyingcowImg = loadImage("flyingcow.png");
    okcowImg = loadImage("okcow.png");
    angrycowImg = loadImage("angrycow.png");
    lasercowImg = loadImage("lasercow.png");
    volcano1Img = loadImage("volcano1.png");
    volcano2Img = loadImage("volcano2.png");
    trapImg = loadImage("trap.png");
    grassImg = loadImage("grass.png");
    restartbuttonImg = loadImage("restartbutton.png");
    appleImg = loadImage("apple.png");
    rottenappleImg = loadImage("rottenapple.png");
    bananaImg = loadImage("banana.png");
    rottenbananaImg = loadImage("rottenbanana.png");
    strawberryImg = loadImage("strawberry.png");
    rottenstrawberryImg = loadImage("rottenstrawberry.png");
}

function setup() {
  createCanvas(windowWidth,200);
  jungle = createSprite(300,300);
  jungle.addImage(jungleImg);
}

function draw() {
background("black");

drawSprites();
}



