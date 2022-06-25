// Assignment code here


// Get references to the #generate element
generateBtn = document.querySelector("#generate");

function generatePassword() {

  var L = 0;
  var U = 0;
  var N = 0;
  var S = 0;
  var min = 0;
  var max = 0;
  var password = [];
  var selectionCounter = 0;
  var j = 0;
  var leftToGenerate = 0;
  var getRandom = 0;

  function getUserSelection() {
    L = confirm("include lowercase?");
    U = confirm("include uppercase?");
    N = confirm("include numeric?");
    S = confirm("include specialCharacters?");
    max = prompt("Enter length of the password (Min 8 and Max 126)");
      while (max < 8 || max > 126) {
        max = prompt("Invalid Entery! Please try again (Min 8 and Max 126)");
      }
    
  }

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
  
    return count;
  }

  getUserSelection() ;
  selectionCounter = counter();

  if (L) {
    function generateLower() {
    // Returns a random integer from 97 to 122 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    password[j] = Math.floor(Math.random() * (122 - 97 + 1) + 97);
    // converts num to UTF-8 https://www.w3schools.com/html/html_charset.asp
    password[j] = String.fromCharCode(password[j]);
    j++
    }
    generateLower();
  }
  if (U) {
    function generateUpper() {
      password[j] = Math.floor(Math.random() * (90 - 65 + 1) + 65);
      password[j] = String.fromCharCode(password[j]);
      j++
    }
    generateUpper();
  }
  if (N) {
    function generateNum() {
      password[j] = Math.floor(Math.random() * (9 - 0 + 1) + 0);
      j++
    }
    generateNum();
  }
  if (S) {
    function generateSymbol(){
      const symbols = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';
      //that will generate random number to land  on random array cell in symbols
      password[j] = symbols[Math.floor(Math.random() * symbols.length)];
      j++;
    }
    generateSymbol();
  }
  
  leftToGenerate = max - selectionCounter;

  for (var index = 0; index < leftToGenerate; index++) {
    //there are 4 categories of characters, at least 1 will be selected, this is why max random value is set to 3 (randomly generating char from the 3 categories that are left
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
  console.log("Generated password test: " + password);
  console.log("Generated password test: " + generatedPassword);

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
