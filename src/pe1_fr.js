function myJsFunctionFR()
{
    var y1 = parseFloat(document.getElementById('input1_fr').value);
    var y2 = parseFloat(document.getElementById('input2_fr').value);
    var forward_rate = ((1 + y2) * (1 + y2)) / (1 + y1) - 1;
    document.getElementById("out1_fr").innerHTML = forward_rate.toFixed(2);
}
