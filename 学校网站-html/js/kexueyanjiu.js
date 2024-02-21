$(function () {
    $(".box1 .box1_1 .box2_1_1 .box2_1_1_2").hover(function () {
        $(".box1 .box1_2").css("background-size", "210%")
    }, function () {
        $(".box1 .box1_2").css("background-size", "180%")
    }
    )

    $(".box_2 .box_2_1").hover(function () {
        $(".box_3").css("background-size", "120%")
        $(".box_3").css("background-position", "-25px 73px")
    }, function () {
        $(".box_3").css("background-size", "100%")
        $(".box_3").css("background-position", "0 73px")
    }
    )

    $(".jigou .yanjiu").hover(function () {
        $(".jigou .yanjiu .xia1").css("width", "0%")
        $(".jigou .yanjiu .xia2").css("width", "100%")
        $(".jigou .yanjiu .yuan1 .yuan2").css("background", "brown")
        $(".jigou .yanjiu .yuan1 .yuan2 .fang").css("border-color", "white")
    }, function () {
        $(".jigou .yanjiu .xia2").css("width", "0%")
        $(".jigou .yanjiu .xia1").css("width", "100%")
        $(".jigou .yanjiu .yuan1 .yuan2").css("background", "white")
        $(".jigou .yanjiu .yuan1 .yuan2 .fang").css("border-color", "brown")
    }
    )

    $(".jigou .xueshu").hover(function () {
        $(".jigou .xueshu .xia1").css("width", "0%")
        $(".jigou .xueshu .xia2").css("width", "100%")
        $(".jigou .xueshu .yuan1 .yuan2").css("background", "brown")
        $(".jigou .xueshu .yuan1 .yuan2 .fang").css("border-color", "white")
    }, function () {
        $(".jigou .xueshu .xia2").css("width", "0%")
        $(".jigou .xueshu .xia1").css("width", "100%")
        $(".jigou .xueshu .yuan1 .yuan2").css("background", "white")
        $(".jigou .xueshu .yuan1 .yuan2 .fang").css("border-color", "brown")
    }
    )
})