/**
	Problem 1:
	Create an array of 5 numbers and return it.
*/
function createArr() {
	const numArr = [3, 4, 5, 6, 8];
	return numArr;
}

/**
	Problem 2:
	Add an element to the end of an array.
*/
function addElement(arr, element) {
	let pushedArr = arr.push(element);
	return pushedArr;
}

/**
	Problem 3:
	Remove the last element from an array.
*/
function removeLastElement(arr) {
	let popArr = arr.pop();
	return popArr;
}

/**
	Problem 4:
	Given an array, return the first element.
	Hint: how do we get the start of an array.
*/
function firstElement(arr) {
	return arr[0];
}

/**
	Problem 5:
	Write a function that checks if a specific element exists in an array.
*/
function elementExists(arr, element) {
	return arr.includes(element);
}

/**
	Problem 6:
	Find the index of an element in an array.
*/
function findIndex(arr, element) {
	for (let i = 0; i < arr.length; i++) {
		if (array[i] === element) {
			return i;
		}
	}
}

/**
	Problem 7:
	Sort an array of numbers in ascending order.
	Hint: sort in ascending order means each number gets bigger as you go from left to right
*/
function sortArray(arr) {
	let sortedArr = arr.sort((a, b) => a - b);
	return sortedArr;
}

/**
	Problem 8:
	Return a new array containing only even numbers from an input array.
*/
function filterEvenNumbers(arr) {
	let evenNums = arr.filter((num) => num % 2 === 0);
	return evenNums;
}

// Optional (Advanced) Array Problems:

/**
	Problem 9:
	Write a function that merges two arrays into one.
*/
function mergeArrays(arr1, arr2) {
	let mergedArrs = [...arr1, ...arr2];
	return mergedArrs;
}

/**
	Problem 10:
	Find the largest number in an array.
	Hint: Use .reduce() or Math.max().
*/
function largestNumber(arr) {
	return Math.max(...arr);
}
