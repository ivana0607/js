// *
// *     *
// *           *
// *                *//romb
// *           * 
// *      *
//     *
// Za N=4
// +5 poena ako se slika prikaže na HTML stranici
// Alternativno:
// Do pola slike.

let n = 4;
let x = '';

x = ' '.repeat(4)+'*'+'\n';

for (let i = 1; i < n; i++) {
    x += ' '.repeat(n-i)+'*'+ ' '.repeat(2*i-1)+'*'+'\n';
}


console.log(x);
