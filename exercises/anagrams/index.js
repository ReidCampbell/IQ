// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const zp1 = stringA
        .replace(/[^\w]/g, "")
        .toLowerCase()
        .split("")
        .sort()
        .join();

    const zp2 = stringB
        .replace(/[^\w]/g, "")
        .toLowerCase()
        .split("")
        .sort()
        .join();

    if (zp1.length !== zp2.length) {
        return false;
    } else if (zp1 === zp2) {
        return true;
    } else {
        return false;
    }
}

module.exports = anagrams;
