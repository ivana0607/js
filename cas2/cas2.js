// var let const
console.log();
// if , if else

// koliko mesec ima dana
// let mesec=15;
// switch (mesec){
//     case 0:
//         console.log('Januar ima 31 dan');
//         break;
//     case 1:
//         console.log('Februar ima 29 dana');
//         break;
//     case 2:
//         console.log('Mart ima 31 dan');
//         break;
//     case 3:
//         console.log('April ima 30 dana');
//         break;
//     case 4:
//         console.log('Maj ima 31 dan');
//         break;
//     case 5:
//         console.log('Jun ima 30 dana');
//         break;
//     case 6:
//         console.log('Jul ima 31 dan');
// //         break;
// //     case 7:
// //         console.log('Avgust ima 31 dan');
// //         break;
// //     case 8:
// //         console.log('Septembar ima 30 dana');
// //         break;
// //     case 9:
// //         console.log('Oktobar ima 31 dan');
// //         break;
// //     case 10:
// //         console.log('Novembar ima 30 dana');
// //         break;
// //     case 11:
// //         console.log('Decembar ima 31 dan');
// //         break;
// //     default:
// //         console.log('Nema vrednost');
// //         break;
// // }

// let mesec=15;
// switch (mesec){
//     case 0:
//     case 2:
//     case 4:
//     case 6:
//     case 7:
//     case 9:
//     case 11:
//         console.log(' ima 31 dan');
//         break;
//     case 1:
//         console.log(' ima 29 dana');
//         break;
//     case 3:
//     case 5:
//     case 8:
//     case 10:
//         console.log(' ima 30 dana');
//         break;
//     default:
//         console.log('Nema vrednost');
//         break;
// }

// //izracunati da li je godina prestupna
// //deljiva sa 4 i nije deljiva sa 100 ili je deljiva sa 400
// let godina=2020;

// if ((godina%4==0) && (godina%100!=0) || (godina%400==0)){
//     console.log('Godina je prestupna');
// }else {
//     console.log('Godina nije prestupna');
// }

// // //let br=123
// // //da ispisuje jedinice, desetice, stotine da ispise

// // let br=123;

// // console.log(br%10);
// // // br /= 10; //12,3
// // br = Math.floor(br /10);// Math.floor zaokruzuje na donji, math.ceil na gornji
// // console.log(br % 10);
// // br = Math.floor(br /10);
// // console.log(br % 10);

// //5 + '' menja broj u string

// //odrediti da li je broj Armstrongov
// // da li je kub cifara jednak samom broju
// //153=1 na treci +....1^3

// let broj=153;
// let jed = broj % 10;
// let novi_br = Math.floor(broj / 10);
// let des = novi_br % 10;
// let novi_br1 = Math.floor(broj / 100);
// let sto = novi_br1 % 10;

// if (jed**3 + des**3 + sto**3 == broj){
//     console.log('Broj je Armstrongov');
// }else {
//     console.log('Broj nije Armstrongov');
// }

// let znak = '+'  //  * / -
// let br1 = 102;
// let br2 = 13.2;

// switch (znak){
//     case  '+':
//         console.log(br1+br2);
//         break;
//     case  '-':
//         console.log(br1-br2);
//         break;
//     case  '*':
//         console.log(br1*br2);
//         break;
//     case  '/':
//         console.log(br1/br2);
//         break;
//     default :
//         console.log('Nema');
//         break
// }

////da li februar ima 28 ili 29 dana na osnovu prestupne
////if u switchu
// let mesec=1;
// let godina=2020;
// switch (mesec){
//     case 0:
//     case 2:
//     case 4:
//     case 6:
//     case 7:
//     case 9:
//     case 11:
//         console.log(' ima 31 dan');
//         break;
//     case 1:

//         if ((godina%4==0) && (godina%100!=0) || (godina%400==0)){
//             console.log(' prestupan');
//         }else {
//             console.log(' nije prestupan');
//         }

//         break;
//     case 3:
//     case 5:
//     case 8:
//     case 10:
//         console.log(' ima 30 dana');
//         break;
//     default:
//         console.log('Nema vrednost');
//         break;
// }

//sqrt, pow, cos, sin

let znak = 'cos'
let br1 = 102;
let br2 = 13.2;

switch (znak){
    case  '+':
        console.log(br1+br2);
        break;
    case  '-':
        console.log(br1-br2);
        break;
    case  '*':
        console.log(br1*br2);
        break;
    case  '/':
        console.log(br1/br2);
        break;
    case 'sqrt':
        console.log(Math.sqrt(br1));
        break;
    case 'pow':
        console.log(br1**2);
        break;
    case 'cos':
        console.log(Math.cos(br1));
        break;
    case 'sin':
        console.log(Math.sin(br1));
        break;
    default :
        console.log('Nema');
        break;
}
