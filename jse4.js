function adiff(a,b) {

   return  a.filter(e=>!b.includes(e))

}

function generateArr(start, stop, step) {
    result=[]
    for (let i=start; i<=stop;i+=step) {
       result.push(i);
    }
    return result;
}

function moveArr(arr, start, stop) {
	end=stop;
	if (start === stop) {
		return arr
	}
	if (start > stop) {
            end=stop+1;	
	}
	result=[...arr];
	deleted=result.splice(start, 1)[0]
	result.splice(end, 0, deleted) 
	return result 
}

function filterFalsy(arr) {
    return arr.filter(e=>e !== null && e !== false && e !== "" && e !==0)
	
}

function prefillArr(t, a) {
    return new Array(t).fill(a);
}
function arrayUnion(a, b) {

 return [...a, ...b]
}

function arrFlat(a, isSharrow=false) {

	result= isSharrow?a.flat():a.flat(Infinity);
	return result
}

function removeDuplicateSet(arr) {
	return [...new Set(arr)]
}

function removeDuplicateFilter(arr) {
	return arr.filter( (e, i)=>arr.indexOf(e) === i)
}

function removeDuplicateForEach(arr) {
	result=[]
	arr.forEach( e=> {
		(!result.includes(e) && result.push(e));
	}
	);
	return result;
}

function arraySumList(arr, total) {
	result=[]
     arr.filter((e, i) => {
	     let j=arr.indexOf(total-e);
	     (j>i && result.push([i, j]))
	})
	return result

}

function longestStartingCommon(s) {


}

function arrDiff(a,b) {

	a1=a.flat(Infinity)
	b1=b.flat(Infinity)
	return [...a1.filter(e=>!b1.includes(e)), ...b1.flat(Infinity).filter(e=>!a1.includes(e))]
}

function getLongArray(a, b) {

   l=a.length>=b.length?a:b
   s=a.length<=b.length?a:b

   return [a, b]
}

function arraySumup(a, b) {

	result=[]
	if (a.length>=b.length) {
            result=a.map( (e, i) =>{
               return e+b[i]||0; 
	    })
	} else {
	    result=b.map((e, i) => {
		    return e+a[i]||0;
            })

	}
        return result

}

console.log("ARRAY SUM : ")
console.log(arraySumup([1, 2, 3, 4], [1, 1, 1, 1, 1, 1, 1]))

console.log("DIFF : ")
console.log(arrDiff([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

let o = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];
       
r=o.sort( (e1, e2) => (e1.title < e2.title)?-1:(e1.title>e2.title)?1:0)
console.log(o)

console.log(arraySumList([10, 20, 10, 40, 50, 60, 70], 50))

notFalsy=arr=>arr.filter(a=>!!a)
console.log("NOT FALSY")
console.log(notFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]))

console.log(removeDuplicateSet([1, 1, 2, 0, 2]))
console.log(removeDuplicateFilter([1, 1, 2, 0, 2]))
console.log(removeDuplicateForEach([1, 1, 2, 0, 2]))

console.log(arrFlat([1, [2], [3, [[4]]],[5,6]]));
console.log(arrFlat([1, [2], [3, [[4]]],[5,6]], true));

console.log(arrayUnion([1, 2], [3, 4, 5]))
console.log(prefillArr(6, 1))
console.log(adiff([1, 2], [1, 3]))
console.log(generateArr(-4, 7, 1))
console.log(moveArr([1, 2, 3, 4, 5], 0, 2))
console.log(moveArr([1, 2, 3, 4, 5], -1, -2))

console.log(filterFalsy([58, '', 'ab', true, null, false, 0]))
