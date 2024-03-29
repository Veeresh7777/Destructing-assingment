function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}


const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); 