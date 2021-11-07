// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;
  

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
function getPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 15;
  var password = "";

for (var i = 0; i <passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber+1);
}

document.getElementById("#password").value = password;


}








