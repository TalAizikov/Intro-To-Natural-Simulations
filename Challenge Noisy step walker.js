var Walker = function() {
    this.x = width/2;
    this.y = height/2;
    this.tx = 0;
    this.ty = 10000;
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.x, this.y);
};

Walker.prototype.walk = function() {
 
    var xStepSize = map(noise(this.tx), 0, 1, -5, 5);
    var yStepSize = map(noise(this.ty), 0, 1, -5, 5);

    this.x += xStepSize;
    this.y += yStepSize;
    
    this.tx += 0.01;
    this.ty += 0.01;
};

var w = new Walker();

var draw = function() {
    w.walk();
    w.display();
};
