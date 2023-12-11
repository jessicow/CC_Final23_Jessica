let sprite; //using p5 play and p5 sound - remember to push to repository regularly
let test; 
function setup() 
{
	createCanvas(800, 800);
	background(255);

	sprite = new Sprite(400, 400, 50, 50, 'kinematic'); //Sprite(x, y, w, h, collider type)
	test = new Sprite(400, 400, 50, 50, 'static'); 

	
}

function draw() {
	clear(); 
	
	if(mouse.presses()){
		sprite.moveTo(mouse.x, mouse.y, 9); 
	}
}