let n = 322;
let m = 345;
let digit = 3;
for (var i = n; i <= m; i++) {
    var current = i;
    while (current > 0) {
        var modulus = current % 10;
        console.log('Broj:',current,'Cifra:',modulus);
        if (modulus == digit) {
            console.log(i);
            break;
        }
        current = Math.round(current / 10);
    }
}