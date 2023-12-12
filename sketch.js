let iroh; //using p5 play and p5 sound - remember to push to repository regularly 
let tree;
let ground;
let tombstone;
let minecraftFont;
let continueForward; 

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

	iroh = new Sprite(250, 50, 20, 20, 'k'); //Sprite(x, y, w, h, collider type)
	
	first = true; 
	
	textFont(pixelFont); 
	textSize(40); 

}

function draw() {
	clear(); 
	
	if(first){
		background(ground); 
	
	tree.resize(150, 150); 
	image(tree, 25, 50);
		
		/*if((iroh.x>75 && iroh.x<150) && (iroh.y>60 && iroh.y<150)){
			fill(0); 
			text = new Sprite(250, 425, 400, 100, 's'); 
			text.color = 'orange'; 
			text.text = 'see memories?';
		} */
		
		scene1(); 
	}
	
	//tombstone.resize(100, 100); 
	//image(tombstone, 200, 230); 
	
	if(mouse.presses()){
		iroh.moveTo(mouse.x, mouse.y, 3);  
	}
	
}

function scene1(){
	if((iroh.x>75 && iroh.x<150) && (iroh.y>60 && iroh.y<175)){
			fill(0); 
		  rect(50, 375, 400, 100);
		
		  fill(255);
		  text('see memories?', 100, 425); 
		}
	
}