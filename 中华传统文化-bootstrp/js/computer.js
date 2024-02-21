$(document).ready(function () {
    $(".box").hover(function () {
        $(this).css("flex-basis", "40%")
        $("span").hide()
        $(".box h3").not(this).show()
    }, function () {
        $(this).css("flex-basis", "0%")
        $("span").show()
        $(".box h3").not(this).hide()
    })


    $("#demo1 img").click(function () {
        $("#demo1").hide()
    })

    $("#bu1").click(function () {
        $("#demo1").show()
    })

    $(document).ready(function () {
        $("#butt").click(function () {
            var aa = document.querySelector("input[name='sex']:checked")

            if (aa || bb == null) {
                $(".alert").show();
            } else {

                $("#demo1").hide()
                alert("提交成功")
            }
        })

    })
})