var ground;
var doctor;
var bg
var obstacle1,mask1,sani1;
var coronaGroup,maskGroup,sanitizerGroup;
function preload(){
bg = loadImage("Images/bg-min.png")
}
function setup(){
    createCanvas(1200,800);
    ground = new Ground(600,780,1200,20);
    doctor = new Doctor(100,700,40,100);
    obstacle1 = new Obstacle(600,400,100,100);
    mask1 = new Collect();
    sani1 = new Collect();
    coronaGroup = new Group();
    maskGroup = new Group();
    sanitizerGroup = new Group();
}
function draw(){
    background(bg);
    doctor.body.collide(ground.body);
    //doctor.body.bounceOff(ground.body);
    ground.body.debug = true;
    ground.reset();
    doctor.check();
    doctor.jump();
    mask1.spawnMask();
    sani1.spawnSanitizer();
    obstacle1.spawn();
    drawSprites();
}