
$(document).ready(function () {
    $(".id").click(function () {
        var $account = $("input:eq(0)").val()
        var $pwd = $("input:eq(1)").val()
        if ($account == '' && $pwd == '') {
            alert("请输入账号和密码！！！！！！")
        } else if ($account == '' && $pwd != '') {
            alert("请输入账号！！！！！！")
        } else if ($pwd == '' && $account != '') {
            alert("请输入密码！！！！！！")
        } else {
            if ($account == 'user' && $pwd == '123') {
                location.href = "index.html?name=user";

            } else {
                alert("用户名或者密码错误")
            }
        }
    })

});

