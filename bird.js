function Bird(){
    this.y = height/2;
    this.x = 65;
    
    this.gravity = 0.6;
    this.lift = -16;
    this.velocity = 0;
    
    this.show = function() {
        fill(238, 253, 0);
        noStroke();
        ellipse(this.x, this.y, 25, 25);
    }
    
    this.up = function(){
        this.velocity += this.lift;
        println(this.velocity);
    }
    
    
    this.update = function(){
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;
        
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

    }
}