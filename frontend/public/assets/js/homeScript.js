window.onscroll = function() {
  stickHeader();
};

var header = document.getElementById("product-types-header");
var temp = document.getElementById("temp-element");
var sticky = header.offsetTop;

var widthHeader = header.offsetWidth;
var heightHeader = header.offsetHeight;

function stickHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.style.width = `${widthHeader}px`;
    temp.style.height = `${heightHeader}px`;
  } else {
    header.classList.remove("sticky");
    temp.style.height = `${0}px`;
  }
}  