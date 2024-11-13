/**
	First and Last Elements

	Problem: Write a function firstAndLast that takes an array and returns an array containing the first and last elements.
	Example: firstAndLast([1, 2, 3, 4, 5]) should return [1, 5].
	Explanation: The first element is 1( at index 0 ), and the last element is 5( at index 4 ).Since we want the first and last values, we return [ 1, 5 ].
*/

function firstAndLast(arr) {
	let result = [];
	const first = arr[0];
	const last = arr[ arr.length - 1 ];
	result.push(first, last)
	return result;
}

/**
	Check if Array is a Palindrome

	Problem: Write a function isPalindromeArray that checks if an array reads the same forwards and backwards. Return true if it does, and false otherwise.
	Example: isPalindromeArray([1, 2, 3, 2, 1]) should return true.
	Explanation: Starting from both ends, 1 equals 1, and 2 equals 2. Finally, the middle element 3 does not need a comparison as both sides matched.Since all elements are symmetrical around the center, the array is a palindrome, and the function returns true.
*/

function isPalindromeArray ( arr ) { 
		
	}

/**
	Find Pair with Given Sum (Sorted Array)

	Problem: Write a function pairWithSum that takes a sorted array of numbers and a target sum. Find two numbers in the array that add up to the target and return them as an array. If no such pair exists, return an empty array.
	Example: pairWithSum([1, 2, 3, 4, 6], 7) should return [1, 6].
	Explanation: Starting with 1( smallest ) and 6( largest ), we get a sum of 7 which matches the target.Therefore, we return [ 1, 6 ].If this sum had been less than 7, we would move the left pointer up to increase the sum; if it had been more, we'd move the right pointer down.
*/

function pairWithSum ( arr, target ) { 
	
}

/**
	Remove Duplicates from Sorted Array

	Problem: Write a function removeDuplicates that takes a sorted array and removes duplicates in place. Return the length of the modified array, with the unique elements at the beginning.
	Example: removeDuplicates([1, 1, 2, 2, 3]) should return 3, modifying the array to [1, 2, 3, ...].
	Explanation: Starting from the beginning, we use one pointer to track the current unique element.When we encounter a new unique element( 2 after 1 and then 3 ), we place it in the next position.This process leaves us with [ 1, 2, 3, ...] at the start of the array, and the function returns 3 because there are three unique values.
*/

function removeDuplicates ( arr ) { 
	
}

/**
	Move Zeros to End

	Problem: Write a function moveZeros that takes an array of numbers and moves all the zeros to the end, keeping the order of other numbers. Modify the array in place.
	Example: moveZeros([0, 1, 0, 3, 12]) should modify the array to [1, 3, 12, 0, 0].
	Explanation: Using two pointers, we move through the array, shifting non - zero values to the front. 1, 3, and 12 are placed at the start, and 0s are left at the end, resulting in [ 1, 3, 12, 0, 0 ].
*/

function moveZeros ( arr ) { 
	
}

/**
	Find Intersection of Two Sorted Arrays

	Problem: Write a function intersection that takes two sorted arrays and returns an array containing elements that appear in both arrays.
	Example: intersection([1, 2, 4, 5], [2, 3, 4]) should return [2, 4].
	Explanation: Starting from the beginning of both arrays, we find that 2 is common to both, so we add it to our result.We skip any elements that don't match, moving pointers as needed until we find the next match (4). The final intersection is [2, 4].
*/

function intersection ( arr1, arr2 ) { 
	
}

/**
	Square and Sort Array (Negative and Positive Numbers)

	Problem: Write a function sortedSquares that takes a sorted array of integers that may include both negative and positive numbers. Return a sorted array of their squares.
	Example: sortedSquares([-4, -1, 0, 3, 10]) should return [0, 1, 9, 16, 100].
	Explanation: Squaring all values gives[ 16, 1, 0, 9, 100 ].We use two pointers, comparing squares from both ends to build a sorted array.Starting with 0, then 1, 9, 16, and finally 100, the sorted squares array becomes[ 0, 1, 9, 16, 100 ].
*/

function sortedSquares ( arr ) { 
	
}

/**
	Two Sum (Unsorted Array, Return Indices)

	Problem: Write a function twoSumIndices that takes an unsorted array of numbers and a target sum. Return the indices of two numbers that add up to the target. Assume there is exactly one solution.
	Example: twoSumIndices([3, 2, 4], 6) should return [1, 2].
	Explanation: We can use a hash map to track indices of each number. Starting with 3 (index 0), then 2 (index 1), we see that 4 (index 2) can pair with 2 to sum to 6. Thus, the function returns [1, 2] because 2 + 4 = 6.
*/

function twoSumIndices ( arr, sum ) { 
	
}
