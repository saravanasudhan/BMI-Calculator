function calc() {
    var a = Number(document.getElementById('height').value);
    var b = Number(document.getElementById('weight').value);
    if (isNaN(a) || isNaN(b)) {
        return;
    }
    else
    var c = (b) / ((a / 100) * (a / 100));
    var ans;

    if (c < 19) {
        ans = "UnderWeight";
    } 
     else if (c >= 19 && c <= 25) {
        ans = "Normal Weight";
    } 
    else if (c > 25 && c <= 29.9) {
        ans = "Over Weight";
    } 
    else {
        ans = "Obesity";
    }

    document.getElementById('val').value = c.toFixed(2);
    document.getElementById('extra').value = ans;
}

function reset() {
    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";
    document.getElementById('val').value = "";
    document.getElementById('extra').value = "";
}