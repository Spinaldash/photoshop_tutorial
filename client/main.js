'use strict';

$(document).ready(init);

function init() {
  $('#add-color').click(addColor);
  $('#add-random-colors').click(addRandom);
}

function addColor() {
  var color = $('#color').val();

  var $box = $('<div>');
  $box.css('background-color', color);
  $box.addClass('box');

  $('#colors').append($box);

}

function addRandom(){
  var quantity = $('#quantity').val() * 1;
  for(var i = 0; i<quantity; i++){

    var $box = $('<div>');
    $box.css('background-color', addRandomColor());
    $box.addClass('box');

    $('#colors').append($box);

  }

}

function addRandomColor() {
  var fus = Math.floor(Math.random() * 256);
  var roh = Math.floor(Math.random() * 256);
  var dah = Math.floor(Math.random() * 256);
  return "rgb(" + fus + "," + roh + "," + dah + ")"

}
