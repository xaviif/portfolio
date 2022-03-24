/*\/
 **https://stackoverflow.com/a/56678169
 **https://stackoverflow.com/a/7557433
/*
function onVisibilityChange(el, callback) {
  var old_visible;
  return function () {
      var visible = isElementInViewport(el);
      if (visible != old_visible) {
          old_visible = visible;
          if (typeof callback == 'function') {
              callback();
          }
      }
  }
}

function isElementInViewport (el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() 
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() 
  );
}

const observer = new IntersectionObserver( 
  ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
  {threshold: [1]}
);
let handlerArray = [];
document.querySelectorAll('.titlecont').forEach(div => { 
  var handler = onVisibilityChange(div, function() {
    console.log(div.getBoundingClientRect().y > 0)
    if(div.getBoundingClientRect().y < 0){
      observer.observe(div)
    }else{
      observer.unobserve(div);
      div.removeAttribute('stuck')
    }
  });
  handlerArray.push(handler);
});

handlerArray.forEach(el => $(window).on('DOMContentLoaded load resize scroll', el));

const checkpoint = 300;
 
document.querySelector(".workcase").addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".workcase").style.opacity = opacity;
});*/
console.log("2")
let yvalue;
var body = document.body,
    html = document.documentElement;

var winHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
document.addEventListener('scroll', function(e){
  var scrolltotop = document.scrollingElement.scrollTop;
  var targets = document.getElementsByClassName("bkImgPar");
  var xvalue = "center";
  var factor = 0.05;
  let offsetTops = [];
  console.log(targets)
  for(let i in targets){
    if(i=="length"){return}
    offsetTops[i] = targets[i].getBoundingClientRect().top;
    yvalue = (15) - (offsetTops[i] * 1.5) * factor;
    if(yvalue >= 0){
      targets[i].style.backgroundPosition = xvalue + " " + yvalue + "%";
    }else{
      targets[i].style.backgroundPosition = xvalue + " " + 0 + "%";
    

    }
    }
});
