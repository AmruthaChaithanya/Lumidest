function sendEmail(event) {
    event.preventDefault()
    const data = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        number:document.getElementById("number").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_qw7uljj","template_6t4bsoj",data)
    .then(function(res){
        alert("success")
        document.getElementById('formcontact').reset()
    },function(error){
        alert("failed",error)
    }
)}

// ---------------------------------------------------------------------------

document.getElementById("form").addEventListener("submit",function(event)
                {
                    var username=document.getElementById("name").value.trim();
                     var email=document.getElementById("email").value.trim();
                     var number=document.getElementById("number").value.trim();
                       var usernameError =document.getElementById("nameerror");
                        var emailError=document.getElementById("emailerror");
                        var numberError=document.getElementById("numbererror");
                         usernameError.textContent = "";
                         emailError.textContent = "";
                         numberError.textContent = "";

                         var isValid = true;
                         //Username validation
                         if(username === "")
                         {
                            usernameError.textContent = "Must have a User name";
                            isValid = false;
                         }
                         //Number validation
                         if(number === "")
                         {
                            numberError.textContent = "Must have Phone number";
                            isValid = false;
                         }
                         // Email Validation
                         var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                         if(email === "")
                         {
                            emailError.textContent="Must have Email id";
                            isValid = false;
                         }
                         else if(!emailPattern.test(email))
                         {
                            emailError.textContent="Invalid Email format";
                            isValid = false;
                         }
                         if(!isValid)
                         {
                            return;
                         }
                         alert("Form submitted Successfully");
                         document.getElementById("form").reset();
                })