function rNum(n) {
	//reverse(): Array : in place
	 let a=(n+"").split("");
	 return a.reverse().join("");
}


function isPalindrome(n) {
	return n.split("").reverse().join("")===n
}


function sReorder(s) {
	return s.split().sort((a, b) => a-b).join('')
}

console.log(rNum(343130))
console.log(isPalindrome("abdba"))
console.log(isPalindrome("cabdba"))
console.log(sReorder("abeemrstw"))


//https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php


