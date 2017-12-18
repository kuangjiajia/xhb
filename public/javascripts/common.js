$(".exit").on("click",() => {
    AV.User.logOut();
    window.location.href = "./login";
})

var currentUser = AV.User.current();
