/**
 * Gnb Menu CSS
 */

$(function(){

  var timeID; // setInterval, clearinterval에서 사용할 변수

  $('.css-menu-depth1-link').on('mouseenter', function(){

   // removerClass 하기위해 실행되고 있는 setInterval 취소
    clearInterval(timeID);

   // promise() : 앞선 동작이 모두 끝난 후 특정 기능을 실행 시킬 때 사용
    $(this).next().addClass('on').promise().done(function(){

      var $depth2Wrap = $(this).parent().siblings().children('.css-menu-depth2-wrap');

      // setTimeout() : ~초 이후에 한번만 실행

      /*
        1. 타이머 함수 실행 횟수수/취소
        2. 실행문의 횟수/시간 을 실행/취소

        를 고려해서 알고리즘을 만들기

        1. 일반 코딩 : setInterval(함수, 단위시간);

          setInterval(function(){
            실행문
          }, 단위시간);

          - 단위시간마다 setInterval과 실행문가 매번 실행

          Ex) 단위시간 1000, 회수 10 => 10초동안 setInterval 10번 실행, 실행문 10번 실행

              3.5초 시점에서 clearInterval 실행 => setInterval 3번, 실행문 3번 실행

        2. 시간이 취소되는 기능 구현 코딩

         var i = 0;
         setInterval(function(){
            if( i==10 ){
               실행문
            }
            i++;

          }, 단위시간);

          - 단위시간마다 setInterval은 매번 실행, 실행문은 i가 10일때 한번 실행

          Ex) 3.5초 시점에서 clearInterval 실행 => setInterval 3번 , 실행문 0번(실행취소)


     */

    var count = 0;

    timeID = setInterval(function(){
      if( count == 300 ){
        $depth2Wrap.removeClass('on');
      }
      count++;
    }, 1);

    });

  });

  $('.css-menu-depth1').on('mouseleave', function(){

    $('.css-menu-depth2-wrap').removeClass('on');

  });

});

/**
 * Gnb Menu jQuery
 */

$(function(){

  $('.menu-depth1-link').on('mouseenter', function(){
    // depth1 border 늘어나는 모션 효과
    $(this).children('.menu-depth1-border').stop().animate({
      width: 64
    }, 300);

    // depth2 메뉴 늘어나는 모션 효과
    var depth1Index = $(this).index('.menu-depth1-link');
    var motionHeight = 54;

    if( depth1Index == 1 ){
      motionHeight = 80;
    }

    $(this).next('.menu-depth2-wrap').css({'z-index' : 10}).stop().animate({
      height: motionHeight,
      opacity : 1
    }, 300, function(){
      // $(this) => .menu-depth2-wrap
      $(this).parent().siblings().children('.menu-depth2-wrap').css({'z-index' : 0 }).stop().animate({
        height: 0,
        opacity: 0
      }, 200);

    });

  });

  $('.menu-depth1-link').on('mouseleave', function(){
    // depth1 border 줄어드는 모션효과
    $(this).children('.menu-depth1-border').stop().animate({
      width: 0
    }, 300);

    $('.menu-depth1').on('mouseleave', function(){
      // depth2 메뉴 줄어드는 모션 효과
    $('.menu-depth2-wrap').stop().animate({
      height: 0,
      opacity: 0
    }, 200);
     });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmJfbWVudV9jc3MuanMiLCJfZ25iX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ25iX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR25iIE1lbnUgQ1NTXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgdGltZUlEOyAvLyBzZXRJbnRlcnZhbCwgY2xlYXJpbnRlcnZhbOyXkOyEnCDsgqzsmqntlaAg67OA7IiYXHJcblxyXG4gICQoJy5jc3MtbWVudS1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgIC8vIHJlbW92ZXJDbGFzcyDtlZjquLDsnITtlbQg7Iuk7ZaJ65CY6rOgIOyeiOuKlCBzZXRJbnRlcnZhbCDst6jshoxcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZUlEKTtcclxuXHJcbiAgIC8vIHByb21pc2UoKSA6IOyVnuyEoCDrj5nsnpHsnbQg66qo65GQIOuBneuCnCDtm4Qg7Yq57KCVIOq4sOuKpeydhCDsi6Ttlokg7Iuc7YKsIOuVjCDsgqzsmqlcclxuICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdvbicpLnByb21pc2UoKS5kb25lKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICB2YXIgJGRlcHRoMldyYXAgPSAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5jc3MtbWVudS1kZXB0aDItd3JhcCcpO1xyXG5cclxuICAgICAgLy8gc2V0VGltZW91dCgpIDogfuy0iCDsnbTtm4Tsl5Ag7ZWc67KI66eMIOyLpO2WiVxyXG5cclxuICAgICAgLypcclxuICAgICAgICAxLiDtg4DsnbTrqLgg7ZWo7IiYIOyLpO2WiSDtmp/siJjsiJgv7Leo7IaMXHJcbiAgICAgICAgMi4g7Iuk7ZaJ66y47J2YIO2an+yImC/si5zqsIQg7J2EIOyLpO2WiS/st6jshoxcclxuXHJcbiAgICAgICAg66W8IOqzoOugpO2VtOyEnCDslYzqs6DrpqzsppjsnYQg66eM65Ok6riwXHJcblxyXG4gICAgICAgIDEuIOydvOuwmCDsvZTrlKkgOiBzZXRJbnRlcnZhbCjtlajsiJgsIOuLqOychOyLnOqwhCk7XHJcblxyXG4gICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAg7Iuk7ZaJ66y4XHJcbiAgICAgICAgICB9LCDri6jsnITsi5zqsIQpO1xyXG5cclxuICAgICAgICAgIC0g64uo7JyE7Iuc6rCE66eI64ukIHNldEludGVydmFs6rO8IOyLpO2WieusuOqwgCDrp6Trsogg7Iuk7ZaJXHJcblxyXG4gICAgICAgICAgRXgpIOuLqOychOyLnOqwhCAxMDAwLCDtmozsiJggMTAgPT4gMTDstIjrj5nslYggc2V0SW50ZXJ2YWwgMTDrsogg7Iuk7ZaJLCDsi6TtlonrrLggMTDrsogg7Iuk7ZaJXHJcblxyXG4gICAgICAgICAgICAgIDMuNey0iCDsi5zsoJDsl5DshJwgY2xlYXJJbnRlcnZhbCDsi6TtlokgPT4gc2V0SW50ZXJ2YWwgM+uyiCwg7Iuk7ZaJ66y4IDPrsogg7Iuk7ZaJXHJcblxyXG4gICAgICAgIDIuIOyLnOqwhOydtCDst6jshozrkJjripQg6riw64qlIOq1rO2YhCDsvZTrlKlcclxuXHJcbiAgICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoIGk9PTEwICl7XHJcbiAgICAgICAgICAgICAgIOyLpO2WieusuFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrKztcclxuXHJcbiAgICAgICAgICB9LCDri6jsnITsi5zqsIQpO1xyXG5cclxuICAgICAgICAgIC0g64uo7JyE7Iuc6rCE66eI64ukIHNldEludGVydmFs7J2AIOunpOuyiCDsi6TtloksIOyLpO2WieusuOydgCBp6rCAIDEw7J2865WMIO2VnOuyiCDsi6TtlolcclxuXHJcbiAgICAgICAgICBFeCkgMy417LSIIOyLnOygkOyXkOyEnCBjbGVhckludGVydmFsIOyLpO2WiSA9PiBzZXRJbnRlcnZhbCAz67KIICwg7Iuk7ZaJ66y4IDDrsogo7Iuk7ZaJ7Leo7IaMKVxyXG5cclxuXHJcbiAgICAgKi9cclxuXHJcbiAgICB2YXIgY291bnQgPSAwO1xyXG5cclxuICAgIHRpbWVJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKCBjb3VudCA9PSAzMDAgKXtcclxuICAgICAgICAkZGVwdGgyV3JhcC5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgfVxyXG4gICAgICBjb3VudCsrO1xyXG4gICAgfSwgMSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuY3NzLW1lbnUtZGVwdGgxJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5jc3MtbWVudS1kZXB0aDItd3JhcCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCIvKipcclxuICogR25iIE1lbnUgalF1ZXJ5XHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcubWVudS1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGRlcHRoMSBib3JkZXIg64qY7Ja064KY64qUIOuqqOyFmCDtmqjqs7xcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWRlcHRoMS1ib3JkZXInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHdpZHRoOiA2NFxyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICAvLyBkZXB0aDIg66mU64m0IOuKmOyWtOuCmOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICB2YXIgZGVwdGgxSW5kZXggPSAkKHRoaXMpLmluZGV4KCcubWVudS1kZXB0aDEtbGluaycpO1xyXG4gICAgdmFyIG1vdGlvbkhlaWdodCA9IDU0O1xyXG5cclxuICAgIGlmKCBkZXB0aDFJbmRleCA9PSAxICl7XHJcbiAgICAgIG1vdGlvbkhlaWdodCA9IDgwO1xyXG4gICAgfVxyXG5cclxuICAgICQodGhpcykubmV4dCgnLm1lbnUtZGVwdGgyLXdyYXAnKS5jc3Moeyd6LWluZGV4JyA6IDEwfSkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQ6IG1vdGlvbkhlaWdodCxcclxuICAgICAgb3BhY2l0eSA6IDFcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgLy8gJCh0aGlzKSA9PiAubWVudS1kZXB0aDItd3JhcFxyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5tZW51LWRlcHRoMi13cmFwJykuY3NzKHsnei1pbmRleCcgOiAwIH0pLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICB9LCAyMDApO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLm1lbnUtZGVwdGgxLWxpbmsnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBkZXB0aDEgYm9yZGVyIOykhOyWtOuTnOuKlCDrqqjshZjtmqjqs7xcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWRlcHRoMS1ib3JkZXInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHdpZHRoOiAwXHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgICQoJy5tZW51LWRlcHRoMScpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgICAgLy8gZGVwdGgyIOuplOuJtCDspITslrTrk5zripQg66qo7IWYIO2aqOqzvFxyXG4gICAgJCgnLm1lbnUtZGVwdGgyLXdyYXAnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodDogMCxcclxuICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwgMjAwKTtcclxuICAgICB9KTtcclxuICB9KTtcclxufSk7Il19
