//let nickname = window.prompt(`What is your name?`)
//console.log(nickname);

let username;

document.getElementById("buttonv").onclick = function () {
    username = document.getElementById("inputv").value;
    document.getElementById("h1v").textContent = `Hello, ${username}`
}