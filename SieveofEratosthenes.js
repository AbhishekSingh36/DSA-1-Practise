let Primes = new Array(1000).fill(0);

function SieveOfEratosthenes(n)
{
	Primes[0] = 1;
	for (let i = 3; i*i <= n; i += 2) {
		if (Primes[Math.floor(i / 2)] == 0) {
			for (let j = 3 * i; j <= n; j += 2 * i){
				Primes[Math.floor(j / 2)] = 1;
			}
		}
	}
}

let n = 9;
SieveOfEratosthenes(n);
let res = "";
for (let i = 1; i <= n; i++) {
	if (i == 2){
		res = res + i + " ";
	}
	else if (i % 2 == 1 && Primes[Math.floor(i / 2)] == 0){
		res = res + i + " ";
	}
}
console.log(res);