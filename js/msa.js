(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.8&appId=1940853722806931";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
$(document).ready(function () {
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width(); //取得螢幕寬度
        location.reload(); //重新整理刷新網頁
    }
    var resizeId;
    $(window).resize(function () {
        if ($window.width() >= 975) {
            clearTimeout(resizeId);
            resizeId = setTimeout(checkWidth, 500); //當停止螢幕拖拉才執行
            //  計算導覽列垂直置中的高度
            var pos = $(window).height() / 2 - $(".navrightbar").height() / 2;
            $(".navrightbar").css("top", pos);
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $("#aboutus").offset().top && $(window).scrollTop() < $("#allactivity").offset().top) {
            $(".navbtnsize").css("background-color", "#626262") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navrightbar li a:eq(0)").css("background-color", "#fff")
        }
        else if ($(window).scrollTop() >= $("#allactivity").offset().top && $(window).scrollTop() < $("#picturestroy").offset().top) {
            $(".navbtnsize").css("background-color", "#626262") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navrightbar li a:eq(1)").css("background-color", "#fff")
        }
        else if ($(window).scrollTop() >= $("#picturestroy").offset().top && $(window).scrollTop() < $("#ourteam").offset().top) {
            $(".navbtnsize").css("background-color", "#626262") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navrightbar li a:eq(2)").css("background-color", "#fff")
        }
        else if ($(window).scrollTop() >= $("#ourteam").offset().top && $(window).scrollTop() < $("#Exhibitioninformation").offset().top) {
            $(".navbtnsize").css("background-color", "#626262") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navrightbar li a:eq(3)").css("background-color", "#fff")
        }
        else if ($(window).scrollTop() >= $("#Exhibitioninformation").offset().top && $(window).scrollTop() < $("#commodity").offset().top) {
            $(".navbtnsize").css("background-color", "#626262") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navrightbar li a:eq(4)").css("background-color", "#fff")
        }
        else if ($(window).scrollTop() >= $("#contactus").offset().top) {
            $(".navbtnsize").css("background-color", "#626262") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".navrightbar li a:eq(5)").css("background-color", "#fff")
        }
    })
    $('.carousel').carousel();
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $('.tooltipped').tooltip({
        delay: 50
    });
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });
});
$(function () {
    var banner = document.getElementById('banner').clientHeight; //抓取banner的高
    var hompagemenu = document.getElementById('hompagemenu').clientHeight; //抓取hompagemenu的高 
    var aboutus = document.getElementById('aboutus').clientHeight; //抓取aboutus的高
    var creativepurpose = document.getElementById('creativepurpose').clientHeight; //抓取creativepurpose的高
    var allactivity = document.getElementById('allactivity').clientHeight; //抓取allactivity的高
    if (allactivity < 555) {
        allactivity = 590;
    }
    var picturestroy = document.getElementById('picturestroy').clientHeight; //抓取picturestroy的高
    var ourteam = document.getElementById('ourteam').clientHeight; //抓取ourteam的高
    var Exhibitioninformation = document.getElementById('Exhibitioninformation').clientHeight; //抓取Exhibitioninformation的高
    $(".usabout").click(function () {
        $("html,body").animate({
            scrollTop: banner + hompagemenu
        }, 900);
        $(".navbtnsize").css("background-color", "#626262"); //除了被點擊到的游標，其他都恢復成原來的顏色
        $(".navrightbar li a:eq(0)").css("background-color", "#fff");
        //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
        return false;
    });
    $(".activityall").click(function () {
        $("html,body").animate({
            scrollTop: banner + hompagemenu + aboutus + creativepurpose
        }, 900);
        $(".navbtnsize").css("background-color", "#626262"); //除了被點擊到的游標，其他都恢復成原來的顏色
        $(".navrightbar li a:eq(1)").css("background-color", "#fff");
        //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
        return false;
    });
    $(".stroypicture").click(function () {
        $("html,body").animate({
            scrollTop: banner + hompagemenu + aboutus + creativepurpose + allactivity
        }, 900);
        $(".navbtnsize").css("background-color", "#626262"); //除了被點擊到的游標，其他都恢復成原來的顏色
        $(".navrightbar li a:eq(2)").css("background-color", "#fff");
        //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
        return false;
    });
    $(".teamour").click(function () {
        $("html,body").animate({
            scrollTop: banner + hompagemenu + aboutus + creativepurpose + allactivity + picturestroy
        }, 900);
        $(".navbtnsize").css("background-color", "#626262"); //除了被點擊到的游標，其他都恢復成原來的顏色
        $(".navrightbar li a:eq(3)").css("background-color", "#fff");
        //$("html,body").animate({scrollTop:0},900,"easeOutBounce");informationExhibition
        return false;
    });
    $(".informationExhibition").click(function () {
        $("html,body").animate({
            scrollTop: banner + hompagemenu + aboutus + creativepurpose + allactivity + picturestroy + 345
        }, 900);
        $(".navbtnsize").css("background-color", "#626262"); //除了被點擊到的游標，其他都恢復成原來的顏色
        $(".navrightbar li a:eq(4)").css("background-color", "#fff");
        //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
        return false;
    });
    $(".shop").click(function () {
        $("html,body").animate({
            scrollTop: banner + hompagemenu + aboutus + creativepurpose + allactivity + picturestroy + ourteam + Exhibitioninformation + aboutus
        }, 900);
        $(".navbtnsize").css("background-color", "#626262"); //除了被點擊到的游標，其他都恢復成原來的顏色
        $(".navrightbar li a:eq(5)").css("background-color", "#fff");
        return false;
    });
});