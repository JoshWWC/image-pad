/*
This program generates a picture and covers it with tiles.
The user can mouse over the tiles to remove them,
revealing the picture beneath. I threw in some fun with the Troll.
*/

$(document).ready(function(){
var score = 0;
var $p = $("<p>Score: " + score + "</p>");
var randomizer = randomizer = Math.floor(Math.random() * 3);
var beenClicked = false;

  var createGrid = function(rows) {

    /* Need to remove all objects that may have stuck around before
    drawing our new ones.*/
    $('td.squares').css('background-color','white');
    $('td.squares').remove();
    $('tr').remove();
    $('p').remove();

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
    if (!randomizer === 5) {
      randomizer = Math.floor(Math.random() * 3);
    } else {
      $('div.squares').hover(function(){
        var ranRGB = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        $(this).css('background-color', ranRGB);
        $(this).css('outline','solid ' + ranRGB + ' 2px');
      });
    }
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
    $("#myTable").css('border','solid #8B4C39 10px')
    if (randomizer === 0) {
      $('div.squares').css('background-color','#8B4C39')
      $('div.squares').css('outline','solid #8B4C39 2px')
      $('div.squares').hover(function(){
        $(this).remove();
        score += 10;           // Can't forget to increment our score!
        $p = $("<p>Score: " + score + "</p>");
        $('p').remove();
        $('#paragraph').append($p)

        if (! $('div').hasClass('squares')) {
          score += 100;
          $p = $("<p>Score: " + score + "</p>");
          $('p').remove();
          $($p).css('color','black');
          $($p).css('opacity','1');
          $('#paragraph').append($p);
        }
      });
    } else if (randomizer === 1) {
      $('div.squares').css('background-color','#8B4C39')
      $('div.squares').css('outline','solid #8B4C39 2px')
      $('div.squares').hover(function(){
        $(this).remove();
        score += 10;
        $p = $("<p>Score: " + score + "</p>");
        $('p').remove();
        $('#paragraph').append($p)

        if (! $('div').hasClass('squares')) {
          score += 100;
          $p = $("<p>Score: " + score + "</p>");
          $('p').remove();
          $($p).css('color','black');
          $($p).css('opacity','1');
          $('#paragraph').append($p)
        }
        });
    } else if (randomizer === 2) {

        $('div.squares').hover(function(){
          /* Everytime a user mouses over a tile, run this test */
          var randomizerTROLL = Math.floor(Math.random() * 2);
          if (randomizerTROLL === 0) {
            // Option 1: 50% chance to remove the tile
            $(this).remove()
            score += 10;
            $p = $("<p>Score: " + score + "</p>");
            $('p').remove();
            $($p).css('color','#8B4C39')
            $('#paragraph').append($p)

            if (! $('div').hasClass('squares')) {
              score += 100;
              $p = $("<p>Score: " + score + "</p>");
              $('p').remove();
              $($p).css('color','black');
              $($p).css('opacity','1');
              $('#paragraph').append($p)
            }
          } else if (randomizerTROLL === 1) {
            // Option 2: 50% chance to give the tile a random color
            var ranRGB = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            $(this).css('background-color', ranRGB);
            $(this).css('outline','solid ' + ranRGB + ' 2px');
          }
        });
    }
  }

  // default grid
  var gridSquares = 5;
  createGrid(5);

  /* When someone clicks our button, draw a grid based on their input
  also create, or update, our Score. */
  $('#newPad').click(function(){
    if (beenClicked) {
      randomizer=5;
    } else {randomizer = Math.floor(Math.random() * 3);};
    gridSquares = prompt("Input a number between 1 and 10","1 - 10");
    if (gridSquares > 10) {
      gridSquares = 10;
    } else if(gridSquares < 1){
      gridSquares = 1;
    } else if (isNaN(gridSquares)){
      gridSquares = 5;
      alert("But, thats not... No. You get a 5x5.")
    }
    // Score:
    createGrid(gridSquares);
    $p = $("<p>Score: " + score + "</p>");
    $('#paragraph').append($p)
  });

  $('#swapMode').click(function(){
    if (beenClicked === true) {
      randomizer = Math.floor(Math.random() * 3);
      beenClicked = false;
      createGrid(gridSquares);
      $('#swapMode').css('box-shadow','none');
      $('#swapMode').css('opacity','0.8');
    } else {
      randomizer = 5;
      beenClicked = true;
      createGrid(gridSquares);
      $('#swapMode').css('-webkit-box-shadow',"0px 0px 20px black");
      $('#swapMode').css('-moz-box-shadow',"0px 0px 20px black");
      $('#swapMode').css('box-shadow',"0px 0px 20px black");
      $('#swapMode').css('opacity','1');
    }
    $('div.squares').hover(function(){
      var ranRGB = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      $(this).css('background-color', ranRGB);
      $(this).css('outline','solid ' + ranRGB + ' 2px');
    });
    $p = $("<p>Score: " + score + "</p>");
    $('p').remove();
    $('#paragraph').append($p)
    /* make background random colors
    make swapMode button highlighted*/
  });

  $p = $("<p>Score: " + score + "</p>");
  $('p').remove();
  $('#paragraph').append($p)
});
