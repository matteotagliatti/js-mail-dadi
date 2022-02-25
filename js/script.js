/* Mail */

const emails = [
  "esempio@esempio.com",
  "matteo@esempio.com",
  "luca@esempio.com",
];

let mailOutput = document.getElementById("mail-output");

let emailMessage = "Email non presente";
let promptEmail = prompt("Your email");

for (let i = 0; i < emails.length; i++) {
  if (emails[i] === promptEmail) {
    emailMessage = "Email presente";
  }
}

mailOutput.innerText = emailMessage;
