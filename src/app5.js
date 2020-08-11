function myJsFunction5()
{
    var y1 = parseFloat(document.getElementById('myRange5').value);
    df1 = 1 / Math.pow(1 + (y1 / 100), 1);
    df2 = 1 / Math.pow(1 + (y1 / 100), 2);
    df3 = 1 / Math.pow(1 + (y1 / 100), 3);
    df4 = 1 / Math.pow(1 + (y1 / 100), 4);
    df5 = 1 / Math.pow(1 + (y1 / 100), 5);
    df6 = 1 / Math.pow(1 + (y1 / 100), 6);
    df7 = 1 / Math.pow(1 + (y1 / 100), 7);
    df8 = 1 / Math.pow(1 + (y1 / 100), 8);
    df9 = 1 / Math.pow(1 + (y1 / 100), 9);
    df10 = 1 / Math.pow(1 + (y1 / 100), 10);

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Maturity', 'DF'],
          ['1',  df1],
          ['2',  df2],
          ['3',  df3],
            ['4',  df4],
	    ['5', df5],
	    ['6', df6],
	    ['7', df7],
	    ['8', df8],
	    ['9', df9],
	    ['10', df10]
        ]);

        var options = {
          title: 'Discount Factors by Year',
            legend: { position: 'top' },
        hAxis: {
          title: 'Year'
        },
        vAxis: {
            title: 'Discount Factor'
	},
            backgroundColor: '#bfbfbf',
	    pointSize: 10,
        };

        var chart = new google.visualization.AreaChart(document.getElementById('curve_chart2'));

        chart.draw(data, options);
      }

    
    // document.getElementById("out1").innerHTML = Value.toFixed(2);
    // document.getElementById("out2").innerHTML = CFs.toFixed(2);
    // document.getElementById("out0").innerHTML = y1.toFixed(2);

}

var slider = document.getElementById("myRange5");
var output = document.getElementById("demo5");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
    // document.getElementById("out0").innerHTML = this.toFixed(2);

} 
