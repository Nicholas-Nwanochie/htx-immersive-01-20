// Challenge 1 
function collatz(num) {
    console.log(num)
    while (num != 1) {
        if (num % 2 == 0) {
            //num = num / 2;
            num /= 2;
            console.log(num);
        } else {
            num = num * 3 + 1;
            console.log(num);
        }
    }
}

collatz(20);
collatz(40);

//Challenge 2 

function largestPalendrome() {
    for (var i = 999; i > 899; i--) {
        for (var j = i; j > 899; j--) {
            let num = i * j;
            if (isPal(num)){
                return(num);
            }
        }
    }
}

console.log(largestPalendrome());

function isPal(num) {
    palStr = num.toString().split("");
    for (var i = 0; i < palStr.length / 2; i++) {
        if (palStr[i] != palStr[palStr.length - (1 + i)]) {
            return false;
        }
    }
    return true;
}

// 906609

//Challenge 3 

function smallest(){
    var num = 2000;
    while (!isDivisible(num)){
        num++;
    }
    console.log(num);
}

function isDivisible(num) {
    for (var i = 1; i < 21; i++) {
        if (num % i != 0) {
            return false;
        }
    }
    return true;
}

smallest();

// 232792560