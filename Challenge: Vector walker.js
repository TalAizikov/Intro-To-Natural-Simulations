var Walker = function() {
    this.pos = new PVector(width/2,height/2);
}; 


Walker.prototype.display = function() {
    strokeWeight(7);
    stroke(10, 15, 26);
    point(this.pos.x, this.pos.y);
};

Walker.prototype.walk = function() {
 
  var velocity = new PVector( random(-7,7), random(-7,7));
  this.pos.add(velocity);
   
};

var w = new Walker();

var draw = function() {
    w.walk();
    w.display();
};
