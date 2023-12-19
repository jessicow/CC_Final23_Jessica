let iroh; //using p5 play and p5 sound - remember to push to repository regularly 
let tree;
let ground, darkScreen; 
let tombstone;
let pixelFont;
let button; 
let a; 
let ding;
let test;
let forestSounds;
let bird1;
let ambiance;

let first, second, third, fourth, fifth; //booleans to control the order of the scenes
let one, two, three, four, five; //animation scene order

function preload(){
	tree = loadImage('green tree.png'); 
	ground = loadImage('background_grass.png'); 
	tombstone = loadImage('tombstone.png');
	pixelFont = loadFont('Minecraft.ttf'); 
	darkScreen = loadImage('blackbackground.png'); 
	
	soundFormats('mp3');
	ding = loadSound('ding.mp3');	
	bird1 = loadSound('cardinal.mp3');
	forestSounds = loadSound('forest.mp3');
	
	//animations
	
}

function setup() 
{
 
	createCanvas(800, 700);
	
	one = loadAnimation('storkbaby1.png','storkbaby2.png','storkbaby3.png','storkbaby4.png',
										 'storkbaby5.png','storkbaby6.png','storkbaby7.png','storkbaby8.png',
										 'storkbaby9.png','storkbaby10.png','storkbaby11.png','storkbaby12.png',
										 'storkbaby13.png','storkbaby14.png','storkbaby15.png','storkbaby16.png',
										 'storkbaby17.png','storkbaby18.png','storkbaby19.png','storkbaby20.png',
										 'storkbaby21.png','storkbaby22.png','storkbaby23.png','storkbaby24.png',
										 'storkbaby25.png','storkbaby26.png','storkbaby27.png','storkbaby28.png',
										 'storkbaby29.png','storkbaby30.png','storkbaby31.png','storkbaby32.png',
										 'storkbaby33.png','storkbaby34.png','storkbaby35.png','storkbaby36.png',
										 'storkbaby37.png','storkbaby38.png','storkbaby39.png','storkbaby40.png',
										 'storkbaby41.png','storkbaby42.png','storkbaby43.png','storkbaby44.png',
										 'storkbaby45.png','storkbaby46.png','storkbaby47.png','storkbaby48.png',
										 'storkbaby49.png',);
	
	a = 0; 

	
	iroh = new Sprite(250, 50, 20, 20, 'd');//Sprite(x, y, w, h, collider type)
	button = new Sprite(250, 450, 70, 35, 'd');
	noStroke(); 
	button.color = "green"; 
	//button.text = 'yes'; 
	
	iroh.layer = 2;
	button.layer = 1; 
	
	first = true; 
	
	textFont(pixelFont); 
	textSize(40);  
	
	forestSounds.play(); 

}

function draw() {
	//clear(); 
	animation(one, 400, 350); 
	
	  if(first) {
			homeScreen(); 
		}
	
			/*{ 
		background(ground); 
	
	 tree.resize(150, 150); 
	 image(tree, 25, 50);
		
		textBox();
		
		if(button.mouse.hovering()){
		fill(0,0,0, a);
			a++;
		rect(0, 0, 500, 500);
}
		if(iroh.overlaps(button)){
			ding.play(); 
			iroh.remove();
			button.remove();
			first = false; 
			scene1(); 
		}
		
	} */
	
	
	if(mouse.presses()){
		iroh.moveTo(mouse.x, mouse.y, 3);  
	}
	
}

function homeScreen(){
		background(ground); 
	
	 tree.resize(150, 150); 
	 image(tree, 25, 50);
		
		textBox();
		
		if(button.mouse.hovering()){
		fill(0,0,0, a);
			a++;
		rect(0, 0, 500, 500);
}
		if(iroh.overlaps(button)){
			ding.play(); 
			iroh.remove();
			button.remove();
			first = false; 
			scene1(); 
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

function scene1(){ 
	background(0); 
	background(darkScreen); 
	one.frameDelay = 10;
	one.noLoop();  
	one.play();
	scene2(); 
	//second = true; //calls on draw loop again
}

function scene2(){
	homeScreen(); 
	
}