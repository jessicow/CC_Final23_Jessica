let iroh; //using p5 play and p5 sound - remember to push to repository regularly 
let tree; //variables 
let ground, darkScreen; 
let tombstone;
let pixelFont;
let button; 
let a; 
let test;
let forestSounds;
let bird1;
let ambiance;
let video, video2, video3, video4, video5; 
let childhood; 
let dreamland; 
let joy; 
let piano; 
let pluto;

let first, second, third, fourth, fifth; //booleans to control the order of the scenes

function preload(){ //preload images and sounds ill be using
	tree = loadImage('green tree.png'); 
	ground = loadImage('background_grass.png'); 
	//tombstone = loadImage('tombstone.png');
	pixelFont = loadFont('Minecraft.ttf'); 
	darkScreen = loadImage('blackbackground.png'); 
	
	soundFormats('mp3'); //tells what sound format my code will accept
	//bird1 = loadSound('cardinal.mp3');
	forestSounds = loadSound('forest.mp3');
	childhood = loadSound('childhood.mp3');
	dreamland = loadSound('dreamland.mp3'); 
	joy = loadSound('joy.mp3');
	piano = loadSound('piano.mp3');
	pluto = loadSound('ending.mp3'); 
	
}

function setup() 
{
	createCanvas(800, 800); 
	
	a = 0; //a increment variable 

	iroh = new Sprite(250, 50, 20, 20, 'd'); //Sprite(x, y, w, h, collider type)
	button = new Sprite(250, 450, 70, 35, 'd'); //collider type
	noStroke(); 
	button.color = "green"; 
	
	iroh.layer = 2;
	button.layer = 1; 
	
	first = true; //boolean variable which helps to change the scenes
	
	textFont(pixelFont); 
	textSize(40);  
	
	forestSounds.play(); 

}

function draw() {
	
	if(first){  //checks if true, plays scene accordingly
		background(ground); 
		homeScreen(); 
		textBox();
		
	}
	
	if(second){
		background(ground);
		button.color = "green"; 
		homeScreen(); 
		textBox();
		
	}
	
	if(third){
		background(ground);
		button.color = "green"; 
		homeScreen(); 
		textBox();
		
	}
	
	if(fourth){
		background(ground);
		button.color = "green"; 
		homeScreen(); 
		textBox();
		
	}
	
	if(fifth){
		background(ground);
		button.color = "green"; 
		homeScreen(); 
		textBox();
		
	}
	
	if(mouse.presses()){
		iroh.moveTo(mouse.x, mouse.y, 3);  
	}
	
}

function homeScreen(){
	background(ground); 
	
	 tree.resize(150, 150); 
	 image(tree, x, y);
	
	if(button.mouse.hovering()){ //turning screen black
		fill(0,0,0, a);
			a+=1;
		rect(0, 0, 800, 800);
}
		if(iroh.overlaps(button)){ 
			
			if(first)
				{
					first = false; 
		    	scene1(); 
				}
			if(second){
				second = false;
				scene2(); 
			}
			if(third){
				third = false;
				scene3(); 
			}
			if(fourth){
				fourth = false;
				scene4(); 
			}
			if(fifth){
				fifth = false;
				scene5(); 
			}
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
	joy.play();
	
	background(darkScreen); 
	background(0); 
	noCanvas(); 
	video = createVideo('first.mp4');
	video.speed(.5);
	video.autoplay(false); 
	video.play();
	
	joy.onended(() => {
		video.hide(); 
    first = false;
		third = true; 
		createCanvas(800,800); 
		forestSounds.play(); 
		iroh.x = 250;
		iroh.y = 50; 
  });
	
}


function scene2(){
	forestSounds.stop(); 
	joy.play(); 
	
	background(darkScreen); 
	noCanvas(); 
	video2 = createVideo('two.mp4'); 
	video2.speed(.5);
	video2.autoplay(false); 
	video2.play();
	
	video2.onended(() => {
		joy.stop(); 
		video2.hide(); 
    second = false;
		third = true; 
		createCanvas(800,800); 
		forestSounds.play(); 
		iroh.x = 250;
		iroh.y = 50; 
  });
	
	
}

function scene3(){
	forestSounds.stop(); 
	dreamland.play(); 
	
	background(darkScreen); 
	noCanvas(); 
	video3 = createVideo('3or4.mp4'); 
	video3.speed(.2);
	video3.autoplay(false); 
	video3.play();
	
	video3.onended(() => {
		dreamland.stop(); 
		video3.hide(); 
    third = false;
		fourth = true; 
		createCanvas(800,800); 
		forestSounds.play(); 
		iroh.x = 250;
		iroh.y = 50; 
  });
	
}

function scene4(){
	forestSounds.stop(); 
	pluto.play(); 
	
	background(darkScreen); 
	noCanvas(); 
	video4 = createVideo('fourth.mp4'); 
	video4.speed(.2);
	video4.autoplay(false); 
	video4.play();
	
	video4.onended(() => {
		pluto.stop(); 
		video4.hide(); 
    fourth = false;
		fifth = true; 
		createCanvas(800,800); 
		forestSounds.play(); 
		iroh.x = 250;
		iroh.y = 50; 
  });
	
}

function scene5(){
	forestSounds.stop(); 
	childhood.play(); 
	
	background(darkScreen); 
	noCanvas(); 
	video5 = createVideo('ending scene.mp4'); 
	video5.speed(.2);
	video5.autoplay(false); 
	video5.loop();
	
	
}
