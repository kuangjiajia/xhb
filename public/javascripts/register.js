function signup() {
    var username = $('.username').val();
    var password = $('.password').val();
    var dbPassword = $('.dbPassword').val();
    
    if(password === dbPassword) {
        var user = new AV.User();
        user.setUsername(username);
        user.setPassword(password);
        user.signUp().then(function (loginedUser) {
          alert("注册成功");
          window.location.href = "./login";
        }, (function (error) {
            alert("注册失败");
        }));
    }else{
        alert("两次输入的密码不一样");
    }
  };
  
  $(function() {
    $(".sub").on('click', function(e) {
      e.preventDefault();
      signup();
    });
  });
  