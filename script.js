$(document).ready(function(){
    // // table sorter plug in
    // $("#sort-table").tablesorter({sortList: [[1,0]]});
    // // visualize plug in
    // $('table').visualize({type:'bar'});

    // chart.js library
    // our labels along the x-axis
    var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
    // for drawing the lines
    var africa = [86,114,106,106,107,111,133,221,783,2478];
    var asia = [282,350,411,502,635,809,947,1402,3700,5267];
    var europe = [168,170,178,190,203,276,408,547,675,734];
    var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
    var northAmerica = [6,3,2,2,7,26,82,172,312,433];

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: years,
    datasets: [
        { 
          data: africa
        }
      ]
    }
  });

  // focusing on an input box after page load
  $('input:first').focus();

  // disabling and enabling form elements
  // disabled or enabled
  $("#name-input").attr("disabled", "false");

});