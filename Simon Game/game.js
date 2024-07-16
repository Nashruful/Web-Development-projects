var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red","blue","green","yellow"];
var level = 0;
var starter = false;


$(".btn").on("click", function(event){
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);

    checkAnswer(userClickedPattern.length-1);


});
$("#startButton").on("click",function(){
    animateStart();
});

$("#startButton").on("click",function(){
    if (!starter){
        nextSequence();
        starter = true;
    }
});
$(document).on("keydown", function(){
    if (!starter){

        nextSequence();    
        starter = true;
    }
    
});


function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+ randomChosenColor).animate({opacity: 0},100);
    $("#"+ randomChosenColor).animate({opacity: 100},100);
    playSound(randomChosenColor);
    level++;
    $("#level-title").text("Level "+ level);


     
}

function playSound(name){
    $("#"+ name).animate({opacity: 0},100);
    $("#"+ name).animate({opacity: 100},100);
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}



function animatePress(currentColor){
         $("#"+currentColor).addClass("pressed");
         setTimeout(function (){
            $("#"+currentColor).removeClass("pressed")},100);

 }
 function animateStart(){
    $("#startButton").addClass("pressedStart");
    setTimeout(function (){
       $("#startButton").removeClass("pressedStart")},100);
    }

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
            nextSequence();
        }, 1000)
    }
    }
    else{
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    
}
function startOver(){
    starter = false;
    level=0;
    gamePattern = [];
    userClickedPattern = [];
}