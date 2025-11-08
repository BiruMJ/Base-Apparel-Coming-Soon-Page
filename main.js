const arrowIcon = document.querySelector(".arrow-icon");
const errorIcon = document.querySelector(".error-icon");
const userInput = document.querySelector(".user-input");
const submitButton = document.querySelector(".submit-button");
const submitMessage = document.querySelector(".submit-message");

// Submit Button Function:

submitButton.addEventListener("click", ()=> {
    if(userInput.value.trim() === "") {
        arrowIcon.classList.add("hide");
        errorIcon.classList.add("show");
        userInput.placeholder = "⚠️ Invalid input";
    } else if(userInput.value.includes("@")) {
        submitMessage.classList.add("show");
    } else {
        alert("Enter a valid Email!");
    }
})

// Reset input:

userInput.addEventListener("click", ()=> {
    if (userInput.value.trim !== "") {
        arrowIcon.classList.remove("hide");
        errorIcon.classList.remove("show");
        userInput.placeholder = "Email Address";
        submitMessage.classList.remove("show");
    }
});

