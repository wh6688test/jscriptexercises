const myCounter = (initial=0)=> {
        let _c=initial;
	
	const increase = (step=1) => {
		_c+=step;
	}
	const getCount = () => {
		return _c;
	}
	return {increase, getCount};
}

myCounter(1).increase(2);
console.log(myCounter().getCount());

c=myCounter(1);
c.increase(2);
console.log(c.getCount())

anyexists2 = (arr1, arr2, comp) => 
   Array.from(new Set([...arr1, ...arr2.filter(a=>arr1.findIndex((a, b)=>comp(a, b)) ===-1)]))


const yesStr=(x, defa=false)=>/^(y|yes)$/i.test(x)?true:/^(n|no)$/.test(x)?false:defa;

const myfilter = (arrv, arrc) => arrv.reduce((result, e, i) => {

   let index=arrc[i]?0:1;
   result[index].push(e);
	return result;
}, [[], []])

console.log(myfilter([1, 2, 3, 4], [true, true,false, true]));
console.log(anyexists2([1, 2], [1, 3], (a, b)=>a<b))
console.log(yesStr('y'))
console.log(yesStr('no'))
console.log(yesStr('any'))

