// T1
// Sta ispisuje sledeci program za X=1 a šta za X=5:
let X;
// X=1;
// X=5;
switch (X) {
 case 1:
 case 2:
 console.log(2);
 default:
 console.log("default");
 case 3:
 console.log(3);
 break;
 case 4:
 console.log(4);
}
// Zasto?

//za x = 1 izbacuje 2, default i 3 //do prvog break-a
//za x = 5 izbacuje default i 3 // default izvrsava ukoliko nista drugo nije tacno
        // onda 3 do break-a

// T2
// Koje 3 vrst promenljivih postoje u javascriptu? Koje su njihove specificne odlike

// Promenljive u javascriptu su:
// var
// let
// const
// var je globalna promenljiva
// let je lokalna promenljiva (postoji samo u tom bloku koda)
// const ima konstantnu vrednost