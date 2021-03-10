class Rubber {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':2
      }
      this.body = Bodies.circle(200,100,2, options);
      this.radius=2
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill ('cyan')
      ellipse(0,0, this.width, this.height);
      pop();
    }
  };