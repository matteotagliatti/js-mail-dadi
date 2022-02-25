/* Mail */

const emails = [
  "esempio@esempio.com",
  "matteo@esempio.com",
  "luca@esempio.com",
];

let mailOutput = document.getElementById("mail-output");

const promptEmail = prompt("Your email");

for (let i = 0; i < emails.length; i++) {
  if (emails[i] === promptEmail) {
    let emailMessage = `Email <strong>${promptEmail}</strong> può accedere in quanto presente.`;
  }
}

emailMessage = `Email <strong>${promptEmail}</strong> non può non accedere in quanto non presente `;
mailOutput.innerHTML = emailMessage;
