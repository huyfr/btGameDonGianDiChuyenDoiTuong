/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed=50;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  };

  this.moveRight = function()
  {
    this.left =this.left+this.speed;
  };
  this.moveLeft = function()
  {
    this.left =this.left-this.speed;
  };
  this.moveUp = function()
  {
    this.top =this.top-this.speed;
  };
  this.moveDown = function()
  {
    this.top =this.top+this.speed;
  };

}

let hero = new Hero('muaQuat.gif', 20, 30, 200);
window.addEventListener("keydown",start);

function start(type)
{
  document.getElementById('game').innerHTML = hero.getHeroElement();
  switch (type.keyCode)
  {
    case 38:
      hero.moveUp();
      break;
    case 40:
      hero.moveDown();
      break;
    case 37:
      hero.moveLeft();
      break;
    case 39:
      hero.moveRight();
      break;
  }
}
start();