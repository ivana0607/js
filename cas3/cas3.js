//petlje  - svaki korak petlje zovemo iteracija

// while petlje - kako bi napisali poruku vise puta

// let i = 0;
// while(i<5){
//     console.log('Hello');
//     i += 1; //povcava i za jedan ili i++(i--)
// }

// while(i<15){
//      console.log(i);
//      i += 1; //povcava i za jedan
//  }

// let i = 15;
//  while(i>0){
//     if(i%2==0){
//     console.log(i);
//     }
//     i --; //smanjuje i za jedan
// }

//for petlje

// for (let i=0; i<5; i++){ //let definisano u petlji ne moze da se koristi izvan
//     console.log('Hello'); //ako nam treba van petlje deklarisemo var 
//                             //ili stavimo iznad petlje
// }

// let i = 4;
// for ( i; i<200; i++){
//     if(i == 10){
//         break;
//     }
//     console.log(i); //ide do devet
// }

// let i = 4;
// for ( i; i<200; i++){
//     console.log(i); //ide do deset
//     if(i == 10){
//         break;
//     }
// }

//sabrati sve brojeve od 1 do 100

// let zbir = 0;
// for (let i=1; i<100; i++){
//     zbir = zbir + i;//kad se zavrsi petlja i ima vrednost 100
//                     //ide do 99 abio je jedan
// }
// console.log(zbir);

// let zbir = 0;
// for (var i=1; i<100; i++){
//     zbir = zbir + i;//kad se zavrsi petlja i ima vrednost 100
//                     //ide do 99 a bio je jedan
// }
// console.log(zbir);
// console.log(i);//ako hocemo da proverimo i stavljamo var

// //proizvod brojeva od 1 do 15

// let pro = 1; //proizvod pocinje od jedan
// // for(let i=1; i<15; i++){
// //     pro = pro * i;
// // }
// // console.log(pro);

//let i = 1
// while (i < 15) {
//     pro = pro * i;
//     i++;
// }
// console.log(pro);

// //sabere sve brojeve od m do n

// let m = 10;
// let n = 19;
// let zbir = 0;
// //da zamenimo mesta m i n
// if (m > n) {
//     let tmp = m;
//     m = n;
//     n = tmp;
// }

// for (let i = m; i <= n; i++) {
//     zbir += 1;
// }
// console.log(zbir);

//ispisati zbir svih brojeva deljivih sa tri u intervalu od m do n

// let m = 19;
// let n = 2;
// let zbir = 0;
// //da zamenimo mesta m i n !!!!!!!!!!!!!!!!!!!!!!
// if (m > n) {
//     let tmp = m;
//     m = n;
//     n = tmp;
// }

// for (let i = m; i <= n; i++) {
//     if(i%3==0){
//         zbir = zbir + i;
//     }
// }
// console.log(zbir);

// let i=m;
// while(i<=n){
//     if(i%3==0){
//         zbir = zbir + i;
//     }
//     i++
// }
// console.log(zbir);