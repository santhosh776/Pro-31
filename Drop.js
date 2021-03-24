class Drop{
    constructor(x, y) {
        var options = {
            'restitution':0.0,
            'friction':0.1,
            'density':0.1
        }
        this.rain = Bodies.circle(x, y, this.r, options);
        this.r=30
        World.add(world, this.rain);
        this.createDrop = [];
      }
      display(){
        var angle = this.body.angle;
        var maxDrops=100
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse( 0, 0, this.r);
        pop();

        if(this.rain.position.y > height)
        {
          Matter.Body.setPosition(this.rain,{x:random (0,600),y:random(0,600)})
        }

        for(i=0 ; i<maxDrops ; i++)
        {
              maxDrops.push(new createDrop(random(0,600),random(0,600)))
        }
      }
}