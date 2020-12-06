class Box {
  constructor(x, y){

   this.body = Bodies.rectangle(x,y,30,40); 
   World.add(world,this.body);
  }



  display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    angleMode(RADIANS);
    rotate(this.body.angle);
   fill("green")
  rectMode(CENTER);
  rect(0,0,30,40);
pop();
  }
};
