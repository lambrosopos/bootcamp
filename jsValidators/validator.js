function selectFromForm(tagName="input", typeName="", typeValue) {

    let formValues = document.querySelector('form');
    let inputValues = formValues.querySelectorAll(tagName);
    
    let returnInput;
    inputValues.forEach((tag) => {
        if (tag[typeName] === typeValue) {
            returnInput = tag;
        }
    })

    return returnInput;
}

// Create Help Message
function createHelpMessage(helpMsg) {
    let helpLocation = selectFromForm(tagName="div", typeName="id", typeValue="input-submit")

    let spanTag = document.createElement("p", 'id'='hello');
    spanTag.textContent = helpMsg;
    
    helpLocation.appendChild(spanTag);
}

// Validating Username

/* Conditions :
    - Over 5 letters
    - Use a capital letter
    - Include a number
*/

// Check if character is a number by using NaN property
function isCharNumber(char) {
    return char != Number(char) ? false : true;
}


// Chack if character is capital letter
function isCharCapital(char) {
    if (!isCharNumber(char)) {
        return char === char.toUpperCase() ? true : false;
    } else {
        return false;
    }
}


// Validating Username
function validateUsername(){
    let inputToValidate = selectFromForm(tagName="input", typeName="name", "username");
    let inputValueArr = inputToValidate.value.toString().split('')

    let over5Letters = inputValueArr.length > 5;
    let includeNumber = inputValueArr.some(isCharNumber);
    let useCapital = inputValueArr.some(isCharCapital);

    let result = {
        'over5Letters' : {
            'isValid': over5Letters,
            'invalidMsg' : "Must be more than 5 letters",
        },
        'includeNumber' : {
            'isValid': includeNumber,
            'invalidMsg' : "Must include at least 1 number",
        },
        'useCapital' : {
            'isValid': useCapital,
            'invalidMsg': "Must include at least 1 capital letter",
        },
    }
    
    return result;
}

// Validating Email

/*
Must be the same email
*/

function validateEmail() {
    let email = selectFromForm("email");
    let vEmail = selectFromForm("vEmail");

    return email === vEmail ? true : false;
}


// Main function
function checkValidations(validatingObj) {
    let allValid = true;

    for (let key in validatingObj) {
        tempKey = validatingObj[key]
        if (!tempKey['isValid']) {
            createHelpMessage(tempKey['invalidMsg']);
            allValid = false;
        }
    }

    return allValid;
}

function validateForm(){
    let usernameValidation = validateUsername();
    let emailValidation = validateEmail();

    
    if (checkValidations(usernameValidation) && emailValidation) {
        return true;
    } else {
        return false;
    }
}