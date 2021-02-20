class Sand {
    constructor(x, y, r) {
        var options = {
            'restitution': 0.3,
            'friction': 5.0,
            'density': 1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(4);
        stroke("black");
        ellipse(0, 0, 15);
        pop();
    }
};