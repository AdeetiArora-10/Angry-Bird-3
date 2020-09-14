class Chain {
  constructor(body1,body2){
var Op = {

bodyA:body1,
bodyB:body2,
stiffness:0.6,
length:15    
}
this.chain = Constraint.create(Op)
World.add(world,this.chain);
  }
display(){

var point1 = this.chain.bodyA.position
var point2 = this.chain.bodyB.position

line (point1.x,point1.y,point2.x,point2.y);

}
}