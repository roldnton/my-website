const loadTime = Date.now();

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const feedbackDiv = document.getElementById("formFeedback");
    
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const spamWords = ["free money", "buy now", "click here", "subscribe", "promo", "lottery"];

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        feedbackDiv.textContent = "";
        feedbackDiv.className = "";
        [nameInput, emailInput, messageInput].forEach(input => input.classList.remove("invalid"));

        let isValid = true;
        let errorMessages = [];

        // Time-based Filtering
        const submitTime = Date.now();
        if ((submitTime - loadTime) < 2000) {
            feedbackDiv.textContent = "Submission too fast. Are you a robot?";
            feedbackDiv.className = "error-message";
            return;
        }

        if (nameInput.value.trim() === "") {
            markInvalid(nameInput);
            errorMessages.push("Name is required.");
            isValid = false;
        }

        if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
            markInvalid(emailInput);
            errorMessages.push("Enter a valid email address.");
            isValid = false;
        }

        // Spam Keyword Detection
        const messageValue = messageInput.value.toLowerCase();
        const foundSpam = spamWords.find(word => messageValue.includes(word));
        
        if (foundSpam) {
            markInvalid(messageInput);
            errorMessages.push("Message contains blocked keywords (spam detection).");
            isValid = false;
        }

        if (!isValid) {
            feedbackDiv.innerHTML = errorMessages.join("<br>");
            feedbackDiv.className = "error-message";
        } else {
            feedbackDiv.textContent = "Message sent successfully!";
            feedbackDiv.className = "success-message";
            
            form.submit(); 
        }
    });

    function markInvalid(element) {
        element.classList.add("invalid");
    }
});