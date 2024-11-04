// Inserir nome e poder de ataque de um personagem
// Nome, PV e se possui escudo

// Se ataque > defesa && escudo == false {diferença entre ataque e defesa}
// Se ataque > defesa && escudo == true {diferença entre ataque e defesa/2}
// Se ataque < defesa {dano 0}

let perso1 = window.prompt(`Attacker's name:`);
let damage = prompt(`Damage value:`);
let perso2 = prompt(`Defender's name:`);
let defense = prompt(`Armor value:`);
let calc;
let mitig;
let shieldd;
do {
  let shield = prompt(`${perso2} have a shield? (y/n)`);
  if (shield === "y" || shield === "yes") {
    shieldd = true;
  } else if (shield === "n" || shield === "no") {
    shieldd = false;
  } else {
    alert("Try again");
  }
} while (shieldd != false && shieldd != true);

damage = parseInt(damage);
defense = parseInt(defense)

if (damage > defense && shieldd == false) {
  calc = damage - defense;
  mitig = 0;
  alert(
    `${perso1} deals ${damage} point of damage to ${perso2}, who's have ${defense} points of defense.\n${perso2} takes ${calc} points of damage!\nMitigates ${mitig} points of damage.`
  );
} else if (damage > defense && shieldd == true) {
  calc = damage - defense;
  mitig = calc / 2;
  alert(
    `${perso1} deals ${damage} point of damage to ${perso2}, who's have ${defense} points of defense.\n${perso2} takes ${mitig} points of damage!\nMitigates ${mitig} points of damage.`
  );
} else {
  alert(
    `${perso1} deals ${damage} point of damage to ${perso2}, who's have ${defense} points of defense.\n${perso2} takes no points of damage!\nMitigates ${damage} points of damage.`
  );
}
//add a resume of the combat.