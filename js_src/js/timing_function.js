/**
 * Ease 값 비교
 */

$(function(){

  function repeat() {

    $('.box1').css({top:0}).stop().animate({top: 450}, 2000, 'linear');
    $('.box2').css({top:0}).stop().animate({top: 450}, 2000, 'easeInExpo');
    $('.box3').css({top:0}).stop().animate({top: 450}, 2000, 'easeOutExpo');
    $('.box4').css({top:0}).stop().animate({top: 450}, 2000, 'easeInOutExpo');
    $('.box5').css({top:0}).stop().animate({top: 450}, 2000, $.bez([.15,.8,0,.18]));

  }

  setInterval(function(){
    repeat();
  }, 2500);

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWluZ19mdW5jdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ0aW1pbmdfZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRWFzZSDqsJIg67mE6rWQXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBmdW5jdGlvbiByZXBlYXQoKSB7XHJcblxyXG4gICAgJCgnLmJveDEnKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDogNDUwfSwgMjAwMCwgJ2xpbmVhcicpO1xyXG4gICAgJCgnLmJveDInKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDogNDUwfSwgMjAwMCwgJ2Vhc2VJbkV4cG8nKTtcclxuICAgICQoJy5ib3gzJykuY3NzKHt0b3A6MH0pLnN0b3AoKS5hbmltYXRlKHt0b3A6IDQ1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLmJveDQnKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDogNDUwfSwgMjAwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcclxuICAgICQoJy5ib3g1JykuY3NzKHt0b3A6MH0pLnN0b3AoKS5hbmltYXRlKHt0b3A6IDQ1MH0sIDIwMDAsICQuYmV6KFsuMTUsLjgsMCwuMThdKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgIHJlcGVhdCgpO1xyXG4gIH0sIDI1MDApO1xyXG5cclxufSk7XHJcbiJdfQ==
