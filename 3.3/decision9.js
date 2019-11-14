"use strict"; 

function reduce(arr, callback, initialValue) {
	for (let item of arr) {
		initialValue = callback(initialValue, item);
	}
	console.log(initialValue);
}

reduce( [1, 2, 10, 3, 4, 5], (acc, value) => acc * value, 1);