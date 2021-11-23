// select element id
const canvasBgColor = document.getElementById("canvas-bgcolor");

// canvas element
const canvas = document.getElementById("canvas");

//select white value input
const white = document.getElementById("mySelect").value("white");
//select l grey value input
const lGrey = document.getElementById("mySelect").value("light-grey");
//select m grey value input
const mGrey = document.getElementById("mySelect").value("medium-gre");
//select d grey value input
const dGrey = document.getElementById("mySelect").value("dark-grey");


canvasBgColor.addEventListener("click", () => {
//  I want the background color of the canvas to change when a input selection is clicked

if( /* what's clicked === white*/) {
    // make the bgcolor white
    canvas.style.backgroundColor = blue;
}


});