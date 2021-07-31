var room,roomimg;
var door;
var player, playerImg;
var door,doorImg;

var key ,keyimg;

var interact = new Group();


inventory = new Group();
function preload(){

roomimg = loadImage("room1.png")
//playerImg = loadImage("")

}

function setup(){
 createCanvas(displayWidth,displayHeight);
  


//room start map
room = createSprite(displayWidth/2,displayHeight/2+80,0,0)
room.addImage(roomimg)
room.scale =1.5;

player = createSprite(displayWidth-200,displayHeight/2,50,50);
player.shapeColor = "red";

key = createSprite(1350,800,20,20);
key.shapeColor = "orange"


//door
door = createSprite(60,60,100,30);
door.shapeColor("brown");
}

function draw() {

  background(0);

  if(keyDown("w")){
    player.y = player.y-10;
  }

  if(keyDown("A")){
    player.x =  player.x -10;
  }

  if(keyDown("S")){
    player.y = player.y+10;
  }

  if(keyDown("D")){
    player.x =  player.x +10;
  }


//camera position
  camera.x = player.x;
  camera.y = player.y;

  camera.zoom = 1.5;

  //key

  if(key.isTouching(player)){
    text("press E to interact",400,550);

    if(keyDown("e")){
      key.add(inventory);
    }
  
  }
  
//door should open only if our inventory has key
  if(player.isTouching(door)&& inventory){
    text("press E to interact",400,550);

    if(keyDown("e")){

      door.destroy();

    }
  }



//interactable stuff
key.add(interact);
*/

  drawSprites();
}
