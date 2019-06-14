var oddNumbers = [];

for (i = 1; i < 100; i = i + 2) {

    if (i % 3 === 0 || i % 5 === 0) {
        flag5 = 0;
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                oddNumbers.push("FizzBuzz");
                flag5 = 1;
            } else oddNumbers.push("Fizz");
        }
        if (i % 5 === 0 && flag5 == 0) {
            oddNumbers.push("Buzz");
        }
    } else oddNumbers.push(i);
}

console.log(oddNumbers.toString());