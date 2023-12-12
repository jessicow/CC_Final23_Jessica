let iroh; //using p5 play and p5 sound - remember to push to repository regularly 
let tree;
let ground;
let tombstone

function preload(){
	tree = loadImg('green tree.png'); 
	ground = loadImg('background_grass.png'); 
	tombstone = loadImg('tombstone.png');
}

function setup() 
{
	createCanvas(500, 500);
	//background(ground);

	iroh = new Sprite(250, 50, 20, 20, 'k'); //Sprite(x, y, w, h, collider type)
	

}

function draw() {
	clear(); 
	background(ground); 
	
	tree.resize(150, 150); 
	image(tree, 25, 50);
	
	tombstone.resize(100, 100); 
	image(tombstone, 200, 230); 
	
	if(mouse.presses() && mouse.x<400){
		iroh.moveTo(mouse.x, mouse.y, 5);  
	}
	

	
	
	
	
	
}