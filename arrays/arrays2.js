/**
	Loop and Print Each Element
	Problem: Write a function printElements that takes an array and logs each element to the console.
		Example: printElements( [ 1, 2, 3 ] ) should log 1, 2, and 3 on separate lines.
*/
function printElements(arr) {
	for (let i = 0; i < arr.length; i++) {
		return console.log(arr[i]);
	}
}

/**
	Sum of Array Elements
	Problem: Write a function sumArray that takes an array of numbers and returns the sum of all elements.
		Example: sumArray( [ 1, 2, 3, 4 ] ) should return 10.
*/

function sumArray(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += array[i];
	}
	return sum;
}

/**
	Find Largest Number
	Problem: Write a function findMax that takes an array of numbers and returns the largest number.
		Example: findMax( [ 1, 5, 3, 9, 2 ] ) should return 9.
	
*/

function findMax(arr) {
	return Math.max(...arr);
}

/**
	Filter Odd Numbers
	Problem: Write a function filterOdds that takes an array of numbers and returns a new array with only the odd numbers.
	Example: filterOdds([1, 2, 3, 4, 5]) should return [1, 3, 5].
*/

function filterOdds(arr) {
	return arr.filter((num) => num % 2 === 1);
}

/**
	Reverse Array;
	Problem: Write a function reverseArray that takes an array and returns a new array with the elements in reverse order.
	Example: reverseArray([1, 2, 3]) should return [3, 2, 1].
*/

function reverseArray(arr) {
	return arr.reverse();
}

/**
	Count Occurrences of a Specific Element
	Problem: Write a function countOccurrences that takes an array and a target element, and returns the number of times the target appears in the array.
	Example: countOccurrences([1, 2, 2, 3, 2], 2) should return 3.
*/

function countOccurrences(arr, target) {
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			result++;
		}
	}
	return result;
}

/**
	Check for Duplicates
	Problem: Write a function hasDuplicates that takes an array and returns true if any element appears more than once, and false otherwise.
	Example: hasDuplicates([1, 2, 3, 4, 2]) should return true.
*/

function hasDuplicates(arr) {
	let numsSeen = {};

	for (const currentNum of arr) {
		if (numsSeen[currentNum]) {
			numsSeen[currentNum] += 1;
		} else {
			numsSeen[currentNum] = 1;
		}
	}

	for (const num in numsSeen) {
		if (numsSeen[num] > 1) {
			return true;
		}
	}
	return false;
}

/**
	Two Sum( Simplified )
	Problem: Write a function twoSum that takes an array of numbers and a target number. The function should return an array containing the indices of two numbers that add up to the target. Assume there is exactly one solution, and the same element cannot be used twice.
	Example: twoSum([2, 7, 11, 15], 9) should return [0, 1] because 2 + 7 = 9.
*/

function twoSum(arr, target) {
	let indexes = [];

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				indexes.push(i);
				indexes.push(j);
			}
		}
	}
	return indexes;
}

twoSum([2, 7, 11, 15], 9);
