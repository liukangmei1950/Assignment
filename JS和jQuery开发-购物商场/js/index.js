$(function () {
    $("nav ul:eq(0) li:eq(1)").hover(function () {
        $(".computer").fadeIn("slow")
    }, function () {
        $(".computer").hide()
    }
    )
    $(".computer").hover(function () {
        $(".computer").show()
    }, function () {
        $(".computer").fadeOut("slow")
    }
    )


    $("nav ul:eq(0) li:eq(2)").hover(function () {
        $(".watch").fadeIn("slow")
    }, function () {
        $(".watch").hide()
    }
    )
    $(".watch").hover(function () {
        $(".watch").show()
    }, function () {
        $(".watch").fadeOut("slow")
    }
    )


    $("nav ul:eq(0) li:eq(3)").hover(function () {
        $(".pad").fadeIn("slow")
    }, function () {
        $(".pad").hide()
    }
    )
    $(".pad").hover(function () {
        $(".pad").show()
    }, function () {
        $(".pad").fadeOut("slow")
    }
    )

    $("nav ul:eq(0) li:eq(4)").hover(function () {
        $(".phone").fadeIn("slow")
    }, function () {
        $(".phone").hide()
    }
    )
    $(".phone").hover(function () {
        $(".phone").show()
    }, function () {
        $(".phone").fadeOut("slow")
    }
    )

    $(".tupian").mouseenter(function () {
        $(".tupian2").fadeToggle();
    })
    $(".tupian2").mouseleave(function () {
        $(".tupian2").fadeOut("slow");
    })
})