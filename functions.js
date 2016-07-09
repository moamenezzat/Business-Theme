$(document).ready(function() {
    var imgs = $(".slider img"),
        indicators = $(".indicator span"),
        imgsNum = imgs.length,
        IndicatorsNum = indicators.length;

    // Menu Expansion
    //     if (matchMedia) {
    //     var mq = window.matchMedia("(max-width: 740px)");
    //     mq.addListener(console.log("changed"));
    //     WidthChange(mq);
    // }
    //     function WidthChange(mq){
    //       var menuHeight = -($(".menu").height())-10;
    //       if (mq.matches) {
    //         console.log(menuHeight);
    //     $(".quote").css("transform", "translateY("+(menuHeight)+"px)");
    //     $(".menu-expand").on("click", function(){
    //       $(".quote").toggleClass("down");
    //     });}else{
    //       $(".quote").css("transform", "translateY("+0+"px)");
    //     }};
    $(".menu-expand").on("click", function() {
        $(".menu").toggleClass("open");
    });
    // Time Loop Function
    setInterval(function() {
        var curImg = imgs.index($(".in"));
        if (curImg < imgsNum - 1) {
            imgs.eq(curImg).removeClass("in").addClass("out").next().removeClass("out").addClass("in");
            indicators.eq(curImg).removeClass("active").next().addClass("active");
        } else {
            imgs.eq(curImg).removeClass("in").addClass("out");
            imgs.eq(0).removeClass("out").addClass("in");
            indicators.eq(curImg).removeClass("active")
            indicators.eq(0).addClass("active");
        };
    }, 5000);

    // Indicators Clicking Function
    indicators.on("click", function() {
        var $this = $(this),
            $position = indicators.index($this);
        indicators.removeClass("active").eq($position).addClass("active");
        imgs.removeClass("in out").eq($position).addClass("in");
        imgs.not(imgs.eq($position)).addClass("out");
    });
})
