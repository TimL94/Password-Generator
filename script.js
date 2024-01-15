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


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {

  var passwordLengthInput = window.prompt("Enter a number between 8 and 128 for password length");

  if (passwordLengthInput < 8 || passwordLengthInput > 128) {
    passwordLengthInput = window.prompt("please enter a number between 8 and 128");
    if (passwordLengthInput < 8 || passwordLengthInput > 128) {
      passwordLength = 8;
      window.alert('no proper number was chosen, using default option');
    }
  }else {
    var passwordLength = passwordLengthInput;
  }

  var includeUpper = window.confirm("include upper case?");
  if (includeUpper){
    window.alert("Upper case will be included");
  }else{
    window.alert("Upper case declined");
  }
  
  var includeLower = window.confirm("include lower case?");
  if (includeLower){
    window.alert("Lower case will be included");
  }else{
    window.alert("Lower case declined");
  }

  var includeNumbers = window.confirm("Include numbers?");
  if (includeNumbers){
    window.alert("Numbers will be included");
  }else{
    window.alert("Numbers declined");
  }

  var includeSpecial = window.confirm("include special characters?");
  if (includeSpecial){
    window.alert("Special characters will be included");
  }else{
    window.alert("Special characters declined");
  }

  var passwordOutput = '';

  if (includeLower && includeUpper && includeNumbers && includeSpecial) {

    var characterArray = lowerCaseArray.concat(upperCaseArray, numbersArray, specialArray);

    for (i=0; i < passwordLength; i++){

      passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
    }

  }else if (includeLower && includeUpper && includeNumbers) {

    var characterArray = lowerCaseArray.concat(upperCaseArray, numbersArray);

      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
      }


  }else if(includeLower && includeUpper && includeSpecial) {
    
    var characterArray = lowerCaseArray.concat(upperCaseArray, specialArray);

      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
      }
  }else if(includeLower && includeUpper){
    var characterArray = lowerCaseArray.concat(upperCaseArray);

      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
      }
  }else if (includeLower && includeNumbers){
    var characterArray = lowerCaseArray.concat(numbersArray);

      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ]; 
      }
  }else if(includeLower && includeSpecial){
    var characterArray = lowerCaseArray.concat(specialArray);

      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ]; 
      }
  }else if(includeUpper && includeNumbers){
    var characterArray = upperCaseArray.concat(numbersArray);

      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
        console.log(passwordOutput);
  
      }
  }else if (includeUpper && includeSpecial){
    var characterArray = upperCaseArray.concat(specialArray);
 
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
      }
  }else if (includeNumbers && includeSpecial){
    var characterArray = numbersArray.concat(specialArray);
  
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
      }
  }else if (includeLower){
    var characterArray = lowerCaseArray;

      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
      }
  }else if (includeUpper){
    var characterArray = upperCaseArray;

      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
      }
  }else if(includeNumbers){
    var characterArray = numbersArray;

      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
      }
  }else if(includeSpecial){
    var characterArray = specialArray;
 
      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ]; 
      }
  }else {
    window.alert("No parameters selected, using default option");
    var characterArray = lowerCaseArray;

      for (i=0; i < passwordLength; i++){
  
        passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
      }
  }

return passwordOutput;

}

