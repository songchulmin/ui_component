/**
 * Accordion menu CSS
 */

// 선언부

$(function(){

  function init(){
    // 처음 로딩 되었을 때 상태
    $('.css-lnb-depth1-link').data({'open' : 'false'});


    // each() : 요소 개수만큼 반복 하는 함수
    $('.css-lnb-depth2').each(function(index){
      $(this).data({ 'height' : $(this).height() }).css({height : 0});
    });

  }

  function menuOpen( $depth1Link ){

    $depth1Link.next().css({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');
  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.css-lnb-depth2').css({
      height : 0
    });

    $depth1Link.parent().siblings().children('.css-lnb-depth1-link').data('open', 'false').removeClass('up');
  }

  function menuSelfClose( $depth1Link ){

    $depth1Link.next().css({
      height: 0
    });

    $depth1Link.data({'open': 'false'}).removeClass('up');
  }



// 실행부

  init();



  $('.css-lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false') {

      menuOpen( $(this) );
      menuClose( $(this) );


    } else {

      menuSelfClose( $(this) );

    }
  });

});

/**
 * Accordion menu jQuery
 */

/*
  ※ show/hide 형태의 아코디언 메뉴
  ※ CSS 코딩 : styling, hide

   1. 마우스 클릭했을 때 sub 메뉴가 show / hide
   2. 클릭한 1depth 의 sub 메뉴가 show 보일 때 다른 1depth 의 sub 메뉴는 안보여야 함
   3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
   4. sub 메뉴가 안보이게 때 화살표는 아랫방향 화살표로 변경

 */

/*
  ※ sub 메뉴의 영역이 늘어났다/줄어들었다 형태의 아코디언 메뉴
  ※ CSS 코딩 : styling, 줄어듬(높이 : 0)

   1. 마우스를 클릭했을 때, sub 메뉴의 상태에 따라 sub 메뉴가 늘어남/줄어듬
   2. 클릭한 1depth 의 sub 메뉴가 늘어날 때 다른 1 depth 의 sub 메뉴는 줄어들어야 함
   3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
   4. sub 메뉴가 안보이게 때 화살표는 아랫방향 화살표로 변경

 */





$(function(){

  // 선언부
  function init(){
    // 처음 로딩 되었을 때 상태
    $('lnb-depth1-link').data({'open' : 'false'});


    // each() : 요소 개수만큼 반복 하는 함수
    $('.lnb-depth2').each(function(index){
      $(this).data({ 'height' : $(this).height() }).css({height : 0});
    });

  }

  function menuOpen( $depth1Link ){

    $depth1Link.next().stop().animate({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');
  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.lnb-depth2').stop().animate({
      height : 0
    });

    $depth1Link.parent().siblings().children('.lnb-depth1-link').data('open', 'false').removeClass('up');
  }

  function menuSelfClose( $depth1Link ){

    $depth1Link.next().stop().animate({
      height: 0
    });

    $depth1Link.data({'open': 'false'}).removeClass('up');
  }

  // 실행부

  init();

  $('.lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false') {

      menuOpen( $(this) );
      menuClose( $(this) );


    } else {

      menuSelfClose( $(this) );

    }
  });


});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hY2NfbWVudV9jc3MuanMiLCJfYWNjX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFjY19tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEFjY29yZGlvbiBtZW51IENTU1xyXG4gKi9cclxuXHJcbi8vIOyEoOyWuOu2gFxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAvLyDsspjsnYwg66Gc65SpIOuQmOyXiOydhCDrlYwg7IOB7YOcXHJcbiAgICAkKCcuY3NzLWxuYi1kZXB0aDEtbGluaycpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuXHJcblxyXG4gICAgLy8gZWFjaCgpIDog7JqU7IaMIOqwnOyImOunjO2BvCDrsJjrs7Ug7ZWY64qUIO2VqOyImFxyXG4gICAgJCgnLmNzcy1sbmItZGVwdGgyJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICQodGhpcykuZGF0YSh7ICdoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKSB9KS5jc3Moe2hlaWdodCA6IDB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVPcGVuKCAkZGVwdGgxTGluayApe1xyXG5cclxuICAgICRkZXB0aDFMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAkZGVwdGgxTGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDFMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkZGVwdGgxTGluayApe1xyXG4gICAgJGRlcHRoMUxpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmNzcy1sbmItZGVwdGgyJykuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGRlcHRoMUxpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmNzcy1sbmItZGVwdGgxLWxpbmsnKS5kYXRhKCdvcGVuJywgJ2ZhbHNlJykucmVtb3ZlQ2xhc3MoJ3VwJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51U2VsZkNsb3NlKCAkZGVwdGgxTGluayApe1xyXG5cclxuICAgICRkZXB0aDFMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQ6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDFMaW5rLmRhdGEoeydvcGVuJzogJ2ZhbHNlJ30pLnJlbW92ZUNsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuLy8g7Iuk7ZaJ67aAXHJcblxyXG4gIGluaXQoKTtcclxuXHJcblxyXG5cclxuICAkKCcuY3NzLWxuYi1kZXB0aDEtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJykge1xyXG5cclxuICAgICAgbWVudU9wZW4oICQodGhpcykgKTtcclxuICAgICAgbWVudUNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBBY2NvcmRpb24gbWVudSBqUXVlcnlcclxuICovXHJcblxyXG4vKlxyXG4gIOKAuyBzaG93L2hpZGUg7ZiV7YOc7J2YIOyVhOy9lOuUlOyWuCDrqZTribRcclxuICDigLsgQ1NTIOy9lOuUqSA6IHN0eWxpbmcsIGhpZGVcclxuXHJcbiAgIDEuIOuniOyasOyKpCDtgbTrpq3tlojsnYQg65WMIHN1YiDrqZTribTqsIAgc2hvdyAvIGhpZGVcclxuICAgMi4g7YG066at7ZWcIDFkZXB0aCDsnZggc3ViIOuplOuJtOqwgCBzaG93IOuztOydvCDrlYwg64uk66W4IDFkZXB0aCDsnZggc3ViIOuplOuJtOuKlCDslYjrs7Tsl6zslbwg7ZWoXHJcbiAgIDMuIHN1YiDrqZTribTqsIAg67O07J28IOuVjCDtmZTsgrTtkZzripQg7JyX67Cp7ZalIO2ZlOyCtO2RnOuhnCDrs4Dqsr1cclxuICAgNC4gc3ViIOuplOuJtOqwgCDslYjrs7TsnbTqsowg65WMIO2ZlOyCtO2RnOuKlCDslYTrnqvrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG5cclxuICovXHJcblxyXG4vKlxyXG4gIOKAuyBzdWIg66mU64m07J2YIOyYgeyXreydtCDripjslrTrgqzri6Qv7KSE7Ja065Ok7JeI64ukIO2Yle2DnOydmCDslYTsvZTrlJTslrgg66mU64m0XHJcbiAg4oC7IENTUyDsvZTrlKkgOiBzdHlsaW5nLCDspITslrTrk6wo64aS7J20IDogMClcclxuXHJcbiAgIDEuIOuniOyasOyKpOulvCDtgbTrpq3tlojsnYQg65WMLCBzdWIg66mU64m07J2YIOyDge2DnOyXkCDrlLDrnbwgc3ViIOuplOuJtOqwgCDripjslrTrgqgv7KSE7Ja065OsXHJcbiAgIDIuIO2BtOumre2VnCAxZGVwdGgg7J2YIHN1YiDrqZTribTqsIAg64qY7Ja064KgIOuVjCDri6TrpbggMSBkZXB0aCDsnZggc3ViIOuplOuJtOuKlCDspITslrTrk6TslrTslbwg7ZWoXHJcbiAgIDMuIHN1YiDrqZTribTqsIAg67O07J28IOuVjCDtmZTsgrTtkZzripQg7JyX67Cp7ZalIO2ZlOyCtO2RnOuhnCDrs4Dqsr1cclxuICAgNC4gc3ViIOuplOuJtOqwgCDslYjrs7TsnbTqsowg65WMIO2ZlOyCtO2RnOuKlCDslYTrnqvrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG5cclxuICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDshKDslrjrtoBcclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAvLyDsspjsnYwg66Gc65SpIOuQmOyXiOydhCDrlYwg7IOB7YOcXHJcbiAgICAkKCdsbmItZGVwdGgxLWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcblxyXG5cclxuICAgIC8vIGVhY2goKSA6IOyalOyGjCDqsJzsiJjrp4ztgbwg67CY67O1IO2VmOuKlCDtlajsiJhcclxuICAgICQoJy5sbmItZGVwdGgyJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICQodGhpcykuZGF0YSh7ICdoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKSB9KS5jc3Moe2hlaWdodCA6IDB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVPcGVuKCAkZGVwdGgxTGluayApe1xyXG5cclxuICAgICRkZXB0aDFMaW5rLm5leHQoKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodCA6ICRkZXB0aDFMaW5rLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGRlcHRoMUxpbmsuZGF0YSh7J29wZW4nIDogJ3RydWUnfSkuYWRkQ2xhc3MoJ3VwJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51Q2xvc2UoICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcubG5iLWRlcHRoMicpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGRlcHRoMUxpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmxuYi1kZXB0aDEtbGluaycpLmRhdGEoJ29wZW4nLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRkZXB0aDFMaW5rICl7XHJcblxyXG4gICAgJGRlcHRoMUxpbmsubmV4dCgpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZGVwdGgxTGluay5kYXRhKHsnb3Blbic6ICdmYWxzZSd9KS5yZW1vdmVDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG5cclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5sbmItZGVwdGgxLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScpIHtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgbWVudVNlbGZDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4iXX0=
