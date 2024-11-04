import { teste } from "./variables";
//import Todas from "./variables";
//Todas.queijo();


let input_first_name = document.getElementById("inputFirstName");
let input_last_name = document.getElementById("inputLastName");
let input_mail = document.getElementById("inputMail");
let input_phone = document.getElementById("inputPhone");
let input_pass = document.getElementById("inputPass");
let input_passConf = document.getElementById("inputPassConfirmation");

let br = document.getElementsByTagName("br");

let label_first_name = document.getElementById("labelFirstName");
let label_mail = document.getElementById("labelMail");
let label_pass = document.getElementById("labelPass");
let label_passConf = document.getElementById("labelPassConfirmation");

let validation = false;

let erroArr = [];

function removeRequirement(param) {
  if (param.innerText.includes("(Necessary)")) {
    param.innerText = param.innerText.slice(0, -12);
  } else {
    label_passConf.innerText = "Confirm your password:";
  }
}

document.getElementById("btnConfirm").onclick = function () {
  if (input_first_name.value === "") {
    erroArr.push(label_first_name);
  } else {
    validation = true;
    removeRequirement(label_first_name);
  }

  if (input_mail.value === "") {
    erroArr.push(label_mail);
  } else {
    validation = true;
    removeRequirement(label_mail);
  }

  if (input_pass.value === "") {
    erroArr.push(label_pass);
  } else {
    validation = true;
    removeRequirement(label_pass);
  }

  if (input_passConf.value != input_pass.value) {
    label_passConf.innerText = "Password doesn't match";
  } else {
    validation = true;
  }

  for (let x = 0; x < erroArr.length; x++) {
    if (erroArr[x].innerText.includes("(Necessary)")) {
      erroArr[x].innerText;
    } else {
      erroArr[x].innerText = `${erroArr[x].innerText} (Necessary)`;
    }
  }

  if (validation) {
    window.alert(
      "Account created successfully\n\n" +
        "Name: " +
        input_first_name.value +
        " " +
        input_last_name.value +
        "\nPhone Number: " +
        input_phone.value +
        "\nE-mail: " +
        input_mail.value
    );
    console.log(erroArr);
    erroArr = [];
  }
};
