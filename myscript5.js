function bsearch1(arr, start, end, value) {

   if (arr.length===0) {
	   return -1 
   }
   if (arr.length===1){
	   return arr[0]===value?0:-1 
   }
   m=Math.floor((start+end)/2)

   mvalue=arr[m]

   if (value === mvalue) {
	   return m 
   }
   if (value < mvalue) {
      return bsearch1(arr, start, m, value)
   }
   if (value > mvalue) {
	  return bsearch1(arr, m, end, value)
   }
}

function bsearch(arr, value) {

    return bsearch1(arr, 0, arr.length, value)
}

function bsearch2(arr, value) {

	if (arr.length===0) {
		return -1
	}
	if (arr.length===1) {
		return arr[0]===value?0:-1
	}

	start=0;
	end=arr.length;
	m=Math.floor((start+end)/2)
       
	if (value===arr[m]) {
	   return m;
	}
	while (value != arr[m] && start < end) {
              if (value<arr[m]) {
		      end=m-1;
	      }else {
		      start=m+1;
	      }
	      m=Math.floor((start + end)/2)
	}
	return value===arr[m]?m:-1;

}
console.log(bsearch([1, 2, 3, 4, 5, 6], 5))
console.log(bsearch2([1, 2, 3, 4, 5, 6], 5))
