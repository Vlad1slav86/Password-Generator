// Assignment Code

 function generatePassword() {
  
// I created each character set separately as an array and depending on the user's answer choices, I will append the set to a blank array that I created.
  var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArr = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
  var resultArray = [];

 
var numCharacters = 0;
// This while loop ensurese user must enter a number between 8 and 128
while (numCharacters < 8 || numCharacters > 128) {
  numCharacters = window.prompt('Please enter a number between 8 and 128');

  if (isNaN(numCharacters)) {
    numCharacters = 0;
   }
}

// A series of prompts to determine the characters selected
var lower = window.confirm('Would you like to include lowercase characters?');
var upper = window.confirm('Would you like to include uppercase characters?');
var numbers = window.confirm('Would you like to include numbers?');
var special = window.confirm('Would you like to include special characters?');

// An if statement to make sure the user confirms at least one prompt
if ((lower) || (upper) || (numbers) || (special)) {
  charTypeSelected = true;
} 
else {
  window.alert('You must select at least one character type.')
}

// 
if (lower){
  resultArray = resultArray.concat(lowerArr);
}

if (upper){
  resultArray = resultArray.concat(upperArr);
}

if (numbers){
  resultArray = resultArray.concat(numArr);
  }

if (special){
  resultArray = resultArray.concat(specialArr);
}

// A for loop to display random password
var passwordString = " ";
  for (var i = 0; i < numCharacters; i++) {
    passwordString += resultArray[Math.floor(Math.random() * (resultArray.length))];
  }

  return passwordString;
}

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
