mouseMoved = function() {
    background(255, 255, 255);
    
    var mouse = new PVector(mouseX, mouseY);
    fill(0);
    stroke(255, 0, 0);
    strokeWeight(3);
    line(0, 0, mouse.x, mouse.y);
    var n = mouse.mag();
    text(n, mouse.x,mouse.y);
    
    var d = dist(0,0,width,height);
    var m = map(n,0,d,0,255);
    background (m, m, m);
};
