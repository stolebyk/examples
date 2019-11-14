"use strict"; 

function sumAverage(arr) {
	function getAverageValue(mass) {
		if(mass.length !== 0) {
			return mass.reduce( (sum, item) => sum + item, 0) / mass.length;
		}
		else { return 0;}
	
	}
	
	let sum = arr.reduce( (sumAverage, item) => sumAverage + getAverageValue(item), 0);
	console.log(Math.floor(sum) );	
}

let arr = [[1,2,2,1],[2,2,2,1],[],[4,2,5,0,3,4]];

sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]])