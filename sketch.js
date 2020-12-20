var form;
var game;
var player;
var gamestate=0;
var playercount=0;
var allPlayers;

var cars,car1,car2,car3,car4;

var dataBase;
function setup(){
    createCanvas(windowWidth,windowHeight);
    resetButton = createButton("reset");
    resetButton.position(width-50,50)
    resetButton.mousePressed(clearData)
    dataBase = firebase.database();
    game = new Game();
    game.getState();
    game.startGame();
    
    
}

function draw(){
    background("white");
    if(playercount === 4){
        game.update(1)
    }
    if(gamestate===1)
    {
        game.play();
    }
   
}

function clearData()
{
    database.ref("/").update({"PlayerCount" : 0});
    database.ref("/").update({"GameState" : 0});
    database.ref("/Players").remove()

}

