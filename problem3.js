"use strict";
function countWordOccurrences(text, wordToCount) {
    const words = text.split(' ');
    return words.filter(word => word.toLowerCase() === wordToCount.toLowerCase()).length;
}
const data = countWordOccurrences("apple apple orange", "apple");
