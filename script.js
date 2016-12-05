

$(document).ready(function(){
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

    randomSrc = "images/fall.jpg";
    $img = $('<img src = "' + randomSrc + '" />');
    //$("body").append("<img id='makeImage' src='" + randomSrc + "'/>");

    $('div.squares').hover(function(){
      $(this).remove();
    });
  }

  $('button').click(function(){
    gridSquares = prompt("Input a number between 1 and 10","1 - 10");
    if (gridSquares > 10) {
      gridSquares = 10;
    } else if(gridSquares < 1){
      gridSquares = 1;
    }
    createGrid(gridSquares);
    var $p = $("<p>You can make a new pad by clicking the button again!</p>");
    $('#paragraph').append($p)
  })
})
