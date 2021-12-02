class Cube{
    constructor(x,y,width,height){
var options = {
    density:1,
    friction:1,
    restitution:0.5
}
this.body=Bodies.rectangle(x,y,width,height);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){
    var angle=this.body.angle;
    var position=this.body.position;
    push();
    rectMode(CENTER);
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    rect(0,0,this.width,this.height);
    strokeWeight(4);
    stroke("magenta");
    fill("black");
    pop();
}
}