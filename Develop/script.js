// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = '0123456789';
var numbersArray = numbers.split('');

var special = '!@#$%^&*+-*/><`~.?/+_';
var specialArray = special.split('');

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var lowerCaseArray = lowerCase.split('');

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var upperCaseArray = upperCase.split('');

console.log(lowerCaseArray);
console.log(upperCaseArray);
console.log(specialArray);
console.log(numbersArray);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {

  var passwordLengthInput = window.prompt("Enter a number between 8 and 120 for password length");

  if (passwordLengthInput < 8 || passwordLengthInput > 120) {
    passwordLengthInput = window.prompt("please enter a valid number between 8 and 120");
  } else {
    var passwordLength = passwordLengthInput;
  }

  var includeUpper = window.confirm("include upper case?");
  var includeLower = window.confirm("include lower case?");
  var includeNumbers = window.confirm("Include numbers?");
  var includeSpecial = window.confirm("include special characters?");

  var passwordOutput = '';

  if (includeLower && includeUpper && includeNumbers && includeSpecial) {

    var characterArray = lowerCaseArray.concat(upperCaseArray, numbersArray, specialArray);
    console.log(characterArray);

    for (i=0; i < passwordLength; i++){

      passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
      console.log(passwordOutput);

    }
    console.log(passwordOutput);

  }else if (includeLower && includeUpper && includeNumbers) {

    var characterArray = lowerCaseArray.concat(upperCaseArray, numbersArray);
      console.log(characterArray);
  
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
        console.log(passwordOutput);
  
      }


  }else if(includeLower && includeUpper && includeSpecial) {
    
    var characterArray = lowerCaseArray.concat(upperCaseArray, specialArray);
      console.log(characterArray);
  
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
        console.log(passwordOutput);
  
      }
  }else if(includeLower && includeUpper) {
    var characterArray = lowerCaseArray.concat(upperCaseArray);
      console.log(characterArray);
  
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
        console.log(passwordOutput);
  
      }
  }else if (includeLower && includeNumbers){
    var characterArray = lowerCaseArray.concat(numbersArray);
      console.log(characterArray);
  
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
        console.log(passwordOutput);
  
      }
  } else if(includeLower && includeSpecial){
    var characterArray = lowerCaseArray.concat(specialArray);
      console.log(characterArray);
  
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
        console.log(passwordOutput);
  
      }
  }else if(includeUpper && includeNumbers){
    var characterArray = upperCaseArray.concat(numbersArray);
      console.log(characterArray);
  
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
        console.log(passwordOutput);
  
      }
  }else if (includeUpper && includeSpecial){
    var characterArray = upperCaseArray.concat(specialArray);
      console.log(characterArray);
  
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
        console.log(passwordOutput);
  
      }
  }else if (includeNumbers && includeSpecial){
    var characterArray = numbersArray.concat(specialArray);
      console.log(characterArray);
  
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
        console.log(passwordOutput);
  
      }
  }else if (includeLower){
    var characterArray = lowerCaseArray;
      console.log(characterArray);
  
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
        console.log(passwordOutput);
  
      }
  }else if (includeUpper){
    var characterArray = upperCaseArray;
      console.log(characterArray);
  
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
        console.log(passwordOutput);
  
      }
  }else if(includeNumbers){
    var characterArray = numbersArray;
      console.log(characterArray);
  
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
        console.log(passwordOutput);
  
      }
  }else if(includeSpecial){
    var characterArray = specialArray;
      console.log(characterArray);
  
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
        console.log(passwordOutput);
  
      }
  }else {
    window.confirm8("No parameters selected, please reload the page");
  }

return passwordOutput;

}

