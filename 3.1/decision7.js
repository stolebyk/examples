"use strict"; 

function flattenAndSort(arr) {
	let mass = [];
	for (let item of arr) {
		mass.push(...item);	
	}
	mass.sort( (left, right) => left - right);	
	console.log(mass);
}

let arr = [[3, 2, 1], [4, 6, 23,5,43,5], [], [9, 7, 8]];

flattenAndSort(arr);