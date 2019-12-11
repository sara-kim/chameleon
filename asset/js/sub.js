$(document).ready(function()
{
    // FAQ 질문글 이벤트 시작
    var _boardList = $("#boardArea .boardList");
    
    _boardList.find("a").on("click",function()
    {
        $(this).find(".boardHead3").toggleClass("hoverColor");
        $(this).next().toggleClass("detailVisible");
        if($(this).next().hasClass("detailVisible"))
            $(this).attr("title","질문 상세접기");
        else
            $(this).attr("title","질문 상세보기");

        

        return false;
    });
    // FAQ 질문글 이벤트 종료

    // Question 이벤트 시작
    var _quesForm = $("#quesForm .selFirst");
    var _quesForm2 = $("#quesForm .selSecond");
    var _quesForm3 = $("#quesForm .quesType");
    var _ulBtn = $("#quesForm .ulBtn");
    var _ulBtn2 = $("#quesForm2 .ulBtn");
    var _ulBtn3 = $("#_quesForm3 .selType");
    var _btn = _quesForm.find("button").first();
    var _btn2 = _quesForm2.find("button").first();
    var btn3 = _quesForm3.find("button").first();

    //문의유형 클릭 이벤트
    // if ( $(this).is(':animated') ) return false;
    btn3.on("click",function(e)
    {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).toggleClass("active");
        

        $(this).next().on("mouseleave",function()
        {
            $(this).stop().slideUp();
            $(this).prev().removeClass("active");
        });
        _ulBtn3.find("button:first, button:last").on("blur", function()
        {
            setTimeout(function()
            {
                
                if(!_ulBtn.find("button").is(":focus"))
                _ulBtn.stop().slideUp(); 
            },1000);
        });
    });

    // 지점, 영화관 선택 이벤트
    _btn.on("click",function(e)
    {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).toggleClass("active");

        $(this).next().on("mouseleave",function()
        {
            $(this).stop().slideUp();
            $(this).prev().removeClass("active");
        });
        _ulBtn.find("button:first, button:last").on("blur", function()
        {
            setTimeout(function()
            {
                if(!_ulBtn.find("button").is(":focus"))
                _ulBtn.stop().slideUp(); 
            },1000);
        });
    })
    _btn2.on("click",function(e)
    {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).toggleClass("active");

        $(this).next().on("mouseleave",function()
        {
            $(this).stop().slideUp();
            $(this).prev().removeClass("active");
        });
        _ulBtn2.find("button:first, button:last").on("blur", function()
        {
            setTimeout(function()
            {
                if(!_ulBtn2.find("button").is(":focus"))
                _ulBtn2.stop().slideUp(); 
            },1000);
        });
    })

    // textarea 글자수 카운트
    $("#quesTarea").keyup(function()
    {
        var print = $(this).val().length;
        $("#quesTarea + p span").text(print);
    });
    
    // Question 이벤트 종료
});