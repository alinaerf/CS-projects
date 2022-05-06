//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes=0;
var difficultyLevel=2;
var levelChosen=false;


//Global Constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

function chooseDifficulty(level){
  if (levelChosen==false){
    difficultyLevel=level;
    levelChosen=true;
    document.getElementById("difficulty"+level).classList.add("chosen");}
  else{
    document.getElementById("difficulty" + difficultyLevel).classList.remove("chosen");
    document.getElementById("difficulty"+level).classList.add("chosen");
    difficultyLevel=level;
    levelChosen=true;
    if (gamePlaying==true){
      let restart=confirm("You have already started playing the game, would you like to change the difficulty level?");
      if (restart==true){
        stopGame();
        document.getElementById("difficulty"+level).classList.add("chosen");
      }
    }
  }
}

function generatePattern(){
  pattern=[];
  for (let i=0; i<=3+difficultyLevel; i++){
    var newNum=Math.floor(Math.random()*5+1);
    pattern.push(newNum);
  }
  console.log(pattern);
  
}


function startGame() {
  //initialize game variables
  if (levelChosen==true){
    generatePattern();
    progress = 0;
    mistakes=0;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();}
  else{
    alert("You did not choose the difficulty level!")
  }
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("difficulty" + difficultyLevel).classList.remove("chosen");
  mistakes=0;
  document.getElementById("mistakesNum").innerHTML="Mistakes:"+String(mistakes);

}
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500.5,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  document.getElementById("image"+btn).classList.remove("hidden");
  setTimeout(function () {
    stopTone(btn);
  }, len);
  
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
    document.getElementById("image"+btn).classList.remove("hidden");

  }
}
function stopTone(btn) {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
  document.getElementById("image"+btn).classList.add("hidden");

}


function lightButton(btn) {
  
  document.getElementById("button" + btn).classList.add("lit");

}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if (pattern[guessCounter]== btn){
    if (guessCounter==progress){
      if(guessCounter==pattern.length-1){
        winGame();
      }
      else{
        progress+=1;
        playClueSequence();
      }
    }
    else{
      guessCounter+=1;
    }
  }
  else{
    //loseGame();
    mistakes++;
    document.getElementById("mistakesNum").innerHTML="Mistakes:"+String(mistakes);
    if (mistakes>2){
      loseGame()
    }
    else{
      playClueSequence();
    }
  }
  
  // add game logic here
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  

}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
