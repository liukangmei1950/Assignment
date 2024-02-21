
$(document).ready(function () {

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

        if (n > 2) {
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
            n = 2;
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

    $(".xiala_1>li").hover(function () {
        $(this).css("background-color", "red")
    }, function () {
        $(this).css("background-color", "rgba(255, 255, 255, 0.5)")
    }
    )

    $(".xiala_2>li").hover(function () {
        $(this).css("background-color", "red")
    }, function () {
        $(this).css("background-color", "rgba(255, 255, 255, 0.5)")
    }
    )

    $(".xiala_5>li").hover(function () {
        $(this).css("background-color", "red")
    }, function () {
        $(this).css("background-color", "rgba(255, 255, 255, 0.5)")
    }
    )

    $(".xiala_7>li").hover(function () {
        $(this).css("background-color", "red")
    }, function () {
        $(this).css("background-color", "rgba(255, 255, 255, 0.5)")
    }
    )

    $(".xiala_8>li").hover(function () {
        $(this).css("background-color", "red")
    }, function () {
        $(this).css("background-color", "rgba(255, 255, 255, 0.5)")
    }
    )




    $(".ul_1 li:eq(0)").hover(function () {
        $(".xiala_1").fadeIn("slow")
    }, function () {
        $(".xiala_1").hide()
    }
    )
    $(".xiala_1").hover(function () {
        $(".xiala_1").show()
    }, function () {
        $(".xiala_1").fadeOut()
    }
    )

    $(".ul_1 li:eq(1)").hover(function () {
        $(".xiala_2").fadeIn("slow")
    }, function () {
        $(".xiala_2").hide()
    }
    )
    $(".xiala_2").hover(function () {
        $(".xiala_2").show()
    }, function () {
        $(".xiala_2").fadeOut()
    }
    )
    $(".ul_1 li:eq(2)").hover(function () {
        $(".xiala_3").fadeIn("slow")
    }, function () {
        $(".xiala_3").hide()
    }
    )


    $(".ul_1 li:eq(3)").hover(function () {
        $(".xiala_4").fadeIn("slow")
    }, function () {
        $(".xiala_4").hide()
    }
    )


    $(".ul_1 li:eq(4)").hover(function () {
        $(".xiala_5").fadeIn("slow")
    }, function () {
        $(".xiala_5").hide()
    }
    )
    $(".xiala_5").hover(function () {
        $(".xiala_5").show()
    }, function () {
        $(".xiala_5").fadeOut()
    }
    )

    $(".ul_1 li:eq(6)").hover(function () {
        $(".xiala_6").fadeIn("slow")
    }, function () {
        $(".xiala_6").hide()
    }
    )



    $(".ul_1 li:eq(7)").hover(function () {
        $(".xiala_7").fadeIn("slow")
    }, function () {
        $(".xiala_7").hide()
    }
    )
    $(".xiala_7").hover(function () {
        $(".xiala_7").show()
    }, function () {
        $(".xiala_7").fadeOut()
    }
    )

    $(".ul_1 li:eq(8)").hover(function () {
        $(".xiala_8").fadeIn("slow")
    }, function () {
        $(".xiala_8").hide()
    }
    )
    $(".xiala_8").hover(function () {
        $(".xiala_8").show()
    }, function () {
        $(".xiala_8").fadeOut()
    }
    )

    $(".ul_1 li:eq(9)").hover(function () {
        $(".xiala_9").fadeIn("slow")
    }, function () {
        $(".xiala_9").hide()
    }
    )


    $(".ul_1 li:eq(10)").hover(function () {
        $(".xiala_10").fadeIn("slow")
    }, function () {
        $(".xiala_10").hide()
    }
    )


    $(".section .box1_1").hover(function () {
        $(".section .box1_1 .head").css("height", "100%")
    }, function () {
        $(".section .box1_1 .head").css("height", "10%")
    }
    )
    $(".section .box1_2").hover(function () {
        $(".section .box1_2 .head").css("height", "100%")
    }, function () {
        $(".section .box1_2 .head").css("height", "10%")
    }
    )
    $(".section .box1_3").hover(function () {
        $(".section .box1_3 .head").css("height", "100%")
    }, function () {
        $(".section .box1_3 .head").css("height", "10%")
    }
    )
    $(".section .box1_4").hover(function () {
        $(".section .box1_4 .head").css("height", "100%")
    }, function () {
        $(".section .box1_4 .head").css("height", "10%")
    }
    )
});
