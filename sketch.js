var mouse,mouseImg,cat,catImg,Background,bgImg;


function preload() {
    //load the images here
    mouseImg = loadImage("mouse1.png");
    catImg = loadImage("cat1.png");
    bgImg = loadImage("garden.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    mouseImg2 = loadAnimation("mouse2.png","\mouse3.png");
    catImg3 = loadImage("cat4.png");
    mouseImg3 = loadImage("mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    //Background = createSprite(1000,800);
    //Background.addImage("bg",bgImg);

    mouse = createSprite(300,700,40,40);
    mouse.addImage("mouse",mouseImg);
    mouse.scale = 0.2;

    cat = createSprite(700,700,40,40);
    cat.addImage("cat",catImg);
    cat.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <(cat.width - mouse.width)/2){

        cat.velocityX = 0;
        mouse.addAnimation("mousehappy",mouseImg3);
        cat.x = 400;
        mouse.changeAnimation("mousehappy");
        
        
        cat.addAnimation("cathappy",catImg3);
        cat.changeAnimation("cathappy");
        
        
    }
    //keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW){

    mouse.addAnimation("mouseteasing",mouseImg2);
    mouse.changeAnimation("mouseteasing");
    mouse.framedelay = 25;

    cat.addAnimation("catmoving",catImg2);
    cat.changeAnimation("catmoving");
    cat.framedelay = 25;
    cat.x = cat.x - 50
  }
}
