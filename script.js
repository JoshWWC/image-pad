$(document).ready(function(){
var score = 0;
  var createGrid = function(rows) {

    $('td.squares').css('background-color','white');
    $('td.squares').remove();
    $('tr').remove();
    $('p').remove();
    $('img').remove();

    for (var i = 0; i < rows; i++) {
      var $tr = $('<tr id="cell' + i + '" class="rows"></tr>');
      $('#myTable').append($tr);
      for (var x = 0; x < rows; x++) {
        var $td = $('<td></td>');
        ($tr).append($td);
        $($td).append('<div class="squares"/>')
      }
    }

    var randomSrc="";
    var randomizer = Math.floor(Math.random() * 3);
    if (randomizer === 0) {
      randomSrc = "images/fall.jpg";
    } else if (randomizer === 1) {
      randomSrc = "images/pengy.jpg";
    } else if (randomizer === 2) {
      randomSrc = "images/troll.jpg";
    }
    $("#myTable").css('background-image','url("' + randomSrc + '")');

    if (randomizer === 0) {
      $('div.squares').css('background-color','#078407')
      $('div.squares').css('outline','solid #078407 2px')
      $('div.squares').hover(function(){
        $(this).remove();
        score += 10;
      });
    } else if (randomizer === 1) {
      $('div.squares').css('background-color','#0044cc')
      $('div.squares').css('outline','solid #0044cc 2px')
      $('div.squares').hover(function(){
        $(this).remove();
        score += 10;
        });
    } else if (randomizer === 2) {

        $('div.squares').hover(function(){
          var randomizerTROLL = Math.floor(Math.random() * 2);
          if (randomizerTROLL === 0) {
            $(this).remove()
            score += 10;
          } else if (randomizerTROLL === 1) {
            var ranRGB = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            $(this).css('background-color', ranRGB);
            $(this).css('outline','solid ' + ranRGB + ' 2px');
          }
        });
    }
  }

  $('button').click(function(){
    gridSquares = prompt("Input a number between 1 and 10","1 - 10");
    if (gridSquares > 10) {
      gridSquares = 10;
    } else if(gridSquares < 1){
      gridSquares = 1;
    }
    createGrid(gridSquares);
    var $p = $("<p>Score: " + score + "</p>");
    $('#paragraph').append($p)
  });
});
