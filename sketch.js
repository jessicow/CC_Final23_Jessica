let iroh; //using p5 play and p5 sound - remember to push to repository regularly 
let tree;
let ground;
let tombstone;
let pixelFont;
let button; 
let a; 

let first, second, third, fourth, fifth; 

function preload(){
	tree = loadImage('green tree.png'); 
	ground = loadImage('background_grass.png'); 
	tombstone = loadImage('tombstone.png');
	pixelFont = loadFont('Minecraft.ttf'); 
}

function setup() 
{
	createCanvas(500, 500);
	
	a = 0; 

	iroh = new Sprite(250, 50, 20, 20, 'k'); //Sprite(x, y, w, h, collider type)
	button = new Sprite(250, 450, 70, 35, 'k');
	noStroke(); 
	button.color = "green"; 
	//button.text = 'yes'; 
	
	first = true; 
	
	textFont(pixelFont); 
	textSize(40);  

}

function draw() {
	//clear(); 
	
	if(first){
		background(ground); 
	
	 tree.resize(150, 150); 
	 image(tree, 25, 50);
		
		textBox();
		
		if(button.mouse.hovering() && mouseClicked()){
	  fill(0, a); 
		a++; 
		rect(0, 0, 500, 500);
}
		
		
		
	}
	
	//tombstone.resize(100, 100); 
	//image(tombstone, 200, 230); 
	
	if(mouse.presses()){
		iroh.moveTo(mouse.x, mouse.y, 3);  
	}
	
}

function textBox(){
	if((iroh.x>75 && iroh.x<150) && (iroh.y>60 && iroh.y<175)){
			fill(0); 
		  rect(50, 375, 400, 100);
		
		  fill(255);
		  text('view memories?', 110, 420); 
		
		button.color = 'white';
		button.text = "yes"; 
		
			
	}
	
	
}

function mouseClicked(){
	return true;
}

function scene1(){
	/*fill(0);
	for(let i = 255.0; i>=0.0; i-=.5){
		rect(0, 0, 500, 500, i); 
	}*/
}
