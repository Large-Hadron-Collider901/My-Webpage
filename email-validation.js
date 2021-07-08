function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
while(mailformat==false){
let mailFormat = prompt
("Please enter your e-mail address");
}
if(inputText.value.match(mailformat))
{
alert("Sign up successful! Thanks for subscribing to our Native Wildflowers weekly newsletter!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address, please try again!");
document.form1.text1.focus();
return false;
}
}