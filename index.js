
let passwordEl = document.getElementById ("password")
let resetEl = document.getElementById("reset")
let lengthEl = document.getElementById("userInput")


function generatePwd() {
    let password = "";
    const possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$&!<>_-*#+?"
    
   for (let i = 0; i < passGenerator(); i++)
    passwordEl.textContent = (password += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length)))

    
   }
    
function passGenerator(){
   let length = document.getElementById("userInput").value

   if (length >= 3 && length <= 9){
        return length
      }

   else {
      alert("Please reset and input between 3 to 9")
      
   }
 }

 function reset() {
    passwordEl.textContent = ""
    document.getElementById("userInput").value ="" 
 }

 
 
   


   
 
 
