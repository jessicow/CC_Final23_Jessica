let currentTime; 
let lastTime;
let interval; 

function setup(){
  createCanvas(800, 800); 
  frameRate(40); 
  // frameRate should be set once and should not be changed on the fly
  // changing it on the fly is poor coding
  lastTime = 0;
  interval = 5000; 
}

function draw(){
    /*if(frameCount <500){
        //do nothing
    }
    
    else if(frameCount<700){
       scene1();
    }
    else if(frameCount <1000){
       scene2(); 
    }*/

    if(currentTime-lastTime > interval)
    {
        lastTime = currentTime;
        scene3(); 

    }
    print(frameCount); 

}

function scene1(){
    background(0);
}

function scene2(){
    background(0, 255, 0);

}

function scene3(){
    background(0, 0, 255);

}

function scene4(){
    background(127); 
}

function mousePressed(){
    currentTime = millis(); //returns millis seconds

}