function signup(){
    //getting username and password from input field
    let name=document.getElementById('name').value
    let userName=document.getElementById("email").value 
    let password=document.getElementById("password").value
    event.preventDefault(); // Prevent form submission
        // getting username and password from local storage
        orginalUname=localStorage.getItem("USERNAME")

  


    
    if(!name||!userName||!password){
        alert("Please Fill all the fields")
    }else if(orginalUname==userName){
         alert("User Already exists")
    }else{
         // Adding username and password to local storage
        localStorage.setItem('NAME',name)
        localStorage.setItem("USERNAME",userName)
        localStorage.setItem("PASSWORD",password)
        alert("Signup Successfully")
        window.location.href="login.html";
    }
    
    
}