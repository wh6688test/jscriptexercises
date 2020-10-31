function my1(a, ...n) {
	if (n.length==0)
		return a[0];
	return a.slice(0,n);
}

function convertToArray() {
	return Array.prototype.slice.call(arguments)

}
console.log(my1([7, 2]));
console.log(my1([], 3));
console.log(my1([7, 9, 0, -2], 3));
console.log(my1([7, 9, 0, -2], 6));
console.log(my1([7, 9, 0, -2], -3)); 
console.log(convertToArray('A', 'C'))
/**
let slice=Array.prototype.slice;
http://www.codeblocq.com/2016/05/Get-the-last-element-of-an-Array-in-JavaScript/

javascript tips : 

1.converting no using +
	
	2. converting to boolean using !!
	3. short circuit condition : 
if (a) {
	b();
}

can be converted to a && b()

a && b()

4. default value using || this.name=a || "default"


5. cache the array length : 

let length=array.length;

for (let i=0;i<length;i__) {

}

6.get the last element in the array  : 

a.slice(-1), a.slice(-2) a.slice(-3)

7. truncate array : change the array length :  a.length=3;

8.  using /g : replace to replace all : s.replace(/hn/g, "an")

9. merging array (good in memory) : 

    a1.push.apply(a1,a2)

    a1.push.apply(a1, a2)

10. Array.from(elements)
    [].slice.call(elements)


11. shuffle array list : 

    a.sort(n=>Math.random()-0.5)


https://blog.jscrambler.com/12-extremely-useful-hacks-for-javascript/

https://blog.jscrambler.com/12-extremely-useful-hacks-for-javascript/

https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php

---

find the array's difference using filter : 

a.includes(e)
m.has(e)
**/





