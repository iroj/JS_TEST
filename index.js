function solution(a, b) {
    var temp = 0;
    var result = b
        .split('')
        .map(val => {
            if (val === 'U') {
                temp = temp + 1
            } else {
                temp = temp - 1
            }
            return temp;
        })
        .reduce((acc, val, i, arr) => {
            acc = (arr[i - 1] && arr[i - 1] < 0 && val === 0) ? (acc + 1) : acc;
            console.log(acc, val, arr[i - 1])
            return acc;
        }, 0);
    console.log(b);
    return result;
};
var a = 9
var b = 'UDDDUDUU';
console.log('RESULT : ',
    solution(a, b)
);

function toArray(str) {
    return str.split(' ')
};