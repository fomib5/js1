$(document).ready(function(){
    var timer;
    var first = 0;
    var second = 0;
    var third = 0;
    var fourth = 0;
    
    $(".first").html(first);
    $(".second").html(second);
    $(".third").html(third);
    $(".fourth").html(fourth);

    $(".btn-start").click(function(){
        $(this).css("opacity","0.5");
        $(".btn-stop").css("opacity","1");
        $(".btn-reset").css("opacity","1");
        timer = setInterval(function(){
            first++;
            if(first == 10){
                second++;
                first = 0;
            }
            if(second == 10){
                third++;
                second = 0;
            }
            if(third == 10){
                fourth++;
                third = 0;
            }
            if(fourth == 10){
                fourth = 0;
            }
            $(".first").html(first);
            $(".second").html(second);
            $(".third").html(third);
            $(".fourth").html(fourth);
        },100);
    });
    $(".btn-stop").click(function(){
        $(this).css("opacity","0.5");
        $(".btn-start").css("opacity","1");
        clearInterval(timer);
    });
    $(".btn-reset").click(function(){
        $(this).css("opacity","0.5");
        $(".btn-start").css("opacity","1");
        $(".btn-stop").css("opacity","0.5");     
        clearInterval(timer);
        first = 0;
        second = 0;
        third = 0;
        fourth = 0;
        $(".first").html(first);
        $(".second").html(second);
        $(".third").html(third);
        $(".fourth").html(fourth);
    });
});
