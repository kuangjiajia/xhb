function login() {
    var username = $('.username').val();
    var password = $('.password').val();
  
    AV.User.logIn(username, password).then(function (loginedUser) {
      alert("登录成功");
      window.location.href = "./self";
    }, function (error) {
      alert('用户名或密码错误');
    });
  };
  
  $(function() {
    $(".sub").on('click', function(e) {
      e.preventDefault();
      login();
    });
  });
  