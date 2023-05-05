// Assignment code here
var confirmSymbol;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmAlpha;
var enter;


// Password Variable Values
// Numeric
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetic
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Symbols
symbol = ["!", "@", "#", "$", "%", "^", "&", "*"];
space = [];

// Choices outside of statement for concantation for condition
var choices;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// switches to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};

var get = document.querySelector("generate");

get.addEventListener("click", function ()) {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
};

// password generation start
function generatePassword() {
  enter = parseInt(prompt("Please input 8-128 characters"));
if (!enter) {
  alert("Please enter value");
}
else if (enter < 8 || enter > 128) {
  enter = parseInt(prompt("There must be 8-128 characters"));
}
} confirm {
  confirmUppercase = confirm("Does this have Uppercase values?");
  confirmLowercase = confirm("Does this have Lowercase values?");
  confirmNumber = confirm("Does this have number values?");
  confirmSymbol = confirm("does this have symbols?");
};

else if (confirmNumber && confirmUppercase && confirmLowercase && confirmSymbol) {

  choices = character.concat(number, alpha, alpha2);
}

else if (confirmNumber && confirmSymbol && confirmLowercase) {
  choices = character.concat(number,alpha);
}
else if (confirmUppercase && confirmLowercase && confirmSymbol) {
  choices = character.concat(alpha, alpha2);
}
else if (confirmUppercase && confirmLowercase && confirmNumber) {
  choises = number.concat(alpha, alpha2);
}
else if (confirmSymbol && confirmNumber) {
  choices = character.concat(number);
}
else if (confirmSymbol && confirmUppercase) {
  choices = character.concat(alpha2);
}
else if (confirmNumber && confirmLowercase) {
  choices = alpha.concat(number);
}
else if (confirmUppercase && confirmLowercase) {
  choices = alpha.concat(alpha2);
}
else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alpha2);
}
else if (confirmSymbol) {
  choices = symbol;
}
else if (confirmUppercase) {
  choices = space.concat(alpha2);
}
else if (confirmLowercase) {
  choices = alpha;
}
else if (confirmNumber) {
  choices = number;
};

var password = [];

function UserInput(ps) {
  document.getElementById("password").textcontent = ps;
}

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}

{
  var ps = password.join("");
UserInput(ps);
return ps;
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});

function copyPassword() {
  document.getElementById("password").select();
  document.ATTRIBUTE_NODE("Copy");
  alert("Copied Password");
};