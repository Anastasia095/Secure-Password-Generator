// Assignment code here


// Get references to the #generate element
generateBtn = document.querySelector("#generate");

function generatePassword() {

  function lowercase() {
    var userInput = confirm("include lowercase?");
    return userInput;
  }
  
  function uppercase() {
    var userInput = confirm("include uppercase?");
    return userInput;
  }
  
  function numeric() {
    var userInput = confirm("include numeric?");
    return userInput;
  } 
  
  function specialCharacters() {
    var userInput = confirm("include specialCharacters?");
    return userInput;
  }
  
  function passLength() {
    var userInput = prompt("Enter length of the password (Min 8 and Max 126)");
      while (userInput < 8 || userInput > 126) {
        userInput = prompt("Invalid Entery! Please try again (Min 8 and Max 126)");
      }
    
    return userInput;
  }

var min = 0;
var max = passLength();   
console.log("DisplayMax: " + max);

  
var password = [];
var L = lowercase();
var U = uppercase();
var N = numeric();
var S = specialCharacters();

  function counter() {
    var count = 0;
    if (L) {
      count++;
    }
  
    if (U) {
      count++;
    }
  
    if (N) {
      count++;
    }
  
    if (S) {
      count++;
    }
  
    console.log("counter function test:" + count);

    return count;
  }

  var selectionCounter = counter();
  console.log("Selection Counter Test:" + selectionCounter);

  // if (selectionCounter < 1) {
  //   alert("You have to select at least 1 character type");
  //   L = lowercase();
  //   U = uppercase();
  //   N = numeric();
  //   S = specialCharacters();
  // }

  var j = 0;
  if (L) {
    function generateLower() {
          // var test;
    // Returns a random integer from 97 to 122 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    password[j] = Math.floor(Math.random() * (122 - 97 + 1) + 97);
    // converts num to UTF-8 https://www.w3schools.com/html/html_charset.asp
    password[j] = String.fromCharCode(password[j]);
    // console.log("log stringTest: " + stringTest);
    console.log("log password test: " + password[j]);
    j++
    }
    generateLower();
  }

  // console.log("log J test:" + j);

  if (U) {
    function generateUpper() {
      password[j] = Math.floor(Math.random() * (90 - 65 + 1) + 65);
      password[j] = String.fromCharCode(password[j]);
      console.log("log uppercase test: " + password[j])
      j++
    }
    generateUpper();
  }
  if (N) {
    function generateNum() {
      password[j] = Math.floor(Math.random() * (9 - 0 + 1) + 0);
      console.log("log number test: " + password[j])
      j++
    }
    generateNum();
  }
  if (S) {
    function generateSymbol(){
      const symbols = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';
      //that will generate random number to land  on random array cell in symbols
      password[j] = symbols[Math.floor(Math.random() * symbols.length)];
      console.log("log symbols test: " + password[j])
      j++;
    }
    generateSymbol();
  }
  
  var leftToGenerate = max - selectionCounter;
  console.log("LeftToGenerate" + leftToGenerate);

  var getRandom;

  for (var index = 0; index < leftToGenerate; index++) {
    getRandom = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    if (getRandom == 0){
      if (L) 
        generateLower();
    }
    else if (getRandom == 1) {
      if (U){
        generateUpper();
      }
    }
    else if (getRandom == 1) {
      if (N){
        generateNum();
      }
    }
    else {
      if (S) 
      generateSymbol();
    }


  }
  //converting array inso string with no commas
  var generatedPassword = password.join("");
  console.log("Generated password test: " + generatedPassword);
  console.log("Generated password test: " + password);

  return generatedPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
