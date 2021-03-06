var controls = document.querySelector('.slider__controls');
var range = document.querySelector('.slider__range');
var toggle = range.querySelector('.slider__toggle');
var bar = range.querySelector('.slider__bar');

var before = document.querySelector('.slider__photo-wrapper--before');

var buttonBefore = document.querySelector('.slider__controls-legend--before');
var buttonAfter = document.querySelector('.slider__controls-legend--after');

controls.classList.remove('slider__controls--nojs');
buttonBefore.removeAttribute("disabled");
buttonAfter.removeAttribute("disabled");

var rangeClientCoords = range.getBoundingClientRect();

toggle.onmousedown = function(event) {
  event.preventDefault();

  var toggleClientCoords = toggle.getBoundingClientRect();
  var shiftX = event.clientX - toggleClientCoords.left;
  var right = range.offsetWidth - toggle.offsetWidth;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    var newLeft = event.clientX - shiftX - rangeClientCoords.left;

    if (newLeft < 0) {
      newLeft = 0;
    }

    if (newLeft > right) {
      newLeft = right;
    }

    toggle.style.left = newLeft/right * 100 + '%';
    bar.style.width = newLeft/right * 100 + '%';
    before.style.width = newLeft/right * 100 + '%';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
};

toggle.ondragstart = function() {
  return false;
};

buttonBefore.addEventListener('click', function() {
    toggle.style.left = 100 + '%';
    bar.style.width = 100 + '%';
    before.style.width = 100 + '%';
});

buttonAfter.addEventListener('click', function() {
    toggle.style.left = 0 + '%';
    bar.style.width = 0 + '%';
    before.style.width = 0 + '%';
});
