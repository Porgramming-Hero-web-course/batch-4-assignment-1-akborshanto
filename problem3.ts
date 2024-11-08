

function countWordOccurrences(text: string, wordToCount: string): number {
    const words = text.split(' ');
    return words.filter(word => word.toLowerCase() === wordToCount.toLowerCase()).length;
  }
  const data=countWordOccurrences("apple apple orange","apple")
