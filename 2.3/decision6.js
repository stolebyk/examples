"use strict"; 

function alphabetized(text) {
	text = text.replace(/[^a-z]/gi,'');
	let arr = text.split('');
	arr.sort( (left, right) => left.localeCompare(right,'en', {sensitivity: 'accent'}) );
	console.log(arr.join(''));
}

alphabetized('The Holy Bible.');