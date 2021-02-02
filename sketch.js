var formVar, database;

function setup() {
  createCanvas(1000,1000);
  database = firebase.database();
  formVar = new form ();
}

function draw() {
  background(255,255,255); 
  formVar.display(); 
  drawSprites();
}