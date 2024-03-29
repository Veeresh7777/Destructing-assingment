function findMaxAndMin(numbers) {
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return { max, min };
}


const inputArray = [5, 2, 7, 1, 9];
const result = findMaxAndMin(inputArray);
console.log(result); 


