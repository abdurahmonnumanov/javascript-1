function power(n, pow) {
    let minus;
    if (pow < 0) minus = true;

    let mul = 1;
    let p = minus ? -pow : pow;
    for (let i = 1; i <= p; i++) {
        mul *= n;
    }
    return minus ? 1 / mul : mul;
}

console.log(power(20, 0));
console.log(power(20, 3));
console.log(power(10, -3));

let n = +prompt("Число:");
let pow = +prompt("Степень:");
alert(power(n, pow));