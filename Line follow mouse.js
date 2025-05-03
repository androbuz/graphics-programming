function setup() {
    createCanvas(900, 600);
    background(0);
    rectMode(CENTER); // to rotate from the center
    ball = new Ball;
}

function draw() {
    ball.run();
}

class Ball{
    constructor(){
        this.velocity = new createVector(random(2, -2), random(2, -2));
        this.acceleration = new createVector(+0.3, +0.3);
        this.location = new createVector(random(width), random(height));
        this.normal = this.location.copy();
        this.prevLocation = this.location;
    }

    draw(){
        stroke(255);
        strokeWeight(3);
        fill(255);
        line(this.prevLocation.x, this.prevLocation.y, this.location.x, this.location.y);
        this.prevLocation = this.location.copy();
        // ellipse(this.location.x, this.location.y, 40, 40);
    }
    
    move(){
        var mouse = createVector(mouseX, mouseY);
        var dir = p5.Vector.sub(mouse, this.location);
        dir.normalize();
        dir.mult(0.3);
        this.acceleration = dir;
        
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
    }

    run(){
        this.draw();
        this.move();
        this.bounce();
    }

    bounce(){
        if (this.location.x > width || this.location.x < 0) this.velocity.x *= -1;
        if (this.location.y > height || this.location.y < 0) this.velocity.y *= -1;
    }
}
