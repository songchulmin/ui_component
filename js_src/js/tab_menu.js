
/**
 * Tab Menu CSS
 */

$(function(){

  $('.css-tab-heading').on('click', function(e){

    e.preventDefault();

    var tabIndex = $(this).index('.css-tab-heading');

    $('.css-tab-heading>a').removeClass('on');
    $('.css-tab-heading').eq(tabIndex).children('a').addClass('on');

    $('.css-tab-content').removeClass('on');
    $('.css-tab-content').eq(tabIndex).addClass('on');

  });

});
/**
 * Tab Menu Jquery
 */

$(function(){

  $('.tab-heading').on('click', function(e){

    e.preventDefault();

    var tabIndex = $(this).index('.tab-heading');

    $('.tab-heading>a').removeClass('on');
    $('.tab-heading').eq(tabIndex).children('a').addClass('on');

    $('.tab-content').fadeOut(100);
    $('.tab-content').eq(tabIndex).fadeIn(300);

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl90YWJfbWVudV9jc3MuanMiLCJfdGFiX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ0YWJfbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICogVGFiIE1lbnUgQ1NTXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuY3NzLXRhYi1oZWFkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciB0YWJJbmRleCA9ICQodGhpcykuaW5kZXgoJy5jc3MtdGFiLWhlYWRpbmcnKTtcclxuXHJcbiAgICAkKCcuY3NzLXRhYi1oZWFkaW5nPmEnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5jc3MtdGFiLWhlYWRpbmcnKS5lcSh0YWJJbmRleCkuY2hpbGRyZW4oJ2EnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAkKCcuY3NzLXRhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcuY3NzLXRhYi1jb250ZW50JykuZXEodGFiSW5kZXgpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBUYWIgTWVudSBKcXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy50YWItaGVhZGluZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgdGFiSW5kZXggPSAkKHRoaXMpLmluZGV4KCcudGFiLWhlYWRpbmcnKTtcclxuXHJcbiAgICAkKCcudGFiLWhlYWRpbmc+YScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLnRhYi1oZWFkaW5nJykuZXEodGFiSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJCgnLnRhYi1jb250ZW50JykuZmFkZU91dCgxMDApO1xyXG4gICAgJCgnLnRhYi1jb250ZW50JykuZXEodGFiSW5kZXgpLmZhZGVJbigzMDApO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
