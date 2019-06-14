var myString = prompt("Enter a string", "");
console.log(alphabetCount(myString));

function alphabetCount(myString) {
    var counter = {};
    for (i = 0; i < myString.length; i++) {

        var letter = myString[i];

        if (counter[letter]) {
            counter[letter]++;

        } else {
            counter[letter] = 1;
        }
    }

    return counter;
}