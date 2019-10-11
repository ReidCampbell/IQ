// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // let splitString = str.split("");
    // let reverseArray = splitString.reverse()
    // let joinArray = reverseArray.join("");
    // return joinArray;

    return str
        .split("")
        .reverse()
        .join("");
}

module.exports = reverse;
