class Sling {
  constructor(body1,pointB){
var Op = {

bodyA:body1,
pointB:pointB,
stiffness:0.4,
length:15    
}
this.pointB=pointB;
this.sling = Constraint.create(Op)
World.add(world,this.sling);
  }

fly (){
this.sling.bodyA=null;
}


display(){

 if(this.sling.bodyA){
  var point1 = this.sling.bodyA.position
  var point2 = this.pointB
  
  line (point1.x,point1.y,point2.x,point2.y);
 } 



}
}