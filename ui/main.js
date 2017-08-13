console.log('Loaded!');

//add new value to the element
var element = document.getElementById("main-text");
element.innerHTML = "New Value";

var img = document.getElementById("madi");
var marginLeft = 0;
function marginRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
  //  img.style.marginLeft = '100px';
  var interval = setInterval(marginRight, 50);
};