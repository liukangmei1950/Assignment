$(function () {
    var name = $(this).find("input").attr("id")
    $("img").click(function (name) {
        if (name == 'item-1') {
            alert("1")
        } else if (name == 'item-2') {
            alert("2")
        } else if (name == 'item-3') {
            alert("3")
        }
    })


})