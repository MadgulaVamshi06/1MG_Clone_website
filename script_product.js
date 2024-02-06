var isAuth = localStorage.getItem("isAuth") || "not authenicated" ;
if(isAuth !== "Authenicated"){
    window.location.href = "login.html";
}

