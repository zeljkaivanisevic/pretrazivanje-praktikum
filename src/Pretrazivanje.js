/*
​
Radimo pretraživač nad slijedećim tekstom:
​
https://drive.google.com/file/d/1yGKHPlwjuHCwOBfa9pkGyVhl1UcOYdRj/view?usp=sharing
​
Važ je zadatak napisati “suggest tool” slično kao što imamo na google-u, gdje nakon svake riječi nudimo odabir top 5 slijedećih riječi bez da korisnik mora tipkati.
​
Lekcija je o:
Razumijevanje zahtjeva 
Modeliranje zahtjeva i pretvaranje istih u kod
Pravila čistog koda
TDD
​
*/

function suggestionTool(currentText) {
    let result = ""

    //implementirati neku magiju
	//vratiti array top 5 sugestija

    
    return result;
}
console.log(suggestionTool("I am"));

//sugestije trebaju raditi za do 3 riječi
//dakle suggestionTool("I am very") je legalno
//ali suggestionTool("I am very hungry") nije
//["I AM just", "I am often", "I am currently", "I am 90%"]

// 1.Učitavanje
// 2.Obrada
// 3.Implementacija sugestija
// Koliko god možete, primjenjujte pravila čistog koda
// Savjet: prvi korak nek vam bude izrada indexa koji mapira svaku riječ u tekstu na moguće riječi koje slijede sa ponavljanjima
//te analogno napraviti mapiranje za dvije i tri riječi
//ako vam netko u funkciju preda 4 riječi vratite prazan skup, jer sugestije za četiri i više riječi n isu podržane



module.exports = suggestionTool;


