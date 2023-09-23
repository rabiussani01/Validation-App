/*
*****************************************************
*   🌟 Title: Validation App                           *
*   ✍️ Author: Mohammad Rabius Sai                     *
*   📝 Description: This is a simple web application   *
*                  for validating email addresses,    *
*                  phone numbers, and postcodes using  *
*                  HTML, JavaScript, and Tailwind CSS. *
*                  It provides a user-friendly        *
*                  interface for selecting the        *
*                  validation type and entering a     *
*                  value to validate.                 *
*   📅 Date: 2023-09-23                                *
*   📋 Language: HTML, JavaScript, Tailwind CSS        *
*   ©️ Copyright: Mohammad Rabius Sai 📅 2023          *
*****************************************************
*/


document.addEventListener("DOMContentLoaded", function () {
    const validationTypeSelect = document.getElementById("validationType");
    const inputValue = document.getElementById("inputValue");
    const validateButton = document.getElementById("validateButton");
    const validationWarning = document.getElementById("validationWarning");
    const resultModal = document.getElementById("resultModal");
    const resultMessage = document.getElementById("resultMessage");
    const closeModalButton = document.getElementById("closeModalButton");


    
    // Function to validate email
    function validateEmail(email) {
        const emailRegex = /^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)$/;
        return emailRegex.test(email);
    }

    // Function to validate phone number
    function validatePhoneNumber(phone) {
        const phoneRegex = /^(?:\+)?(?:88)?01[0-9]{9}$/;
        return phoneRegex.test(phone);
    }

    // Function to validate post code
    function validatePostCode(postcode) {
        const postcodeRegex = /^[0-9]{4}$/;
        return postcodeRegex.test(postcode);
    }

    // Function to show a warning message
    function showWarning(message) {
        validationWarning.textContent = message;
        validationWarning.classList.remove("hidden");
    }

    // Function to hide the warning message
    function hideWarning() {
        validationWarning.classList.add("hidden");
    }

    // Event listener for the validate button
    validateButton.addEventListener("click", function () {
        const selectedValidationType = validationTypeSelect.value;
        const valueToValidate = inputValue.value.trim();

        if (selectedValidationType === "") {
            showWarning("Please select a validation type.");
        } else if (valueToValidate === "") {
            showWarning("Please enter a value to validate.");
        } else {
            hideWarning();

            let isValid = false;
            let message = "";

            switch (selectedValidationType) {
                case "email":
                    isValid = validateEmail(valueToValidate);
                    message = isValid ? "✅ Your Given Email is valid. ✅" : "❌ Your Given Email is invalid. ❌";
                    break;
                case "phone":
                    isValid = validatePhoneNumber(valueToValidate);
                    message = isValid ? "✅ Your Given Phone number is valid. ✅" : "❌ Your Given Phone number is invalid. ❌";
                    break;
                case "postcode":
                    isValid = validatePostCode(valueToValidate);
                    message = isValid ? "✅ Your Given Post code is valid. ✅" : "❌ Your Given Post code is invalid. ❌";
                    break;
                    
            }

            resultMessage.textContent = message;
            resultModal.classList.remove("hidden");

            // Clear input field
            inputValue.value = "";
        }
    });

    // Event listener for the close button in the result modal
    closeModalButton.addEventListener("click", function () {
        resultModal.classList.add("hidden");
    });
});
