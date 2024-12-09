function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorDiv = document.getElementById('error');

    // Clear previous error messages
    errorDiv.textContent = '';

    // Check for empty fields
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        errorDiv.textContent = 'All fields are required.';
        return;
    }

    // Get form field values
   
    let isValid = true;
    let errorMessages = [];

    function isValidEmail(email) {
        // Check if the email contains exactly one '@' symbol
        const atIndex = email.indexOf('@');
        if (atIndex === -1 || email.indexOf('@', atIndex + 1) !== -1) {
            return false; // No '@' symbol or more than one '@'
        }
    
        // Check if the email contains a domain name after the '@'
        const domain = email.slice(atIndex + 1);
        if (domain.length === 0) {
            return false; // No domain after '@'
        }
    
        // Check if there is at least one character before '@'
        const localPart = email.slice(0, atIndex);
        if (localPart.length === 0) {
            return false; // No characters before '@'
        }
    
        // Check for basic domain structure (e.g., something.com)
        const domainParts = domain.split('.');
        if (domainParts.length < 2) {
            return false; // Domain doesn't contain at least one dot
        }
    
        return true;
    }
    
    // Get user input using prompt (works in the browser)
  
    
    if (email) {
        if (isValidEmail(email)) {
            isValid = false;
        } else {
            isValid = true;
        }
    } else {
        isValid = false;
    }
    
    // Check if passwords match
    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match.';
        return;
    }

    // If all validations pass
    alert('Form submitted successfully!');

    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("registrationForm");
        const errorContainer = document.getElementById("errorContainer");
    
        form.addEventListener("submit", function (event) {
            // Clear previous error messages
            errorContainer.textContent = "";
    
            // Get all input fields in the form
            const inputs = form.querySelectorAll("input");
            let isValid = true;
    
            // Loop through inputs and check for empty fields
            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    isValid = false;
                    const errorItem = document.createElement("p");
                    errorItem.textContent = `${input.name} is required.`;
                    errorItem.classList.add("error");
                    errorContainer.appendChild(errorItem);
                }
            });
    
            // Prevent form submission if any field is empty
            if (!isValid) {
                event.preventDefault();
            }
    
            return isValid; // Allow form submission only if all fields are filled
        });
    });
    
}
