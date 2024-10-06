let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let j = 2; j <= 20; j++) {
    if (j % 2 !== 0) {
        continue;
    }
    console.log(j);
}

for (let k = 1; k <= 10; k++) {
    console.log(`7 * ${k} = ${7 * k}`);
}

let arr = [1, 2, 3, 4, 5];
let h = 0;
while (h < arr.length) {
    console.log(arr[h]);
    h++;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let l = 0; l < numbers.length; l++) {
    if (numbers[l] === 7) {
        break;
    }
    console.log(numbers[l]);
}

let n = 10; 
for (let g = 1; g <= n; g++) {
    if (g >= n) {
        break;
    }
    console.log(g);
}

let s = 1;
while (s <= 20) {
    if (s % 3 === 0) {
        s++;
        continue;
    }
    console.log(s);
    s++;
}
