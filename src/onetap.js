"use strict;"
//const Game = require('./game.js');
import {Game} from './game';
import {render, update} from './player';
var canvas = document.getElementById('screen');
var game = new Game(canvas, update, render);

var background = new Image();
background.src = '/assets/tile.png';



/**
 * @function update
 * Updates the game state, moving
 * game objects and handling interactions
 * between them.
 * @param {elapsedTime} A DOMHighResTimeStamp indicting
 * the number of milliseconds passed since the last frame.
 */
function update(elapsedTime) {

  // TODO: Update the game objects
  Player.update(elapsedTime, ctx);
}

/**
  * @function render
  * Renders the current game state into a back buffer.
  * @param {elapsedTime} A DOMHighResTimeStamp indicting
  * the number of milliseconds passed since the last frame.
  */
function render(elapsedTime, ctx) {

  // TODO: Draw the game objects using the supplied context
  if(background) ctx.drawImage(background, 0,0);
  Player.render(elapsedTime, ctx);

}
