
// track window size and mouse pos

function showSizeFunction() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: " + w + " x " + h + "   ";
    document.getElementById("showSize").innerHTML = txt;
}
