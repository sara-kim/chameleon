$(document).ready(function()
{

    // Calendar 시작
    var today = new Date();
    var date = new Date();
    var pday = ["일", "월", "화", "수", "목", "금", "토"];

    function prevCalendar() 
    {
    // 이전 달을 today에 값을 저장하고 달력에 today를 넣어줌
    //today.getFullYear() 현재 년도//today.getMonth() 월  //today.getDate() 일 
    //getMonth()는 현재 달을 받아 오므로 이전달을 출력하려면 -1을 해줘야함
     today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
     buildCalendar(); //달력 cell 만들어 출력 
    }

    function nextCalendar() 
    {
        // 다음 달을 today에 값을 저장하고 달력에 today 넣어줌
        //today.getFullYear() 현재 년도//today.getMonth() 월  //today.getDate() 일 
        //getMonth()는 현재 달을 받아 오므로 다음달을 출력하려면 +1을 해줘야함
         today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
         buildCalendar();
    }
    function buildCalendar(){
        var doMonth = new Date(today.getFullYear(),today.getMonth(),1);
        //이번 달의 첫째 날
        var lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
        //이번 달의 마지막 날
        var tbCalendar = document.getElementById("calendar");
        //날짜를 찍을 테이블 변수
        var tbCalendarYM = document.getElementById("tbCalendarYM");
        //테이블에 정확한 날짜 찍는 변수
         tbCalendarYM.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월"; 

        while (tbCalendar.rows.length > 2) {
        //열을 지워줌
              tbCalendar.deleteRow(tbCalendar.rows.length-1);
              //테이블의 tr 갯수 만큼의 열 묶음은 -1칸 해줘야지 
            //30일 이후로 담을달에 순서대로 열이 계속 이어진다.
         }
         var row = null;
         row = tbCalendar.insertRow();
         //테이블에 새로운 열 삽입//즉, 초기화
         var cnt = 0;// count, 셀의 갯수를 세어주는 역할
        // 1일이 시작되는 칸을 맞추어 줌
         for (i=0; i<doMonth.getDay(); i++) {
              cell = row.insertCell();//열 한칸한칸 계속 만들어주는 역할
              cnt = cnt + 1;//열의 갯수를 계속 다음으로 위치하게 해주는 역할
         }
        /*달력 출력*/
         for (i=1; i<=lastDate.getDate(); i++) { 
              cell = row.insertCell();
              cell.innerHTML = i;
              cnt = cnt + 1;
          if (cnt % 7 == 1) {
            cell.innerHTML = "<font color=#ff0000>" + i
        }    
          if (cnt%7 == 0){
              cell.innerHTML = "<font color=#0000ff>" + i           
               row = calendar.insertRow();
          }
          if (today.getFullYear() == date.getFullYear()
             && today.getMonth() == date.getMonth()
             && i == date.getDate()) {
            cell.bgColor = "#dddddd";
           }
         }
    }

    var pmon = date.getMonth()+1;
    var pdate = date.getDate();

    var lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
    $("#timeTable .printDate .pDate").text(pmon+"월 "+pdate+"일 "+pday[date.getDay()]);
    $("#timeTable .printDate button").eq(1).on("click",function()
    {
        pdate--;
        $("#timeTable .printDate .pDate").text(pmon+"월 "+pdate+"일 "+pday[date.getDay()]);
        
    });
    $("#timeTable .printDate button").eq(2).on("click", function()
    {   
    
        pdate++;
        if(pdate > lastDate.getDate())
        {
            pdate=1;
            pmon++;
            
            if(pmon > 12)
            pmon=1;
            
        }
        $("#timeTable .printDate .pDate").text(pmon+"월 "+pdate+"일 "+pday[date.getDay()]);
    });
    
    var _printCal = $(".timeTable .printDate button").eq(0);
    var _prevM = $("#calendar thead tr th").eq(0).children("button");
    var _nextM = $("#calendar thead tr th").eq(2).children("button");
    _printCal.on("click",function()
    {
        buildCalendar();
        $(this).toggleClass("active");
        if(_printCal.hasClass("active"))
            $("#calendar").show();
        else
            $("#calendar").hide();
        return false;
    });
    _prevM.on("click",function()
    {
        prevCalendar();
        return false;
    });
    _nextM.on("click",function()
    {
        nextCalendar();
        return false;
    });

    // Calendar 종료

    function minimap()
    {
        var printSeat = "";
        for(var i=1; i<=10; i++)
        {
            for(var j=1; j<=12; j++)
            {
                printSeat += "<div class='selSeat'></div>";
            }
        }
        document.getElementById("pSe").innerHTML=printSeat;
        for(var k=0; k<24; k++)
        {
            var rand = [Math.floor(Math.random()*120)+1];
            console.log(rand);
            $("#minimap #pSe .selSeat").eq(rand).addClass("scol");
        }
    }
    minimap();
    var _timeList = $("#timeTable .mvListArea .mvTime ul li a");
    _timeList.on("mouseenter", function()
    {
        var showMap = $("#minimap").clone().show();
        $(this).after(showMap);
        $(this).on("mouseleave",function()
        {
            $("#minimap").hide();
        });
        return false;
    });
});