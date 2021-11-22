

var img, lens, result, cx, cy;
img = document.getElementById("img-zoom");
if(img) {
  result = document.getElementById("result-zoom");
  result.style.top = '-100%';
  lens = document.createElement("div");
  lens.setAttribute("class", "img-zoom-lens");
  lens.classList.add("img-lens-off");
  img.parentElement.insertBefore(lens, img);
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  
  function moveLens(e) {
    var pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    lens.classList.add("img-lens-off");
    if (x > img.width - lens.offsetWidth || x < 0 || y > img.height - lens.offsetHeight || y < 0) {
      lens.classList.add("img-lens-off");
      result.style.top = '-100%';
    } else {
      lens.classList.remove("img-lens-off");
      result.style.top = '0%';          
    }
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  
  var img_nonselecteds = document.getElementsByClassName("img-nonselected");
  var list_img = Array.from(img_nonselecteds);
  list_img.forEach(element => {
    element.addEventListener("click", e =>{
      list_img.forEach(item => {
        item.classList.remove("active");
      })
      element.classList.add("active");
      img.src = element.getElementsByTagName("img")[0].src;
      result.style.backgroundImage = "url('" + img.src + "')";
      result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    }
  )});
  
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
  
  $(document).ready(function() {
    var star_rating_width = $('.fill-ratings span').width();
    $('.star-ratings').width(star_rating_width);
  });  
}
