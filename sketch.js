var canvas, backgroundImage;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

function preload(){
  gatas = loadImage("./Images/Toph&Serafina.JPG");
  nocturne = loadSound("./Sounds/nocturne48-1.mp3");
}

function setup(){
  canvas = createCanvas(1336,627);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  nocturne.setVolume(0.5);
  nocturne.loop();
}

function draw(){
  background(gatas);
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
