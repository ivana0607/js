// Napisati program koji racuna prosek brojeva deljivih sa 7 
// u intervalu od M do N uključujući M i N

let m = 123;
let n = 234;
let sum = 0;
let br = 0;


for (let i = m; i <= n; i++) {
    if (i % 7 == 0) {
        sum = sum + i;
        br++
    }
}
console.log(sum / br);
