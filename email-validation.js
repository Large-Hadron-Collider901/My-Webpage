function ValidateEmail(inputText) {
    if (inputText.value.indexOf('@') > 0) return alert("Sign up successful! Thanks for subscribing to our Native Wildflowers weekly newsletter!");
    let valid = false;
    while (valid == false) {
       let retryEmail = prompt("Oops! Invalid entry. Please enter a valid e-mail address.");
       if (retryEmail.indexOf('@') > 0) {
     alert("Sign up successful! Thanks for subscribing to our Native Wildflowers weekly newsletter!");
     valid = true;
        }
      }
    }