/*jslint devel: true */
/*jslint browser:true */
var report = function (celsius, fahrenheit) { "use strict"; document.getElementById("result").innerHTML = celsius + "\xb0C = " + fahrenheit + "\xb0F"; };

document.getElementById("f_to_c").onclick = function () { //function that converts from farenheit to celcius at the click of a button
    "use strict";
    var f = document.getElementById("temperature").value;
    if (isNaN(f)) { alert("please enter a number!"); return; }
    report(((f - 32) / 1.8).toFixed(1), f); //return value to page for user 
};

document.getElementById("c_to_f").onclick = function () {//function that converts from celcius to farenheit at the click of a button
    "use strict";
    var c = document.getElementById("temperature").value;
    if (isNaN(c)) {alert("please enter a number!"); return; }
    report(c, (1.8 * c + 32).toFixed(1)); //return value to page for user 
};

function metrcConv(value, convVal) {// completes conversion given a value, and the conversion factor
    //convert to  values
    "use strict";
    value = value * convVal;
    return value;
}

document.getElementById("BMI").onclick = function () {
    "use strict";
    var weight = parseInt(document.getElementById("weight").value, 10), height = parseInt(document.getElementById("height").value, 10), BMI = 0.00;
    if (isNaN(height) || isNaN(weight)) {alert("please enter a number!"); return; }//verifies that user enters numbers
    height = metrcConv(height, 0.025);  //convert height and weight to metric values
    weight = metrcConv(weight, 0.453592);

    BMI = weight / (height * height); //calculate bmi as a ratio of weight to height squared
    document.getElementById("bIndex").innerHTML = "your bmi is " + BMI.toFixed(1); //return value to page for user 

};

document.getElementById("kg_to_lbs").onclick = function () {//convert kg to pounds
    "use strict";
    var weight = parseInt(document.getElementById("w_eight").value, 10), g = 0.00;
    if (isNaN(weight)) {alert("please enter a number!"); return; }
    g = metrcConv(weight, (1 / 0.453592));  //call to conversion function
    
    document.getElementById("heavy").innerHTML = weight + "kg =" + g.toFixed(2) + "lbs"; //return value to page for user 

};

document.getElementById("lbs_to_kg").onclick = function () {//convert pounds to kg
    "use strict";
    var weight = parseInt(document.getElementById("w_eight").value, 10), j = 0.00;
    if (isNaN(weight)) {alert("please enter a number!"); return; }
    j = metrcConv(weight, 0.453592);  //call to conversion function
    
    document.getElementById("heavy").innerHTML = weight + "lbs =" + j.toFixed(2) + "kg"; //return value to page for user 

};