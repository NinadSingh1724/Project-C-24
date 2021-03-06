class Dustbin{
    constructor(x,y){

        this.x = x;
        this.y = y;
        this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
		this.angle=0;

        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic: true});
        this.leftBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic: true});
        Matter.Body.setAngle(this.leftBody, this.angle);

        this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic: true});
        Matter.Body.setAngle(this.rightBody, (-1)*this.angle);
        
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }

    display(){
        var bottomPos = this.bottomBody.position;
        var leftPos = this.leftBody.position;
        var rightPos = this.rightBody.position;

        push();
        translate(leftPos.x, leftPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke(255);
        fill(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness, this.dustbinHeight);
        pop();

        push();
        translate(rightPos.x, rightPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke(255);
        fill(255);
        rotate(-1*this.angle);
        rect(0,0,this.wallThickness, this.dustbinHeight);
        pop();

        push();
        translate(bottomPos.x, bottomPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke(255);
        fill(255);
        rect(0,0,this.dustbinWidth, this.wallThickness);
        pop();
    }
}