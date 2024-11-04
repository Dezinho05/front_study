let h1 = document.getElementById('h1');
let input = document.getElementById('input');
let p = document.getElementById('p');
let d1 = document.getElementById ('d1');
let d2 = document.getElementById('d2');
let d3 = document.getElementById('d3');
let d4 = document.getElementById ('d4');
let d5 = document.getElementById('d5');
let d6 = document.getElementById('d6');
let d7 = document.getElementById('d7');
let d8 = document.getElementById('d8');
let d9 = document.getElementById('d9');
let d0 = document.getElementById('d0');
let dplus = document.getElementById('dplus');
let dminus = document.getElementById('dminus');
let dmult = document.getElementById('dmult');
let ddivis = document.getElementById('ddivis');
let dequals = document.getElementById('dequals');

d1.onclick = function() {
    p.innerText = p.innerText + 1;
    console.log('1')
}
d2.onclick = function() {
    p.innerText = p.innerText + 2;
}
d3.onclick = function() {
    input = input + 3;
}