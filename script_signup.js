var dataarry = JSON.parse(localStorage.getItem("user_details")) || [];

var form1 = document.getElementById("form");
form1.addEventListener("submit",function(){
    getdata();
})

function getdata(){
    event.preventDefault();
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    

    var obj = {
        name,
        email,
        password,
    };

    if(obj.name === "" || obj.email === "" || obj.password === ""){
        alert("Fill all the Fields")
        return;
    }
    else{
        form1.innerText = null;
        var signedUp = document.getElementById("signedup");
        signedUp.innerText = "Signed Up Successfully";
        alert("You Signed Up Successfully");
    }
    
    dataarry.push(obj);
    
    localStorage.setItem("user_details",JSON.stringify(dataarry));
}

