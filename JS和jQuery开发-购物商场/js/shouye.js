
$(document).ready(function () {
    urlinfo = window.location.href; //获取当前页面的url
    len = urlinfo.length;//获取url的长度
    offset = urlinfo.indexOf("?");//设置参数字符串开始的位置
    newsidinfo = urlinfo.substr(offset, len)//取出参数字符串 这里会获得类似“id=1”这样的字符串
    newsids = newsidinfo.split("=");//对获得的参数字符串按照“=”进行分割
    newsid = newsids[1];//得到参数值
    newsname = newsids[0];//得到参数名字 
    if (newsid == 'user') {
        // $("nav").css("background","red")
        $("nav ul:nth-child(2)").css("display", "none")
        $(".name p").text(newsid)
        $(".name").css("display", "block")
    }
    $(".name input").click(function () {

        $(".name").css("display", "none")
        $("nav ul:nth-child(2)").css("display", "block")
    })



    var timer;
    var liwidth = $(".shell ul li:first").innerWidth();
    var n = 0;
    timer = setInterval(function () {
        play()
    }, 2000)
    function play() {
        if (n == 0) {
            $(".min").eq(0).addClass("size").siblings().removeClass("size")
        }
        n++;

        if (n > 3) {
            n = 0;
        }
        $(".min").eq(n).addClass("size").siblings().removeClass("size")
        $(".shell .images").animate({ left: -liwidth }, function () {
            $(this).css("left", 0).find(".img:first").appendTo(this);
        })


    }
    $(".shell").hover(function () {
        clearInterval(timer)
    }, function () {
        timer = setInterval(function () {
            play()
        }, 2000)
    })

    // 左右箭头
    $(".right").click(function () {
        play()
    })

    $(".left").click(function () {
        $(".shell .images").css("left", -liwidth).find(".img:last").prependTo(".shell .images");
        $(".shell .images").animate({ left: 0 });
        n--;
        if (n > 0) {
            n = 3;
        }
        $(".min").eq(n).addClass("size").siblings().removeClass("size")
    })

    $(".min").each(function (index) {
        $(this).click(function () {
            if (n < index) {
                for (var i = n; i < index; i++) {
                    $(".shell .images").animate({ left: -liwidth }, 100, function () {
                        $(this).css("left", 0).find(".img:first").appendTo(this)
                    })
                }
            } else if (n > index) {
                for (var i = n; i > index; i--) {
                    $(".shell .images").css("left", -liwidth).find(".img:last").prependTo(".shell .images");
                    $(".shell .images").animate({ left: 0 }, 100);
                }
            }
            n = index;
            $(".min").eq(n).addClass("size").siblings().removeClass("size")
        })
    })


    $(".left").hover(function () {
        $(this).css("background", "rgb(68, 75, 75,0.8)")
    }, function () {
        $(this).css("background", "rgb(68, 75, 75,0.5)")
    }
    )

    $(".right").hover(function () {
        $(this).css("background", "rgb(68, 75, 75,0.8)")
    }, function () {
        $(this).css("background", "rgb(68, 75, 75,0.5)")
    }
    )


});
