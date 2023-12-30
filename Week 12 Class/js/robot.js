class robot{

    constructor(modelObject, offset, movement)
    {
        this.modelObject = modelObject;
        this.offset = offset;
        this.movement = movement;
    }

    getOffset()
    {
        return this.offset;
    }

    drawRobot()
    {
       
        push();
        translate(this.offset,0);
        rotateX(frameCount * .01);
        rotateZ(60);
        rotateY(270);
        normalMaterial();
        model(this.modelObject);
        pop();
    }

    moveRobot()
    {
        this.offset+=this.movement;
    }

    updateDirection(first, last)
    {
       if(last >= 400 || first <= -450)
        {
            this.movement *= -1;
        } 
    }
}