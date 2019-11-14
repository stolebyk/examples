"use strict"; 

 function maxTripletSum(arr) {
	 let max1 = 0;
	 let max2 = 0;
	 let max3 = 0;
	 for (let value of arr) {
		if (value >= max1) {
			if (value === max1) break;
			max3 = max2;
			max2 = max1;
			max1 = value;
		}
		else {
			if (value >= max2) {
				if (value === max2) break;
				max3 = max2;
				max2 = value;
			}
			else {
				if (value > max3) {
				max3 = value;
				}
			}
		}
	 }
	
	console.log(max1 + max2 + max3);
 }
 
 
maxTripletSum ([-7,12,-7,29,-5,0,-7,0,0,29]);