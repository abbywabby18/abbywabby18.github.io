let carX = 100;
let stars = []; //global variable (array)
let numStars = 400; //variable to control number of strad 

function setup(){
  createCanvas(400, 400) // creating an HTML element with a width & height of 400px
  // stars [0] = createVector(random(with), random(height)); 
  // stars [1] = createVector(random(with), random(height));
  // stars [2] = createVector(random(with), random(height));
  
  //declare and initialize our iterator (variable named i)
  //condition to check, if true, run code in curly brackets
  //increment the iterator
  for (let i = 0; i < numStars; i++) {
    stars[i] = createVector(random(width), random(height), random(1,3));
}
}
function draw() {  
  background(0,0,100);// r g b values of background fill color // stroke (0,255,0);changes stroke colors of all objects drawn after until a new stroke is specified
  

  //strokeweight(10); // sets thickness of stroke outline on subsequent shapes
  noStroke (); // removes the stroke from subsequent shapes
  fill (255,255,255); //changes fill color of all objects drawn after until a new fill is specified
      for (let i = 0; i < numStars; i++){
    ellipse(stars[i].x, stars[i].y, stars[i].z,stars[i].z);
  }
  ellipse (300,100,75,75); // the parameers of the ellipse functions are x,y,width, and height
  fill(160,160,160); //grey fill for road
  rect(0,340,400,60);//road
  
  fill(50,50,50);
  rect(0,190,60,150);
   rect(61,150,90,190);
  rect(152,190,60,150);
  rect(213,150,90,190);
  rect(304,190,60,150);
  rect(365,180,70,160);
  fill(300,300,300);
  rect(10,200,15,15);
  rect(35,200,15,15);
  rect(74,170,24,24);
  rect(115,170,24,24);
  rect(35,225,15,15);
  rect(10,225,15,15);
  rect(10,249,15,15);
  rect(35,249,15,15);
  rect(74,205,24,24);
  rect(115,205,24,24)
  rect(115,240,24,24);
  rect(74,240,24,24);
  rect(159,200,19,19);
  rect(186,200,19,19);
  rect(186,228,19,19);
  rect(159,228,19,19);
  rect(186,254,19,19);
  rect(159,254,19,19);
  rect(222,160,30,30);
  rect(265,160,30,30);
  rect(222,200,30,30);
  rect(265,200,30,30);
  rect(222,239,30,30);
  rect(265,239,30,30);
  rect(310,200,19,19);
  rect(339,200,19,19);
  rect(310,228,19,19);
  rect(339,228,19,19);
  rect(310,255,19,19);
  rect(339,255,19,19);
  rect(367,187,14,14);
  rect(385,187,14,14);
  rect(367,208,14,14);
  rect(385,208,14,14);
  rect(367,228,14,14);
  rect(385,228,14,14);
  rect(367,248,14,14);
  rect(385,248,14,14);
      //concatenation of two variables with a comma and a space beetween 
  console.log (mouseX + "," + mouseY ) ; //console.log will print the value specifies between parentheses to the console 
  fill(185,0,0);//red for car hull
  arc (carX,295,70,40, PI, 0);//arc function shows part of an ellipse curve, here we are using our custom-defined variable to control the x position
  rect(carX-65,295,129,40);  
  ellipse(carX-43,330,35,40);
  ellipse(carX+40,330,35,40);
  carX = carX + 1; //simple way to increase the value of a variable every crycle of the draw function
  
  
}