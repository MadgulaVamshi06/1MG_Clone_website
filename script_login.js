let saved_detailes = JSON.parse(localStorage.getItem("user_details")) ||  [];
console.log("saved_detailes", saved_detailes);

let form = document.getElementById("form");
form.addEventListener("submit", function () {
  getdata(saved_detailes);
});

let currentdetails_arry = [];

function getdata(saved_detailes) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let isFound =  false;
  let isValidaccount = false;
  var currentdetails = {
    email,
    password,
    isFound,
    isValidaccount
  };
 
  console.log("currentdetails", currentdetails);
  
  if(currentdetails.email === "" &&
      currentdetails.password === ""){
        alert("Please Enter the Credentials")
        return;
      }

  saved_detailes.forEach(function (ele) {
   
    
  if(currentdetails.email === ele.email){
    currentdetails.isValidaccount = true;
  }

    if (
      currentdetails.email === ele.email &&
      currentdetails.password === ele.password
    ) {
      localStorage.setItem("isAuth", "Authenicated");
      alert("Login Sucess");
      var name = document.getElementById("user_name");
      name.innerText = ele.name;
      console.log(name);

      
      currentdetails.isFound = true;
    return;
    } 
    
  });

   if(currentdetails.isValidaccount === false){
    alert("Account not found , Please Sign up")
    return;
   }

  if(currentdetails.isFound === false ){
    alert("wrong credentials")
  }
}

let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";

window.onload = function () {

    if (isAuth === "Authenticated") {
        var curentUser = JSON.parse(localStorage.getItem("current-details"));
        console.log("currentDetails", curentUser);
        var userName = document.getElementById("nameDisplay");
        userName.innerText = curentUser[0].name;
        userName.style = "padding-top: 8px;"
    }
  }