// zamena vrednosti promenljivih

// let = a,b,c;
// a=4;
// b=5;

// c=a;
// a=b;
// b=c;
// console.log(a,b,c);

// // ispisati brojeve od m do n, ukljucujuci i n koji su parni

// let m = 13;
// let n = 53;
// for (let i = m; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(i); 
//     }
// }

// ispisati brojeve od m do n, ukljucujuci i n koji jesu/nisu deljivi sa tri

// let m = 13;
// let n = 53;
// for (let i = m; i <= n; i++) {
//     if (i % 3 == 0) {
//         console.log(i); 
//     }
// }
// let m = 13;
// let n = 53;
// // for (let i = m; i <= n; i++) {
// //     if (i % 3 !== 0) {
// //         console.log(i); 
// //     }
// // }
// let i = m;
// while (i <= n) {// while u uslovu moze da ima samo jedan iskaz
//     if (i % 3 !== 0) {
//         console.log(i);
//     }
//     i++
// }

// //ispisati brojeve od m do n, ukljucujuci i n koji jesu/nisu deljivi sa k

// let m = 13;
// let n = 73;
// let k = 73;

// if (k <= n) {
//     for (let i = m; i <= n; i++) {
//         if (i % k == 0) {
//             console.log(i);
//         }
//     }
// }

// //prebrojite brojeve od m do n deljivi sa tri

// let m = 13;
// let n = 73;
// let x = 0;//brojac 

// for (let i = m; i <= n; i++) {
//     if (i % 3 == 0) {
//         x++;
//     }
// }
// console.log(x);//od m do n ima 20 brojeva deljivi sa x

// // S = 1/0 + 1/1 + 1/2 + ...+ 1/n// da eliminisemo 1/0 index ide od 1
// let sum = 0;
// let n = 8;

// for (let index = 1; index <= n; index++) {
//     sum += 1 / index;
// }
// console.log(sum);

// S = 1/2*2 + 1/4*4 + ... +1/2n*n // 1/3*3 + ...1/3n*n

// let sum = 0;
// let n = 9;

// // for (let index = 1; index <= n; index++) {
// //     if (index % 2 == 0) {
// //         sum += 1 / (index ** 2);
// //     }
// // }
// // console.log(sum);

// for (let index = 1; index <= n; index++) {
//     if (index % 3 == 0) {
//         sum += 1 / (index ** 2);
//     }
// }
// console.log(sum);

//faktorijal S = 1! + 2! +....+n! ili S = 1 + 2*1 + 3*2*1

// let n = 5;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     let fact = 1;
//     for (let j = 1; j <= i; j++) {
//         fact *= j;
//     }
//     sum += fact;
// }
// console.log(sum);

// let n = 5;
// let sum = 0;
// let fact = 1;

// for (let i = 1; i <= n; i++) {
//     fact *= i;
//     sum += fact;
// }
// console.log(sum);

// // S = 1! + 3! + 5! +....

// let n = 5;
// let sum = 0;
// let fact = 1;

// // for (let i = 1; i <= n; i++) {
// //     if (i%2!=0) {
// //      sum += fact;//suma raste samo ako je naparan broj
// //     }    
// //     fact *= i;//faktorijal raste uvek
// // }
// // console.log(sum);

// for (let i = 1; i <= 2*n; i++) {
//     fact *= i;
//     if (i%2!=0) {
//      sum += fact;//suma raste samo ako je naparan broj
//     }    
// }
// console.log(sum);

// let a = Infinity;
// console.log(a);

// console.log(`$(b/2)`);

//kucuca - iscrtati
let w = 5;
let p = '*'.repeat(5);

//vrh
let vrh = w / 2;
console.log('*'.repeat(w / 2));

//ostatak krova
for (let i = 1; i < w / 2; i++) {
    let krov = ' '.repeat()
    console.log(krov);

}
//precka
console.log(p);
//telo kucice
for (let i =) {
    console.log('*');
    
}
//precka
console.log(p);

