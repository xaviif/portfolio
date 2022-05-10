/*
 **https://stackoverflow.com/a/56678169
 **https://stackoverflow.com/a/7557433
*/
let yvalue;
var body = document.body,
    html = document.documentElement;

var winHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                          html.clientHeight, html.scrollHeight, html.offsetHeight );
document.addEventListener('scroll', function(e){
  let target = document.getElementById("ElmFoodParallax");
  var xvalue = "center";
  var factor = 0.075;
  let offsetTops = [];
  
  offsetTops[0] = target.getBoundingClientRect().top;
  yvalue = (65) - (offsetTops[0] * 1.5) * factor;
  if(yvalue >= 0){
    target.style.backgroundPosition = xvalue + " " + yvalue + "%";
  }else{
    target.style.backgroundPosition = xvalue + " " + 0 + "%";
  }
});

/**Change background attributes based on interval**/
let bkPositionChangeInterval = 300;
let bkPosPercent = [40, 69];
let randomTypePromised = 0;
let randomTypeOf = Math.floor(Math.random()*4)
let bkPositionChangeFn = ()=>{
  bkPositionChangeInterval = 3500 + Math.random() * 8500
  bkPosPercent = [38+Math.random() * 25, 67+Math.random() * 25]

  $("#SmileFaceParallax").css({
    backgroundPosition: `${bkPosPercent[0]}% ${bkPosPercent[1]}%`,
    backgroundSize: `${Math.random()*200}vw`,
    filter: `brightness(91%) saturate(94%) blur(0.59px)`,
    transition: `all ${(Math.random() < 0.1 && randomTypePromised === 0)?0.741:0}s`
  })
  randomTypeOf = Math.floor(Math.random()*4)
  if(randomTypeOf === 1 || randomTypePromised > 0){
    bkPositionChangeInterval = 166.6741
    randomTypePromised += 1;
    if(randomTypePromised > 1){
      randomTypePromised = 0;
    }
  }
  console.log(randomTypeOf, randomTypePromised, bkPositionChangeInterval)
  setTimeout(bkPositionChangeFn, bkPositionChangeInterval)
}
bkPositionChangeFn()