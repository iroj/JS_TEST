function solution(bill, k, b) {
    var total = bill
        .map(x => parseInt(x))
        .reduce((acc, val) => acc + val);
    var deduct = parseInt(bill[k]);
    var trueShare = (total - deduct) / 2;

    if ((b - trueShare) === 0) {
        console.log('Bon Appetit');
    } else {
        console.log(b - trueShare);
    }
}
var bill, k, b;

function toArray(str) {
    return str.split(' ')
};
bill = toArray('3 10 2 9');
k = 1;
b = 5;
var year = '2016';
console.log('RESULT : ',
    solution(bill, k, b)
);