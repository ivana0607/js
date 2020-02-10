// Zadatak 2
// Andjela je posle žurke pozvala Car:GO da je odveze do kuce. Prilikom rezervacije vozila napomenut
// je princip kojim će se naplaćivati usluga. Ukoliko od kluba do Andjelinog stana ima distance
// kilometara a cena se obračunava na dole napomenuti način, koliko dinara će Andjeli biti potrebno
// da se vrati kući. Startna cena voznje je startPrice. Metod obračuna cene:
// Cena se obračunava tako što se distance pomnozi sa unitPrice i na to se doda startPrice.
// Primer: Ukoliko je distance=15km , startPrice=25RSD a unitPrice=30 onda je novac potreban
// Andjeli jednak 475
// Dodatak:
// Ukoliko Andjela poseduje money novca. Ispisati poruku da li ima dovoljno novca da se vrati kuci.
// Primer: Ukoliko je money=480 onda je ispis: Ima para! Ukoliko je money=380 onda je ispis:
// Nema para!
// Napomena: Izvrsiti proveru takvu da sve ulazne vrednosti ne smeju imati negativnu vrednsot, u
// slučaju pogresnih ulaznih podataka program izbacuje poruku: GRESKA

let distanca = -15;
let startPrice = 25;
let unitPrice = 30;

let cena = distanca * unitPrice + startPrice;

let money = 420;

if (distanca > 0 && unitPrice > 0 && startPrice > 0) {
    console.log(cena);
} else {
    console.log('Pogresan unos');

}


if (money >= 480) { // umesto 480 treba da stoji cena 
    console.log('Ima para');

} else {
    console.log('Nema para');

}

