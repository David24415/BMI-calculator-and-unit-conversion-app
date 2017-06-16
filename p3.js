/*jslint devel: true */
/*jslint browser:true */
var report = function (celsius, fahrenheit) { "use strict"; document.getElementById("result").innerHTML = celsius + "\xb0C = " + fahrenheit + "\xb0F"; };

document.getElementById("f_to_c").onclick = function () {
    "use strict";
    var f = document.getElementById("temperature").value;
    if (isNaN(f)) { alert("please enter a number!"); return; }
    report(((f - 32) / 1.8).toFixed(1), f);
};

document.getElementById("c_to_f").onclick = function () {
    "use strict";
    var c = document.getElementById("temperature").value;
    if (isNaN(c)) {alert("please enter a number!"); return; }
    report(c, (1.8 * c + 32).toFixed(1));
};

function metrcConv(value, convVal) {
    //convert to  values
    "use strict";
    value = value * convVal;
    return value;
}

document.getElementById("BMI").onclick = function () {
    "use strict";
    var weight = parseInt(document.getElementById("weight").value, 10), height = parseInt(document.getElementById("height").value, 10), BMI = 0.00;
    if (isNaN(height) || isNaN(weight)) {alert("please enter a number!"); return; }
    height = metrcConv(height, 0.025);  //convert height and weight to metric values
    weight = metrcConv(weight, 0.45);

    BMI = weight / (height * height);
    document.getElementById("bIndex").innerHTML = "your bmi is " + BMI.toFixed(1);

};