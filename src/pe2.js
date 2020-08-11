function myJsFunction2()
{
    var y1 = parseFloat(document.getElementById('input3').value);
    var y2 = parseFloat(document.getElementById('input4').value);
    var two_year_rate = Math.sqrt((1 + y1) * (1 + y2)) - 1;
    document.getElementById("out2").innerHTML = two_year_rate.toFixed(2);
}
