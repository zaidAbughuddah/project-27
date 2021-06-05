class Bob {
    constructor(x,y) {
      var options = {
          restitution:1,
          friction:0,
          density:7.8
      }
      this.body = Bodies.circle(x,y,25,options);
      this.radius = 25;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //console.log(this.body);
      //push();
      ellipseMode(RADIUS);
      //fill("pink");
      ellipse(pos.x, pos.y, this.radius, this.radius);
      //pop();
    }
  };
  