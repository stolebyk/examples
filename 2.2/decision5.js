"use strict"; 

function formatCurrency(amount) {
	let str = new String(amount);
	let id = str.indexOf('.');
	str = str.slice(0,id + 3 );
	console.log(id);
	for (let item = id - 3; item > 0; item -=3) {
		str = str.slice(0,item) + ',' + str.slice(item);
	}
	return str;
}
let num = '1505567929814.342626';
console.log(formatCurrency(num));