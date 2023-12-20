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
let video; 
let childhood; 

let first, second, third, fourth, fifth; //booleans to control the order of the scenes

function preload(){
	tree = loadImage('green tree.png'); 
	ground = loadImage('background_grass.png'); 
	//tombstone = loadImage('tombstone.png');
	pixelFont = loadFont('Minecraft.ttf'); 
	darkScreen = loadImage('blackbackground.png'); 
	
	soundFormats('mp3');
	ding = loadSound('ding.mp3');	
	//bird1 = loadSound('cardinal.mp3');
	forestSounds = loadSound('forest.mp3');
	childhood = loadSound('childhood.mp3');
	
}

function setup() 
{
	createCanvas(500, 800);
	
	a = 0; 

	iroh = new Sprite(250, 50, 20, 20, 'd'); //Sprite(x, y, w, h, collider type)
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
	
//	video = createVideo('first.mp4');
//	video.autoplay(false); 
	//video.hide(); 
	//video.loop(); 
//	video.play(); 

}

function draw() {
	//clear(); 
	
	if(first){ 
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
			//video.play(); 
			//image(video, 0, 0); 
		}
		
	}
	
	if(second){
		//background(ground);
		
	}
	
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

function scene1(){ 
	forestSounds.stop(); 
	childhood.play();
	
	background(darkScreen); 
	background(0); 
	noCanvas(); 
	video = createVideo('first.mp4');
	video.speed(.5);
	video.autoplay(false); 
	video.play();
//	image(video, 0, 0); 
	
	/*if(childhood.onended()){
		//createCanvas(800, 800); 
		first = false; 
		second = true; 
	}*/

	
}
