class Particle{
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(this.body.position.x, this.body.position.y, this.radius);
    }       
}