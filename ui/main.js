
//Cunter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};

/*console.log('Loaded!');

//add new value to the element
var element = document.getElementById("main-text");
//element.innerHTML = "New Value";

var img = document.getElementById("madi");
var marginLeft = 0;
function marginRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
  //  img.style.marginLeft = '100px';
  var interval = setInterval(marginRight, 50);
};  */
