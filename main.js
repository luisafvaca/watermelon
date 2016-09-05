var seed = document.querySelectorAll(".seed");

window.addEventListener('deviceorientation', isMoved, true);

function isMoved(event) {

  var pha = event.alpha;
  var bta = event.beta;
  var gma = event.gamma;

  if(window.DeviceOrientationEvent) {
    gma = percent(gma, 8)
    Array.from(seed).map(function(after,before) {
      before = after.style.transform = 'translateX(' + gma + 'px)';
      return before;
    })
  }
}


function percent(num, amount) {
  return num*amount/100;
}
