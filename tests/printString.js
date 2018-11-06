function solution(a, b) {
    printSquare(a, b);
    var x = a > 1 ? Math.ceil(a / 2) : 1;
    var y = b > 1 ? Math.ceil(b / 2) : 1;
    console.log(x, y)
    return (x * y);
};

function getSquareOrdinates(cx, cy) {
    return new Array(4).fill()
        .map((val, i) => {
            switch (i) {
                case 0:
                    return {
                        x: cx,
                        y: cy
                    };
                case 1:
                    return {
                        x: cx + 1,
                        y: cy
                    };
                case 2:
                    return {
                        x: cx + 1,
                        y: cy + 1
                    };
                case 3:
                    return {
                        x: cx,
                        y: cy + 1
                    };
            };
        })
};

function printSquare(a, b) {
    console.clear();
    console.log(a, b);
    var squares = [];

    for (var i = 0; i <= b; i++) {
        var printString = '';
        for (var j = 0; j <= a; j++) {
            if (j > 0) {
                if (i == 0) {
                    printString = printString + ' _'
                } else {
                    printString = printString + '|_';
                    if (j === a) {
                        printString = printString + '|';
                    }
                }
            }
            if (i !== a && j !== b) {
                squares.push(getSquareOrdinates(i, j));
            }
        }
        console.log(printString)
    }
    return squares
}
var a = 5;
var b = 5;
console.log('RESULT : ',
    solution(a, b)
);