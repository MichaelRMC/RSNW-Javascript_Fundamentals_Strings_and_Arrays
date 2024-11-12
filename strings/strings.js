/**
	 Problem 1:
	Write a function that takes a string as input and returns the length of the string.
*/
function stringLength(str) {
    return str.length
}

/**
	Problem 2:
	Write a function that converts a string to uppercase.
	Hint: say out loud what you would need to accomplish this in english.
*/
function toUpperCaseString(str) {
    return str.toUpperCase()
}
/**
	Problem 3:
	Given a string, return the first character of that string.
	Hint: how do you access characters of a string.
*/
function firstCharacter(str) {
    return str.charAt(0)
}

/**
	Problem 4:
	Write a function that concatenates two strings.
	Hint: Use the + operator or a method.
*/
function concatenateStrings(str1, str2) {
    return str1 + str2
}

/**
	Problem 5:
	Check if a given word is found in a sentence.
	Hint: what are substrings.
*/
function checkWordInSentence(sentence, word) {
    return sentence.includes(word)
}

/**
	Problem 6:
	Given a string, return the part of the string from index 2 to 5.
*/
function substringFromIndex(str) {
    return str.substring(2, 6)
}

/**
	Problem 7:
	Reverse a given string.
	Hint: maybe start by convert it to an array
*/
function reverseString(str) {
    return str.split("").reverse().join("")
}

/**
	Problem 8:
	Count the number of vowels in a string.
	Hint: Use a loop.
*/
function countVowels(str) {
	const vowels = [ "a", "e", "i", "o", "u" ]
	let count= o;
	
	for (const char of str.toLowerCase()) {
		if (vowels.includes(char)) {
			count++
		}
	}
	return count
}

//Optional (Advanced) String Problems:

/**
	Problem 9:
	Given a string, check if it’s a palindrome (reads the same forward and backward).
*/
function isPalindrome(str) {
	let originalWord = str.toLowerCase();
	let reverseWord = originalWord.split("").reverse().join("");
	return reverseWord === originalWord;
}

/**
	Problem 10:
	Replace all spaces in a string with a dash '-'.
*/
function replaceSpaces(str) {
	let newStr = str.replaceAll( " ", "-" );
	return newStr
}