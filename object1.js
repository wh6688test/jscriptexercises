function oprop(o) {
	return Object.keys(o).join(",")
}

function ovalues(o) {
	return Object.values(o)
}

function oentries(o) {
	return Object.entries(o)
}


let a = {
   name: "any",
	age: 22,
        rollno:1
}

function objectLength(o) {

return	Object.keys(o).length

}

function objectLength2(o) {
        let s=0;
	for (k in o) {
	  if (o.hasOwnProperty(k)) {
		 s++;
	  }
	}
	return s;
}

function getObjectMethods(o) {

 pNames=Object.getOwnPropertyNames(o)

 return pNames.filter(p=>typeof o[p] === 'function')
}

//https://stackoverflow.com/questions/23013573/swap-key-with-value-json
//swap object value and key
function swap(o) {
  swapped={}
  Object.entries(o).forEach( e=>{
	 [k, v]=e;
         swapped[v]=k
  })
	  return swapped
}

function swap2(o) {
  return Object.entries(o).reduce((result, e) =>{
	  [k,v]=e;
     result[v]=k;
	  return result

  }, {})
}

function ifIncludes(o, k) {
     return (k in o) 

}


console.log(ifIncludes(a, 'name'));
console.log(ifIncludes(a, 'aname'));
console.log(swap(a))
console.log(swap2(a))
console.log(getObjectMethods(Math))
console.log(oprop(a))
console.log(ovalues(a))
console.log(oentries(a))
console.log(a)
console.log(objectLength(a))
console.log(objectLength2(a))
delete a.rollno
console.log(a)
console.log(objectLength(a))
console.log(objectLength2(a))


