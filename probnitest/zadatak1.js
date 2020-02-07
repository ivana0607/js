// Napisati program koji racuna vrednost sledeceg izraza:
// 1K - 2K+1+ 3K+2- ... + .... + (-1)NN+1K+N

// 	Alternativno:
// 		1K + 2K+1+ 3K+2+ ... + .... + N+1K+N

let sum = 0;
let n = 3;
let k = 3;

for (let i = 1; i <= n + 1; i++) {
    sum += i / k++;
}
console.log(sum);