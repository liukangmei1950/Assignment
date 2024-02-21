$(document).ready(function () {
    $(".box").hover(function () {
        $(this).css("flex-basis", "40%")
        $("span").hide()
        $(".box h1").not(this).show()
    }, function () {
        $(this).css("flex-basis", "0%")
        $("span").show()
        $(".box h1").not(this).hide()
    })
})