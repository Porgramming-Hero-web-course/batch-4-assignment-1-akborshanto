function removeDuplicates(arr: number[]): number[] {
    const uniqueArray: number[] = [];
    
    arr.forEach((num) => {
      if (!uniqueArray.includes(num)) {
        uniqueArray.push(num);
      }
    });
  
    return uniqueArray;
  }
  

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  
