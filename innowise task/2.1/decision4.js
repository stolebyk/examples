"use strict"; 

 function toMachineName(name, separator) {
	 let str = name.replace(/^[^a-z]*/i, '');
	 let str2 = str.replace(/[^a-z0-9] */gi, separator);
	 console.log(str2.toLowerCase());
 }
 
 toMachineName('Hello,           my name        is Andrew', '-')