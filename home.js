
function CustomAlert(){
    this.alert = function(message,title){
      document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';
  
      let dialogoverlay = document.getElementById('dialogoverlay');
      let dialogbox = document.getElementById('dialogbox');
      
      let winH = window.innerHeight;
      dialogoverlay.style.height = winH+"px";
      
      dialogbox.style.top = "500px";
  
      dialogoverlay.style.display = "block";
      dialogbox.style.display = "block";
      
       
      document.getElementById('dialogboxbody').innerHTML = message;
      document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok()">Confirm</button>';
    }
    
    this.ok = function(){
      document.getElementById('dialogbox').style.display = "none";
      document.getElementById('dialogoverlay').style.display = "none";
    }
  }
  
  let customAlert = new CustomAlert();

  usernme.innerHTML=localStorage.getItem('NAME')

function logout(){
    customAlert.alert("Are you really want to logout?")
    localStorage.clear()
    window.location="index.html"
}

function Deposit(){ 
    
    let amount=document.getElementById('depAmount').value;
    let AccNo=document.getElementById('AcNo').value;
    if(!amount||!AccNo){
        customAlert.alert("Please enter all the details")
    }
    else{
        alert(`Entered amount is ${amount} \n Please enter confirm to continue`)
    let orginalAcNo=localStorage.getItem('ACNO');
    let balance=localStorage.getItem("BALANCE") 

    if(AccNo===orginalAcNo){ 
        let newBalance=parseInt(balance)+parseInt(amount);
        localStorage.setItem('BALANCE',newBalance) 
        customAlert.alert(`Amount of Rupees ${amount} Credited to Your Account`)
        dOutput.innerHTML=`<p>Your Current Balance is ${newBalance}</p><img style="width:100px; " src="https://cdnl.iconscout.com/lottie/premium/thumb/cash-deposit-5412445-4562596.gif" alt="">`
    }else{ 
        customAlert.alert("Wrong Account Number")
    }
    }
   


}

function withdraw() { 
    let amount = parseInt(document.getElementById('withAmount').value);
    let AccNo = document.getElementById('AccNo').value;
    
    if (!amount || !AccNo) {
        customAlert.alert("Please enter the amount and account number");
    } else {
        let originalAcNo = localStorage.getItem('ACNO');
        let balance = parseInt(localStorage.getItem("BALANCE")); 

        alert(`Balance Before Withdrawal is ${balance}`);
        alert(`Entered amount is ${amount} \n Please enter confirm to continue`);

        if (AccNo === originalAcNo) { 
            if (amount <= balance) {
                let newBalance = balance - amount;
                localStorage.setItem('BALANCE', newBalance);
                customAlert.alert(`Amount of Rupees ${amount} Debited from Your Account`);
                document.getElementById('wOutput').innerHTML = `
                    <p>Your Current Balance is ${newBalance}</p>
                    <img style="width:100px;" src="https://media.lordicon.com/icons/wired/lineal/2066-withdrawal.gif" alt="">
                `;
            } else {
                customAlert.alert("Insufficient Balance");
                document.getElementById('wOutput').innerHTML = `<p>Your Current Balance is ${balance}</p>`;
            }
        } else { 
            customAlert.alert("Wrong Account Number");
        }
    }
}


function checkBalance() {
    let AcNo = document.getElementById('BalanceAcno').value; // Get the value of the input field
    if (!AcNo) { 
        customAlert.alert("Please enter the account number");
    } else {
        let storedAcNo = localStorage.getItem('ACNO');
        let balance = localStorage.getItem("BALANCE");
        
        if (AcNo === storedAcNo) {
            customAlert.alert(`Your Current Balance is ${balance}`);
            document.getElementById('bOutput').innerHTML = `<p>Your Current Balance is ${balance}</p>`;
        } else {
            customAlert.alert("Wrong Account Number");
        }
    }
}



