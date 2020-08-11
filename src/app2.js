function myJsFunction2()
{
    var y1 = parseFloat(document.getElementById('myRange2').value);
    var rate = Math.pow(y1 / 100, 3) + 0.02;
    var CFs = 10 * (y1 / 100 + 1) - 10;
    var Value = CFs / rate;
    document.getElementById("out1").innerHTML = Value.toFixed(2);
    document.getElementById("out2").innerHTML = CFs.toFixed(2);
    // document.getElementById("out0").innerHTML = y1.toFixed(2);

}

var slider = document.getElementById("myRange2");
var output = document.getElementById("demo2");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
    // document.getElementById("out0").innerHTML = this.toFixed(2);

} 
