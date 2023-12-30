var shape1, shape2, shape3;
var shapes = [];
var currentNumber = 0;
function setup()
{
    createCanvas(800,800, WEBGL);
    shape1 = new Box(random(100,200),random(100,200), .02, .05, 50, 25);
    shape2 = new Torus(random(-50,-200),random(-10,-200), .01, .1, 30, 20);
    shape3 = new Torus(random(-50,-200),random(80,300), .08, .03, 80, 40);
    
    shapes[0] = shape1;
    shapes[1] = shape2;
    shapes[2] = shape3;


    setInterval(changeShape, 1000);
}

function draw()
{
    background(120,100, 40);
   // console.log(round(random(0,2)));
    
   shapes[currentNumber].draw();
    

}

function changeShape()
{
    currentNumber = round(random(0,2));
}