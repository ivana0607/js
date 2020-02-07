// Koliko zadati mesec ima dana, 
// Postoji boolean koji govori da li je godina prestupna.

let mesec = 1;
let godina = 2020;
switch (mesec) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
        console.log(' ima 31 dan');
        break;
    case 1:
        if ((godina % 4 == 0) && (godina % 100 != 0) || (godina % 400 == 0)) {
            console.log('Godina je prestupna');
        } else {
            console.log('Godina nije prestupna');
        }
        break;
    case 3:
    case 5:
    case 8:
    case 10:
        console.log(' ima 30 dana');
        break;
    default:
        console.log('Nema vrednost');
        break;

}