class createDrop{
    constructor(x, y) {
        var options = {
            restitution:0.0,
            friction:0.001,
        
        }
        this.rain = Bodies.circle(x, y, 30, options);
        this.r=30
        World.add(world, this.rain);
        
      }
     updateY()
     {
      if(this.rain.position.y > height)
      {
        Matter.Body.setPosition(this.rain,{x:random (0,400),y:random(0,400)})
      }
     }
  showDrop()  
  {
    fill("blue")
    ellipseMode(CENTER);
    ellipse( this.rain.position.x,this.rain.position.y ,this.r,this.r);
  }  
}


 

 