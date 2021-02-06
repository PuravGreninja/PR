var myCanvas=new fabric.Canvas('myCanvas');
var playerX=10;
var playerY=10;
var blockW=30;
var blockH=30;
var playerObj="";
var blockObj="";
function playerUpdate(){
    fabric.Image.fromURL("https://p1.hiclipart.com/preview/827/900/951/aquaman-2018-aquaman-holding-trident-png-clipart-thumbnail.jpg",function(Img){
    playerObj=Img;
    playerObj.scaleToWidth(150);
    playerObj.scaleToHeight(140);
    playerObj.set({top:playerY,left:playerX});
    myCanvas.add(playerObj);
    });
    }
function blockUpdate(getImg){
    fabric.Image.fromURL(getImg,function(Img){
    blockObj=Img;
    blockObj.scaleToWidth(blockW);
    blockObj.scaleToHeight(blockH);
    blockObj.set({top:playerY,left:playerX});
    myCanvas.add(blockObj);
    });
    }
    window.addEventListener("keydown",mykeydown);
function mykeydown(e){
ASCII=e.keyCode;
console.log(ASCII);
if(e.shiftKey==true&&ASCII=="80"){
console.log("p & shift pressed together");
blockW=blockW+10;
blockH=blockH+10;
document.getElementById("width").innerHTML=blockW;
document.getElementById("height").innerHTML=blockH;
}
if(e.shiftKey&&ASCII=="77"){
console.log(ASCII);
blockW=blockW-10;
blockH=blockH-10;
document.getElementById("width").innerHTML=blockW;
document.getElementById("height").innerHTML=blockH;
}
if(ASCII=="70")
{
new_image=('ironman_face.png');
console.log("f");
}
if(ASCII=="66")
{
new_image=('spiderman_body.png');
console.log("b");
}
if(ASCII=="76")
{
new_image=('hulk_legs.png');
console.log("l");
}
if(ASCII=="82")
{
new_image=('thor_right_hand.png');
console.log("r");
}
if(ASCII=="72")
{
new_image=('captain_america_left_hand.png');
console.log("h");
}
if(keyPressed=="38")
{
up();
console.log("up");
}
if(keyPressed=="37")
{
left();
console.log("left");
}
if(keyPressed=="40")
{
down();
console.log("down");
}
if(keyPressed=="39")
{
right();
console.log("right");
}
}