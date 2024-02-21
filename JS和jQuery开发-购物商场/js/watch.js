$(document).ready(function () {

    $(".word1").lbyl({
        content: " 智能手表是具有信息处理能力，符合手表基本技术要求的手表。智能手表除指示时间之外，还应具有提醒、导航、校准、监测、交互等其中一种或者多种功能；显示方式包括指针、数字、图像等。",
        speed: 10,
        type: 'show',
        finished: function () {
            $('.word2').lbyl({
                content: "随着科技的发展，智能穿戴设备也开始成为现代人的必备，如智能手表和智能手环，而最新消息显示，随着智能手表的不断发展、优化、提升，似乎有取代智能手环的趋势，智能手表出货量出现持续增长，而智能手环出货下降的趋势，智能手表开始成为现代成年人最热衷的玩具。",
                speed: 10,
                type: 'fade',
                fadeSpeed: 500
            })
        }
    });

    $(".box1").hover(function () {
        $(".ljgd1").show()
        $(".box1 .text1").css("background-image", "linear-gradient(rgba(0,0, 0, 0.2),rgba(0, 0, 0, 0.6))")

    }, function () {
        $(".ljgd1").hide(800)
        $(".box1 .text1").css("background-image", "none")
    }
    )

    $(".box2").hover(function () {
        $(".ljgd2").show()
        $(".box2 .text2").css("background-image", "linear-gradient(rgba(0,0, 0, 0.2),rgba(0, 0, 0, 0.6))")

    }, function () {
        $(".ljgd2").hide(800)
        $(".box2 .text2").css("background-image", "none")
    }
    )

    $(".box3").hover(function () {
        $(".ljgd3").show()
        $(".box3 .text3").css("background-image", "linear-gradient(rgba(0,0, 0, 0.2),rgba(0, 0, 0, 0.6))")

    }, function () {
        $(".ljgd3").hide(800)
        $(".box3 .text3").css("background-image", "none")
    }
    )

    $(".box4").hover(function () {
        $(".ljgd4").show()
        $(".box4 .text4").css("background-image", "linear-gradient(rgba(0,0, 0, 0.2),rgba(0, 0, 0, 0.6))")

    }, function () {
        $(".ljgd4").hide(800)
        $(".box4 .text4").css("background-image", "none")
    }
    )
});