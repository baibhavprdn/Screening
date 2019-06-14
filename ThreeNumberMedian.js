var a = Number(prompt("Enter first number", ""));
var b = Number(prompt("Enter second number", ""));
var c = Number(prompt("Enter third number", ""));

alert("The median is " + findMedian(a, b, c));

function findMedian(a, b, c) {

    if (a > b) {
        if (a > c) {
            median = checkBigger(b, c);
        }
    } else {
        if (a > c) {
            median = a;
        } else {
            median = checkSmaller(b, c);
        }
    }

    return median;
}

function checkBigger(b, c) {
    return b > c ? b : c;
}

function checkSmaller(b, c) {
    return b < c ? b : c;
}