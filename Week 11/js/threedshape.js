class threedshape{
    constructor(x,y, speedX, speedY)
    {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;

    }

    moveShape()
    {
        translate(this.x, this.y);
        rotateX(frameCount * this.speedX);
        rotateY(frameCount * this.speedY);
        
    }
}