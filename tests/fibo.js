"use strict";
function fibo(n) {
    let a = 0;
    let b = 1;
    let sum = 0;
    if (n > 0) {
        console.log("fibo series : are");
        console.log(a);
        console.log(b);
        sum = a + b;
        for (let i = 3; i <= n; i++) {
            console.log(sum);
            a = b;
            b = sum;
            sum = a + b;
        }
    }
    else {
        console.log("not fibo");
    }
}
fibo(-8);
