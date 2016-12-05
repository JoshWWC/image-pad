/*
This program generates a picture and covers it with tiles.
The user can mouse over the tiles to remove them,
revealing the picture beneath. I threw in some fun with the Troll.
*/

$(document).ready(function(){
var score = 0;
  var createGrid = function(rows) {

    /* Need to remove all objects that may have stuck around before
    drawing our new ones.*/
    $('td.squares').css('background-color','white');
    $('td.squares').remove();
    $('tr').remove();
    $('p').remove();
    $('img').remove();

    /* We generate the grid by using nested 'for' loops.
    The first loop draws a series of rows, and the nested loop
    creates a relevant number of table data objects for each of them. */
    for (var i = 0; i < rows; i++) {
      var $tr = $('<tr id="cell' + i + '" class="rows"></tr>');
      $('#myTable').append($tr);
      for (var x = 0; x < rows; x++) {
        var $td = $('<td></td>');
        ($tr).append($td);
        $($td).append('<div class="squares"/>')
      }
    }

    // Choose a random image.
    var randomSrc="";
    var randomizer = Math.floor(Math.random() * 3);
    if (randomizer === 0) {
      randomSrc = "images/fall.jpg";
    } else if (randomizer === 1) {
      randomSrc = "images/pengy.jpg";
    } else if (randomizer === 2) {
      randomSrc = "images/troll.jpg";
    }
    // Set that random image.
    $("#myTable").css('background-image','url("' + randomSrc + '")');

    // Do various fun things based on what the image ends up being.
    if (randomizer === 0) {
      $('div.squares').css('background-color','#078407')
      $('div.squares').css('outline','solid #078407 2px')
      $('div.squares').hover(function(){
        $(this).remove();
        score += 10;           // Can't forget to increment our score!
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
          /* Everytime a user mouses over a tile, run this test */
          var randomizerTROLL = Math.floor(Math.random() * 2);
          if (randomizerTROLL === 0) {
            // Option 1: 50% chance to remove the tile
            $(this).remove()
            score += 10;
          } else if (randomizerTROLL === 1) {
            // Option 2: 50% chance to give the tile a random color
            var ranRGB = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            $(this).css('background-color', ranRGB);
            $(this).css('outline','solid ' + ranRGB + ' 2px');
          }
        });
    }
  }

  /* When someone clicks our button, draw a grid based on their input
  also create, or update, our Score. */
  $('button').click(function(){
    gridSquares = prompt("Input a number between 1 and 10","1 - 10");
    if (gridSquares > 10) {
      gridSquares = 10;
    } else if(gridSquares < 1){
      gridSquares = 1;
    }
    // Score: 
    createGrid(gridSquares);
    var $p = $("<p>Score: " + score + "</p>");
    $('#paragraph').append($p)
  });
});
