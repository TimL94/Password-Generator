// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created variables for each paramenter as strings than broke each string down by item into appropriate arrays
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


//created generate password function
function generatePassword() {

  // asks user for an input, if no propper input is given by the second prompt the default of 8 is chosen
  var passwordLengthInput = window.prompt("Enter a number between 8 and 128 for password length");


  //this section checks the user input to make sure that it is a number before contiuing
  var verifyPasswordLengthInput = passwordLengthInput.split('');
  var verifyArray = lowerCaseArray.concat(upperCaseArray, specialArray);

  for(i=0; i < verifyPasswordLengthInput.length; i++){
    if(verifyArray.includes(verifyPasswordLengthInput[i])){
      window.alert("input must be a number");
      return null;
    }
  }

  if (lowerCaseArray.includes(passwordLengthInput)) {
    return null;
  }

  if (passwordLengthInput < 8 || passwordLengthInput > 128) {
    window.alert("input must be a number between 8 and 128");
    return null;
  }else {
    var passwordLength = passwordLengthInput;    
  }


  

  // asks user to select parameters and displays an alert detailing their choice
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

  // includes all possible combinations and concats the appropriate arrays
  // a for loop is than used to take a random element for each iteration and add it to the end of the string
  // if no parameters are selected, than lower case is chosen by default
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

  }else if(includeLower && includeNumbers && includeSpecial){
    var characterArray = lowerCaseArray.concat(numbersArray, specialArray);

    for (i=0; i < passwordLength; i++){

      passwordOutput += characterArray[ Math.floor(Math.random() * characterArray.length) ];
    }
  }else if(includeUpper && includeNumbers && includeSpecial){
    var characterArray = upperCaseArray.concat(numbersArray, specialArray);

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
    window.alert("No parameters selected, please try again");
    return null;
  }

return passwordOutput;

}

