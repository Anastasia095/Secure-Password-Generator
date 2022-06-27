// Assignment code here

// Get references to the #generate element
generateBtn = document.querySelector("#generate");

function generatePassword() {

  var L = 0;
  var U = 0;
  var N = 0;
  var S = 0;
  var max = 0;
  var password = [];
  var j = 0;

  function getUserSelection() {
    L = confirm("include lowercase?");
    U = confirm("include uppercase?");
    N = confirm("include numeric?");
    S = confirm("include specialCharacters?");
    while (L,U,N,S == false) {
      alert("You have to select at least 1 category")
      L = confirm("include lowercase?");
      U = confirm("include uppercase?");
      N = confirm("include numeric?");
      S = confirm("include specialCharacters?");
    }

    max = prompt("Enter length of the password (Min 8 and Max 126)");
    while (max < 8 || max > 126) {
      max = prompt("Invalid Entery! Please try again (Min 8 and Max 126)");
    }
  
  }

  getUserSelection();

  while (password.length < max)
  {
    if (L == true && password.length < max) {
      function generateLower() {
      // Returns a random integer from 97 to 122 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      password[j] = Math.floor(Math.random() * (122 - 97 + 1) + 97);
      // converts num to UTF-8 https://www.w3schools.com/html/html_charset.asp
      password[j] = String.fromCharCode(password[j]);
      j++
      }
      generateLower();
    }
    if (U == true && password.length < max) {
      function generateUpper() {
        password[j] = Math.floor(Math.random() * (90 - 65 + 1) + 65);
        password[j] = String.fromCharCode(password[j]);
        j++
      }
      generateUpper();
    }
    if (N == true && password.length < max) {
      function generateNum() {
        password[j] = Math.floor(Math.random() * (9 - 0 + 1) + 0);
        j++
        
      }
      generateNum();
    }
    if (S == true && password.length < max) {
      function generateSymbol(){
        const symbols = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';
        //that will generate random number to land  on random array cell in symbols
        password[j] = symbols[Math.floor(Math.random() * symbols.length)];
        j++;
      }
      generateSymbol();
    }
  }

  //********************Fisher–Yates shuffle to shuffle characters in password array (c) code courtesy of stack overflow =D*/ 
  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  //******************** */

  console.log("Test password befor convertion" + password);
  shuffle(password);
  console.log("Test password befor convertion" + password);
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
