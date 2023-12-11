let sprite; //using p5 play and p5 sound
function setup() 
{
	createCanvas(800, 800);
	background(255);

	sprite = new Sprite(); 
	sprite.width = 50;
	sprite.height = 50; 
}

function draw() {
	clear(); 
	
	if(mouse.presses() && ((mouse.x>0 && mouse.x<800) && (mouse.y>0 && mouse.y <800))){
		sprite.moveTo(mouse.x, mouse.y, 9); 
	}
}