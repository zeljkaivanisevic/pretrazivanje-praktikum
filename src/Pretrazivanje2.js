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
​
*/


//samo funkcija bez testova



function suggestionTool(currentText) {
    let result = []
    let fs = require("fs");
    //implementirati neku magiju
    //vratiti array top 5 sugestija


    currentText = currentText.toLowerCase();
    let unesene_rijeci = currentText.split(" ");

    if (unesene_rijeci > 3 || currentText.length == 0) return []


    let datoteka = fs.readFileSync('long.txt', 'utf-8').toLowerCase().split(" ");

    let svi_prijedlozi = [];
    let prednost_sugestija = {};
    let podudaranje_brojac = 0;


    for (let i = 0; i < datoteka.length; i++) {
        let rijec_u_datoteci = datoteka[i];
        if (rijec_u_datoteci == unesene_rijeci[podudaranje_brojac]) podudaranje_brojac++;
        else podudaranje_brojac = 0;

        if (podudaranje_brojac == unesene_rijeci.length && i + 1 < datoteka.length) {
            podudaranje_brojac = 0;
            let prijedlog = unesene_rijeci.join(" ");
            let sljedeca_rijec_u_datoteci = datoteka[i + 1];
            prijedlog = prijedlog + " " + sljedeca_rijec_u_datoteci;

            if (prijedlog in prednost_sugestija) prednost_sugestija[prijedlog]++;
            else {
                svi_prijedlozi.push(prijedlog);
                prednost_sugestija[prijedlog] = 1;
            }
        }
    }

    let sortiranje_prijedloga = svi_prijedlozi.sort(function (prvo, drugo) {
        return prednost_sugestija[drugo] - prednost_sugestija[prvo];
    })


    for (let i = 0; i < sortiranje_prijedloga.length; i++) {
        if (i == 5) break;
        result.push(sortiranje_prijedloga[i]);
    }
    return result;
}




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


console.log(suggestionTool("I am"));

