/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 400; // y-positie van speler
var snelheidX = 2;
var snelheidY = 2;
var vijandX = 1200;
var vijandY = 400;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  if (mouseIsPressed) {
    // nieuwe waaarde voor snelheidX en snelheidY maken
    snelheidX = (mouseX - spelerX) /100;
    snelheidY = (mouseY - spelerY) /100;
  }
  if (spelerX < 100 ) {
    snelheidX = snelheidX * -1;
  }

  if (spelerY < 54) {
    snelheidY = snelheidY * -1;
   }

  if (spelerX > 1283) {
    snelheidX = snelheidX * -1;
  }  

  if (spelerY > 696) {
    snelheidY = snelheidY * -1;
  }
  spelerX = spelerX + snelheidX;
  spelerY = spelerY + snelheidY;
  console.log("snelheidX =" + snelheidX);
  // speler remmen
 snelheidX = snelheidX * 0.99;
 snelheidY = snelheidY * 0.99;
  
  
  // vijand

  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
     if (spelerX - vijandX <99 &&
         spelerX - vijandX > -99 &&
         spelerY - vijandY <99 &&
        spelerY - vijandY > -99) {
        console.log("botsing"); 
     }
 // botsing kogel tegen vijand
    

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
   fill ("green");
   rect(0,0, 1280, 720);
 

  // kogel
     fill ('green');
     
  // speler
  fill("white");
  
  ellipse(spelerX - 50, spelerY - 10, 80, 80);
   // vijand
  fill("black");
  ellipse(vijandX, vijandY, 100, 100);

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
   if (spelerX - vijandX <99 &&
         spelerX - vijandX > -99 &&
         spelerY - vijandY <99 &&
        spelerY - vijandY > -99) {
       aantal= aantal +1
        console.log("botsing" + aantal) 
        return true;
   }
     // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('green');
}
 
/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  } 
  if (spelStatus === UITLEG) {
    // teken uitleg scherm

  }
}
