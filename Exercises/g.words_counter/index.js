let text = document.getElementById("text");
let p_letters = document.getElementById("letters");
let p_words = document.getElementById("words");
let letter_check = document.getElementById('letter_check');
let word_check = document.getElementById('word_check');

function CountLetter(textLetter) {
  let text_inner = textLetter.value;
  let letterCount = 0;
  for (let i = 0; i < text_inner.length; i++) {
    if (text_inner[i] != " " && text_inner[i] != '') {
      //console.log(i);
      //console.log(text_inner[i]);
      letterCount++;
    }
  }
  return letterCount;
}

function CountWords(textWord) {
  let text_inner = textWord.value;
  let wordCount = 1;
  for (let j = 0; j < text_inner.length; j++) {
    if (text_inner[j] == " ") {
      if ((text_inner.charCodeAt(j+1) >=  65 && text_inner.charCodeAt(j+1) <= 90) || 
      (text_inner.charCodeAt(j+1) >= 97 && text_inner.charCodeAt(j+1) <= 122))
            wordCount++;
    }
    } if (text_inner ==  '') {
      wordCount = 0;
  }
  return wordCount;
}

text.onchange = function Counter() {
    p_letters.innerText = `Letras: ${CountLetter(text)}.`;
    p_words.innerText = `Palavras: ${CountWords(text)}.`;
    console.log(text.value);
}

letter_check.onchange = function LetterCheck() {
  //console.log(`Retorno: ${letter_check}`)
  if (letter_check.checked) {
    p_letters.style.visibility = "hidden";
  } else {
    p_letters.style.visibility = "visible";
  }
}

word_check.onchange = function WordCheck() {
  //console.log(`Retorno: ${word_check}`)
  if (word_check.checked) {
    p_words.style.visibility = 'hidden';
  } else {
    p_words.style.visibility = 'visible';
  }
}

//single word
//every new word base on ASCII code
//Maiusculas = 65 a 90
//Minuscula =  97 a 122
//Digitos = 48 a 57
//return /^[a-zA-Z0-9]$/.test(textWord);

//.trim tira espaços antes e depois.
//.split para separar por espaço
//.reduce percorre vetor e compara valores 
//.filter para validar se o array é false (caso vazio)