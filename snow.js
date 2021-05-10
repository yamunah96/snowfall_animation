class Snow {
    constructor(x, y) {
        var options = {
            friction: 0.5,
            restitution: 1.0,
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.image = loadImage("snow4.webp");
        this.r = 50;
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("red");
        fill("pink");
        image(this.image,0, 0, 90,90);
        pop();
    }
   
};