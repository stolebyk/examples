"use strict"; 

function  add(n) {
	return function(a) {
		return a + n;	
	}	
}

const addThree = add(932);
console.log(addThree("8") );
