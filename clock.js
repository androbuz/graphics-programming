function setup() {
    createCanvas(900, 600);
    background(0);
    rectMode(CENTER); // to rotate from the center
    clock = new Clock;
}

function draw() {
    clock.draw();
}

class Clock{
    constructor(){
        this.angleSec = 45;
        this.angleMin = 45;
        this.angleHr = 45;
        this.minPadding = 2;
        this.HrPadding = 10;
        this.speedMin = 45;
        this.speedHr = 0.001;
        this.speedSec = 0.15;
        
        this.minOffset = 60;
        this.radius = 200;
        this.radiusMin = 50;
        this.radiusHr = 20;
        this.ellipseX = 200;
    }
    
    draw(){
        this.angleSec += this.speedSec;
        
        if (round(this.angleSec % (360 + 45)) == 0){
            console.log("A minute has passed!");
            this.angleMin += this.minPadding;
        }
        
        if (round(this.angleMin % (360 + 45)) == 0){
            console.log("An hour has passed!");
            this.angleHr += this.HrPadding;
        }
        
        ellipse(this.ellipseX, this.ellipseX, this.radius);
        
        //for seconds
        push();
        fill(0);
        translate(this.ellipseX, this.ellipseX);
        rotate(radians(this.angleSec));
        line(0, 0, 0, - this.radius);
        pop();
        
        //for minutes
        push();
        fill(0);
        translate(this.ellipseX, this.ellipseX);
        rotate(radians(this.angleMin));
        line(0, 0, - this.radiusMin, - this.radiusMin);
        // console.log("-radius + minOffset:" + (-radius + minOffset));
        pop();
        
        //for hours
        push();
        fill(128);
        translate(this.ellipseX, this.ellipseX);
        rotate(radians(this.angleHr));
        line(0, 0, 0, - this.radiusHr);
        // console.log("-radius + minOffset:" + (-radius + minOffset));
        pop();        
    }
}
