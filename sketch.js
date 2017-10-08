var GRAVITY = 0.3;
var SPEED = 3;
var bird;
var score;
var pipes = [];


function setup() {
    createCanvas(600, 600);
    bird = new Bird(50, height / 2, 15);
    score = 0;
    textAlign(CENTER);
    textSize(40);
}

function draw(){
    
    background(0, 155, 255);
    
    bird.update();
    bird.draw();
    
    if(frameCount % 60 === 0) {
        pipes.push(new Pipe(width, random(height / 2) + height /4, 200, color(score % 255, random(255), random(255))));
    }
    
    handlePipes();
    
    noStroke();
    text(score, 50, height - 20);
}

function handlePipes(){
      
    
    for(var i = 0; i < pipes.length; i++) {
    pipes[i].update();
    pipes[i].draw();
        
        if (bird.collidesWith(pipes[i])) { // if the player hits a pipe

    noLoop();
	noStroke();
	textSize(50);
	text("You lose!", width / 2, height / 2);
	textSize(40);
	text("Press f5 to restart!", width / 2, height / 2 + 30);
		} else if (!pipes[i].passed) { // if we haven't passed the pipe yet

			if (pipes[i].isPassed(bird.x)) // check to see if we pass it
				score++;
    }
    
 }
    
}


function keyPressed() {
    if (key == ' ') {
        bird.up(-6);
        console.log("SPACE");
    }
	
}


