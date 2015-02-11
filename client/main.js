'use strict';

$(document).ready(init);

function init() {
  $('#add-color').click(addColor);
  $('#add-random-colors').click(addRandom);
  $('#start').click(clickStart);
  $('#stop').click(clickStop);
  $('#colors').on('click', '.box', clickBox);
  $('#canvas').on('mouseenter', '.tiny', enterTiny);
  $('#add-canvas').click(clickAddCanvas);
}

var colors = [];
var timer;
var index = 0;

function enterTiny() {
  var color = $('#selected').css('background-color');
  $(this).css('background-color', color);
}

function clickAddCanvas() {
  var size = $('#canvas-size').val() * 1;

  for (var i = 0; i < size; i++) {
    var $tiny = $('<div>');
    $tiny.addClass('tiny');
    $('#canvas').append($tiny);
  }
}

function clickStart() {
  colors = $('.box').toArray().map(function(element) {
  return $(element).css('background-color');
});

  index = 0;
  clearInterval(timer);
  timer = setInterval(looping, 250);

}

function looping() {
  var color = colors[index];
  $('body').css('background-color', color);
  index++;
  if (index > colors.length) {
    index = 0;
  }
}

function clickStop() {
  clearInterval(timer);
}

function addColor() {
  var color = $('#color').val();

  var $box = $('<div>');
  $box.css('background-color', color);
  $box.addClass('box');

  $('#colors').append($box);

}

function addRandom() {
  var quantity = $('#quantity').val() * 1;
  for (var i = 0; i < quantity; i++) {

    var $box = $('<div>');
    $box.css('background-color', addRandomColor());
    $box.addClass('box');

    $('#colors').append($box);
  }

}

function clickBox() {
  var color = $(this).css('background-color');
  $('#selected').css('background-color', color);
}

function addRandomColor() {
  var fus = Math.floor(Math.random() * 256);
  var roh = Math.floor(Math.random() * 256);
  var dah = Math.floor(Math.random() * 256);
  return 'rgb(' + fus + ',' + roh + ',' + dah + ')';

}
