function sendEmail(event) {
    event.preventDefault();

    // form values
    const username = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const message = document.getElementById("tarea").value.trim(); // textarea id was 'tarea'

    // error
    const usernameError = document.getElementById("nameerror");
    const emailError = document.getElementById("emailerror");
    const numberError = document.getElementById("numbererror");

    // Clear
    usernameError.textContent = "";
    emailError.textContent = "";
    numberError.textContent = "";

   
    let isValid = true;

    // Validate name
    if (username === "") {
        usernameError.textContent = "Must have a User name";
        isValid = false;
    }

    // Validate number
    if (number === "") {
        numberError.textContent = "Must have Phone number";
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        emailError.textContent = "Must have Email id";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid Email format";
        isValid = false;
    }

   
    if (!isValid) return;

    // EmailJS
    const data = {
        name: username,
        email: email,
        number: number,
        message: message
    };

    
    emailjs.send("service_qw7uljj", "template_6t4bsoj", data)
    .then(function(response) {
        alert("Message sent successfully!");
        document.getElementById("form").reset();
    }, function(error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again later.");
    });
}
