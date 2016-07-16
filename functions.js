$(document).ready(function() {
    var imgs = $(".slider img"),
        indicators = $(".indicator span"),
        imgsNum = imgs.length,
        IndicatorsNum = indicators.length,
        contactWidth =  $(".contact").width();

    // Smooth Scrolling Function
    (function smoothScroll() {
        $("a[href^='#']").on("click", function(event) {
            var target = $($(this).attr("href"));
            event.preventDefault();
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 1000);
        });
    })();
    // Menu Expansion Function
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
        }
    }, 5000);

    // Indicators Clicking Function
    indicators.on("click", function() {
        var $this = $(this),
            $position = indicators.index($this);
        indicators.removeClass("active").eq($position).addClass("active");
        imgs.removeClass("in out").eq($position).addClass("in");
        imgs.not(imgs.eq($position)).addClass("out");
    });

    // Expand Prices Plans Function
    $(".plan-expand").on("click", function() {
        var $parent = $($(this).parent());
        $parent.siblings(".plan-details").toggleClass("expanded");
        $(this).children("svg").toggleClass("reversed");
    });
    // Contact section height
    $(".contact").css({"height": contactWidth + "px"}).css({
  "top": " calc( 50% - "+ contactWidth +"px)"}).css({"left": " calc( 50% - "+ contactWidth/2 +"px)"});
});
