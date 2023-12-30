let myImage;
let myObject;
let movement = 1;
let x = -400;
let myRobots = [];

let myRobot, myRobot2;
function preload()
{
    myObject = loadModel("./assets/robot.obj");
    
    
}
function setup()
{
    createCanvas(800,600, WEBGL);
    myImage = loadImage("./images/space3.jpeg");

    for(var i = 0; i < 8; i++)
    {
        myRobot = new robot(myObject, x, 1);
        myRobots[i] = myRobot;
        x+= 100;  
    }
}

function draw()
{
    background(120);
    push();
    translate(0,0,-100);
    noStroke();
    texture(myImage);
    plane(1000,800);
    pop();
   for(var i = 0; i < myRobots.length; i++)
    {
        myRobots[i].updateDirection(myRobots[0].getOffset(),myRobots[myRobots.length-1].getOffset());
        myRobots[i].moveRobot();
        myRobots[i].drawRobot();
    }


   
}