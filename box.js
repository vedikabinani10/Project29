class Box {
    constructor(x, y, width, height) {
      var options ={
        restitution:0.04,
        friction:0.07,
        density:0.004
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
       rectMode(CENTER);
       rect(this.body.position.x,this.body.position.y,this.width,this.height);
  }
}
