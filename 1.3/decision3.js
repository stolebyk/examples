"use strict"; 

 function biggest(nums) {
	 function comparison(left,right) {
		let str1 = '' + left + right;
		let str2 = '' + right + left;
		return  str2.localeCompare(str1);
	 }
	 
	 nums.sort((left, right) => comparison(left,right));
	 
	 console.log(nums.join(""));
	 
 }

biggest([3, 30, 300,32, 0, 34, 34, 35, 341, 349, 5, 9]);
