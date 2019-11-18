// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    // Example 1

    // let splitString = str.split("");
    // let reverseArray = splitString.reverse()
    // let joinArray = reverseArray.join("");
    // return joinArray;

    // Example 2

    // return str
    //     .split("")
    //     .reverse()
    //     .join("");

    // Example 3

    // let reversed = "";

    // for (let character of str) {
    //     reversed = character + reversed;
    // }

    // return reversed;

    // Example 4

    return str.split("").reduce((rev, char) => char + rev, "");
}

reverse("abcd");

module.exports = reverse;
