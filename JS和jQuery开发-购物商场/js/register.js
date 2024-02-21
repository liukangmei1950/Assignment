$(document).ready(function () {
    $("#zhuce form p:eq(0) input").blur(checkusername)
    $("#zhuce form p:eq(1) input").blur(checkuserpassword)
    $("#zhuce form p:eq(2) input").blur(checkuserrepassword)
    $("#zhuce form p:eq(3) input").blur(checkuseremail)
    $("#zhuce form p:eq(4) input").blur(checkusertel)

    $("form").submit(function () {
        var flag = true
        if (!checkusername()) flag = false;
        if (!checkuserpassword()) flag = false;
        if (!checkuserrepassword()) flag = false;
        if (!checkuseremail()) flag = false;
        if (!checkusertel()) flag = false;
        if (flag == true) { alert("注册成功") }

        return flag

    })

    $("#zhuce form div input:eq(1)").click(function () {
        location.reload()
    })
    $("#zhuce form div input:eq(2)").click(function () {
        location.href = "index.html"
    })
})
function checkusername() {
    $("#zhuce form p:eq(0) span").html("")
    var name = $("#zhuce form p:eq(0) input").val()
    var checkname = /^[A-Za-z][A-Za-z0-9_]{3,16}$/
    if (checkname.test(name) == false) {
        $("#zhuce form p:eq(0) span").html("用户名不正确!")
        return false
    }
    return true
}
function checkuserpassword() {
    $("#zhuce form p:eq(1) span").html("")
    var checkpw = /^[A-Za-z0-9]{3,10}$/
    var password = $("#zhuce form p:eq(1) input").val()
    if (checkpw.test(password) == false) {
        $("#zhuce form p:eq(1) span").html("密码不能含有非法字符，长度在3-10之间")
        return false
    }
    return true
}
function checkuserrepassword() {
    $("#zhuce form p:eq(2) span").html("")
    if ($("#zhuce form p:eq(1) input").val() != $("#zhuce form p:eq(2) input").val()) {
        $("#zhuce form p:eq(2) span").html("两次输入的密码不一致!")
        return false
    }
    return true
}
function checkuseremail() {
    $("#zhuce form p:eq(3) span").html("")
    var email = $("#zhuce form p:eq(3) input").val()
    var checkemail = /^\w+[\.\w]*@\w+[\.\w]+$/
    if (checkemail.test(email) == false) {
        $("#zhuce form p:eq(3) span").html(" 输入的Email格式不正确,例如web@sohu.com")
        return false
    }
    return true
}
function checkusertel() {
    $("#zhuce form p:eq(4) span").html("")
    var tel = $("#zhuce form p:eq(4) input").val()
    var checktel = /^1\d{10}$/
    if (checktel.test(tel) == false) {
        $("#zhuce form p:eq(4) span").html("手机号码不正确,请重新输入!")
        return false
    }
    return true
}