let text = document.getElementById("text");
let p_letters = document.getElementById("letters");
let p_words = document.getElementById("words");

function CountLetter(textLetter) {
  let text_inner = textLetter.value;
  let letterCount = 0;
  for (let i = 0; i < text_inner.length; i++) {
    if (text_inner[i] != " " && text_inner[i] != "") {
      //console.log(i);
      //console.log(text_inner[i]);
      letterCount++;
    }
  }
  return letterCount;
}
console.log(`Letras: ${CountLetter(text)}.`);

function CountWords(textWord) {
  //single word
  //every new word base on ASCII code
  //Maiusculas = 65 a 90
  //Minuscula =  97 a 122
  //Digitos = 48 a 57
  
  let text_inner = textWord.value;
  console.log(`Valor: ${textWord.value}`);
  let wordCount = 1;
  for (let j = 0; j < text_inner.length; j++) {
    if (text_inner[j] == " ") {
            wordCount++;
    }
  }
  return wordCount;
}
console.log(`Palavras: ${CountWords(text)}.`);

text.onchange = function Counter() {
    p_letters.innerText = `Letras: ${CountLetter(text)}.`;
    p_words.innerText = `Palavras: ${CountWords(text)}.`;
    console.log(text.value);
}