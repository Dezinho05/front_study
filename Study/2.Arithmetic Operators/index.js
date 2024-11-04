//Arithmetc Operators
let players = 10;
players = players + 1 // Addition = 11;
players = players - 1 // Subtraction = 9;
players = players * 2 // Multiplication = 10;
players = players / 2 // Division = 5;
let extraplayers = players % 3 // Modules (Remaining players ) = 1;
players-- // Decrement by 1;
players++ // Incremet by 1;

players += 5 // Same as players = players + 5 = 15;
players -= 5 // Same as players = players - 5 = 5;
players *= 2 // Same as players = players * 2 = 10;
players /= 2 // Same as players = players / 2 = 10;
players %= 3 // Same as players = players % 2 = 10;

players = ++a // Increment by 1 and Attribution (a = a + 1 | players = a);
players = a++ // Attribution and Increment by 1 (players = a | a = a + 1);
players = --a // Increment by 1 and Attribution (a = a - 1 | players = a);
players = a-- // Attribution and Increment by 1 (players = a | a = a - 1);

//Relational Operators
players > 10 //Bigger than 0 = false;
players < 10 //Smaller than 0 = false;
players >= 10 //Bigger or equals than 0 = true;
players <= 10 //Smaller or equals than 0 = true;
players != 10 //Different than 10 = false;
players == 10 //equals than 10 = true;

//Logical Operators
players && players // and (compares);
players || players // and (choice the true one);
!players // not (inverts !true = false | !false = true);

//Equation Priority
//1º. Parenthesis →( );
//2º. Methods (functions) → Ex: Math.round() , Math.pow();
//3º. Multiplication, Division e Modules → * , / , %;
//4º. Addition e Subtraction → + , -
//5º. Relational Operators, no order → > , < , >= , <= ,!= , ==
//6º. Logical Operators, in order → ! , && , ||