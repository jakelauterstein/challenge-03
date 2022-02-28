// Assignment code here

function generatePassword() {

// begin prompts

var passwordLength = window.prompt("Please enter a number of at least 8 and no more than 128 to indicate the number of characters for your password");
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength=window.prompt("Please enter a valid number of characters.(8-128)");
}
window.alert("In the following prompts select at least one of the following types: lowercase, uppercase, numbers, or special characters. Select cancel if you do not want to include the specified character choice.");
var lowerConfirm= window.confirm("Would you like to include lowercase letters in your password?");
var upperConfirm= window.confirm("Would you like to include uppercase letters in your password?");
var numberConfirm= window.confirm("Would you like to include numbers in your password?");
var characterConfirm= window.confirm("Would you like to include special characters in your password?");

console.log(passwordLength);

// create arrays with various options to be appended to the empty "characterArray" (the 2nd to last var in this section)
var lowerCase = ["a", "b", "c", "d", "e", "f" ,"g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t" ,"u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F" ,"G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T" ,"U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var characters = ["!", "$", "%", "&", "*", "+", "?", "=",  ";",":", "<", ">","!", "$", "%", "&", "*", "+", "?", "=",  ";",":", "<", ">", "!", "$", "%", "&", "*", "+", "?", "="];
var passwordArray = [];
var characterArray = [];

// input user-selected characters into the characterArray
var confirmSelected = false;
if (lowerConfirm) {
  characterArray = characterArray.concat(lowerCase)
  confirmSelected = true;
}
if (upperConfirm) {
  characterArray = characterArray.concat(upperCase)
  confirmSelected = true;
}
if (numberConfirm){
  characterArray = characterArray.concat(numbers)
  confirmSelected = true;
}
if (characterConfirm){
  characterArray = characterArray.concat(characters)
  confirmSelected = true;
}
// in case user selects no options the program will default to providing a password with all selections confirmed
if (!confirmSelected) {
  characterArray = characterArray.concat(lowerCase);
  characterArray = characterArray.concat(upperCase);
  characterArray = characterArray.concat(numbers);
  characterArray = characterArray.concat(characters);
}

//Iterate through arrays randomnly to add characters to password

for (i=0; i < passwordLength; i++) {

passwordArray.push (characterArray[Math.floor(Math.random() * characterArray.length)]);
}
  return passwordArray.join("");

}

   
// end assignemnt code

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

   /*// password generate function (now with parameter for password length)
var generatePassword = function(passwordLength) {
  while (passwordLength > 128 && passwordLength < 8) {
    // ask user to input appropriate number of characters
    window.prompt('Please only enter a valid number (8-128).');
  }*/

/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */
