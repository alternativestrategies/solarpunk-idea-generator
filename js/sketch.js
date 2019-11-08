let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('position', 'absolute');
    canvas.style('left', '0');
    
    canvas.style('z-index', '-1')
    rectMode(CENTER);
  }
  
  function draw() {
    background(255);
    
    var width = 100;
    var height = 250;
    var body = height + 60;
    
    var aux = height -65;
    
    noStroke();
    fill(96, 248, 0);

    
    //mobile
    //ipad & ipad pro
    if(windowHeight > 1300){
        canvas.style('top', '-455px');
    }
    else if(windowHeight >1000 && windowHeight < 1300){
        canvas.style('top', '-275px');
    }
    else if(windowHeight > 490 && windowHeight < 1000){
        canvas.style('top', '-135px');
    } 
    else{
        canvas.style('top', '0px');
    } 
   
    //desktop responsiveness
    if(windowWidth >= 500 ){
        tri(-width, 0, 0, height, width, 0);
        tri(width, 0, 0, -height, -width, 0);
        tri(0, width, height, 0, 0, -width);
        tri(0, width, -height, 0, 0, -width);
        tri(0, -width, aux, -aux, width, 0);
        tri(0, width, -aux, aux, -width, 0);
        tri(0, width, aux, aux, width, 0);
        tri(0, -width, -aux, -aux, -width, 0);
      
        fill(255);
        ellipse(windowWidth/2, windowHeight/2, body)
        fill(96, 248, 0);
        ellipse(windowWidth/2, windowHeight/2, body-20)
        } 
    else {
        fill(96, 248, 0);
        ellipse(windowWidth/2, height+80, body-20)
        } 
    }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight); 
  }
  
  function tri(side1x, side1y, side2x, side2y, side3x, side3y) {
    push();
    translate(width/2, height/2);
    rotate(radians(frameCount /4 ));
    triangle(side1x, side1y, side2x, side2y, side3x, side3y);
    pop();
    
  }