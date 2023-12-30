class Torus extends threedshape{

    constructor(x, y, speedX, speedY, radius, tubeRadius)
    {
        super(x,y, speedX, speedY);
        this.radius = radius;
        this.tubeRadius = tubeRadius;

    }

    draw()
    {
        push();
        super.moveShape();
        torus(this.radius, this.tubeRadius);
        pop();
    }
}