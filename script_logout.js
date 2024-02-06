let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";

if (isAuth === "Authenticated") {
    let bar2 = document.querySelector(".bar2");
    let div = document.createElement("div");
    let btn = document.createElement("button")
    btn.innerText = "Logout";
    btn.setAttribute("class", "btn btn-danger");
    btn.onclick = function () {
        localStorage.setItem("isAuth", "Not Authenticated");
        window.location.reload();
    }
    div.append(btn);
    bar2.append(div);

}