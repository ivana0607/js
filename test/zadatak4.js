// Zadatak 4
// Napisati program koji iscrtava brojeve 8 i 0 širine W i visine H
// Primer za W=6 i H=10.

let w = 6;
let h = 7;
let x = '';

x=' '+'*'.repeat(w-2)
console.log(x);

for (let i = 1; i <h-6; i++) {
  x= '*'+' '.repeat(w-2)+'*';
    console.log(x);
}
x=' '+'*'.repeat(w-2)
console.log(x);
for (let i = 1; i <h-5; i++) {
    x= '*'+' '.repeat(w-2)+'*';
      console.log(x);
  }
x=' '+'*'.repeat(w-2)
console.log(x);
