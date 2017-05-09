/*jshint esversion: 6 */

import config from './config';
import $ from 'jquery';
import ChessBoard from 'chessboardjs';
import chessjs from 'chess.js';
import io from 'socket.io-client';

window.$ = $;

let socket = io(config.SERVER_URL);

let chessConfig = {
  draggable: true,
  position: 'start',
  onDrop: handleMove
};

let chess = new chessjs.Chess();
let board = ChessBoard('board', chessConfig);


socket.on('game created', (data) => {
  alert('Game ID: ' + data.game.id);
  setGameID(data.game.id);
});

socket.on('move', (data) => {
  let move = chess.move( data.move );
  board.move( move.from + '-' + move.to );
});

socket.on('join game', (data) => {
  board.position(data.game.fen);
});

socket.on('restart', () => {
  board.start(true);
});

socket.on('undo', (data) => {
  chess.undo();
  board.position(data.chess.fen());
});



$('.js-link-new-game').on('click', () => {
  socket.emit('new game');
  return false;
});

$('.js-link-join-game').on('click', () => {
  let gameID = prompt('Please enter game ID to join');
  socket.emit('join game', {
    game: gameID
  });
  setGameID(gameID);
  return false;
});


$('.js-link-restart').on('click', () => {
  socket.emit('restart');
  board.start(true);
  return false;
});


$('.js-link-undo-move').on('click', () => {
  console.log('---undo---');
  chess.undo();
  board.position( chess.fen());
  socket.emit('undo');
  updateGame();
  return false;
});

function updateGame() {
  let moveColor = 'White';
  if (chess.turn() === 'b') {
      moveColor = 'Black';
  }
  console.log(moveColor)
  $('.player-turn').text(moveColor);
}


function handleMove(from, to, piece, position) {
  // console.log("history"+ chess.history({ verbose: true }));
  let move = chess.move({
    from: from,
    to: to,
    piece: piece,
    position: position
  });
  if (move === null) {
    return 'snapback';
  } else {
    socket.emit('move', { move: move.san });
  }
  updateGame();
}

function renderGameID() {
  let gameID = window.localStorage.getItem('game-id');
  $('.js-game-id').text(gameID);
  if(gameID) {
    socket.emit('join game', {
      game: gameID
    });
  }
}
renderGameID();

function setGameID(id) {
  window.localStorage.setItem('game-id', id);
  renderGameID();
}
