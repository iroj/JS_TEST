function toArray(str) {
    return str.split(' ')
};

function getFactorial(temp) {
    var factorial = 0;
    var i = 1
    while ((temp - i) >= 0) {
        factorial = factorial + i;
        i++;
    }
    return factorial;
}

function printGraph(a, b) {
    console.clear();
    for (var i = 0; i <= b; i++) {
        var printString = '';
        for (var j = 1; j <= a; j++) {

            if (i == 0) {
                printString = printString + ' _'
            } else {
                printString = printString + '|_';
                if (j === a) {
                    printString = printString + '|';
                }
            }
        }
        console.log(printString)
    }
}