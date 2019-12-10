$(document).ready(function() {
  $('.tab:first-of-type, .tabpanel:first-of-type').addClass('active').attr('tabIndex', 0);
  //의미적 표현(접근성-state) : 탭버튼 : aria-selected, 탭패널 : aria-hidden
  $('.tab:first-of-type').attr('aria-selected', true);
  $('.tabpanel:first-of-type').attr('aria-hidden', false);

  /* 2) 탭버튼에서 키보드를 누르는 이벤트(keydown) - 키보드 제어*/
  $('.tab').on('keydown', function (e) {
    var key = e.keyCode;
    console.log(key); //왼쪽방향키 37 , 오른쪽 방향키 39, 스페이스바 32 , 엔터 13
    switch (key) {
      /* a) 왼쪽 방향키 */
      case 37:    //왼쪽 방향키
        $(this).attr('tabIndex', -1);
        if ($(this).hasClass('first')) $(this).siblings('.last').attr('tabIndex', 0).focus();
        else $(this).prev().attr('tabIndex', 0).focus();
        break;
      /* b) 오른쪽 방향키 */
      case 39:  //오른쪽 방향키
        $(this) .attr('tabIndex', -1);
        if ($(this).hasClass('last')) $(this).siblings('.first').attr('tabIndex', 0).focus();
        else $(this).next().attr('tabIndex', 0).focus();
        break;
      case 36:  //HOME 키는 가장 처음으로
        e.preventDefault();
        $(this).siblings('.first').attr('tabIndex', 0).focus();
        break;
      case 35:  //END 키는 가장 마지막으로
        e.preventDefault();
        $(this).siblings('.last').attr('tabIndex', 0).focus();
        break;
      /* c) enter, spacebar 탭실행(탭 선택, 탭 클릭) */
      case 32:  //스페이스바
      case 13:  //엔터
        var $tg = $(this);
        activeOn($tg);
        break;
    }
  });

  //3) 탭 클릭 이벤트
  $('.tab').on('click', function () {
    var $tg = $(this);
    activeOn($tg);
  });

  function activeOn($target) {
    $target.addClass('active').attr({'aria-selected': true, tabIndex: 0}).siblings().removeClass('active').attr({'aria-selected': false, tabIndex: -1});
    $('#' + $target.attr('aria-controls')).addClass('active').attr({'aria-hidden': false, tabIndex: 0}).siblings('.tabpanel').removeClass('active').attr({'aria-hidden': true, tabIndex: -1});
  }
});