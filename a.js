const scrambled = { 2: "e", 5: "o", 1: "h", 4: "l", 3: "l" };
//sorted according to key
console.log(Object.values(scrambled))
console.log(Object.keys(scrambled))
console.log(Object.entries(scrambled))
//in order to use returned function, return function as object property
const myCounter = (initial=0)=> {
        let _c=initial;
	
	let increase = (step=1) => {
		_c+=step;
	}
	let getCount = () => {
		return _c;
	}
	return {increase, getCount}
}

console.log("myCounter")
let c=myCounter(1);

c.increase(2)
console.log(c.getCount());

const createBase = b => {
    return e =>b + e;
}

let addSix=createBase(6);
console.log(addSix(5));

const triplemul = x=>y=>z=>x*y*z;
console.log("triple mul : ")
console.log(triplemul(2)(3)(4))

const reverseWords= sentence=>{
    if (sentence.length<=1) return sentence;
    return [...sentence.split(/\s+/)].map(w=>w.split('').reverse().join('')).join(" ");
}
console.log("reverse words : ")
console.log(reverseWords("atest bdey"))

const mymerg=(arr1, arr2, comp)=>Array.from(new Set([...arr1, ...arr2.filter(x=>arr1.findIndex( y=>comp(x, y)===-1))]));

console.log(mymerg([1, 2], [5, 1, 3], (a, b)=>a-b===0))

const arrayPair=(arr1, arr2) => arr1.reduce((result, val1)=>
    result.concat(arr2.map(val2=>[val1, val2])), []);

console.log(arrayPair([1, 2, 3], [4, 5, 6]))

const myStringDeCap = s => s.charAt(0).toLowerCase()+s.slice(1)

console.log(myStringDeCap("Cadd d"));

const myNonDup= arr => arr.filter((e, i)=>arr.indexOf(e)!==i)
const myNonDup2 = (arr, comp) => arr.filter(a=>comp)
console.log(myNonDup([1, 1, 3, 2, 3]))
console.log(myNonDup2(["a", "b", "b", "a", "C", "e"], String.toUpperCase))

const allTrue = (arr, predicate) => arr.every(predicate);

console.log(allTrue([1, 2, 3], a=>a>0));
console.log(allTrue([1, -2, 3], a=>a>0));

const myfilter = (arrv, arrc) => arrv.reduce((result, e, i) => {
   
    let index=arrc[i]?0:1
    result[index].push(e);
    return result
    
}, [[], []])

console.log(myfilter([1, 2, 3, 4], [true, true, false, true]));

const objectRemap = (keyMap, obj) => {
        return Object.keys(obj).reduce((result, key) => {
            return {...result, ...{[keyMap[key]||key]:obj[key]}}
           
        }, {})

}
const obj1={name:"aa", title:"bb"}, keyMap1={title:"responsibility"}
console.log(objectRemap(keyMap1, obj1));

const arrComb = arr => arr.reduce((result, e) => result.concat(result.map(v=>[e].concat(v)))
, [[]]).slice(1);

console.log(arrComb([1, 5, 2]));

const convertToDigit = n => [...`${n}`].map(i=>parseInt(i));
console.log(convertToDigit(8));
console.log(convertToDigit(128));

function myrepeat(str, times) {
   
     let result='';
     for (let i=0;i<times;i++) {
         result+=str;
         console.log(i);
         console.log(result);
     }
     return result;
}

console.log(myrepeat("abc", 4))

const multiple=x=>y=>x*y

console.log(multiple(5)(6))

const duplicate = arr => [...arr, ...arr];

console.log(duplicate([1, 2,3,4, 5]))

function isInteger(n) {
    const myType = typeof n
    return (myType === 'number') && (n%1===0)
}

let arrayList=[1, 2, 3];
arrayList.length=0;
console.log(arrayList);

arrayList=[1, 2, 3];
arrayList=[];
console.log(arrayList);

arrayList=[1, 2, 3];
arrayList.splice(0, arrayList.length)
console.log(arrayList);

arrayList=[1, 2, 3];
while (!!arrayList.length) {
    arrayList.pop();
}
console.log(arrayList);

console.log(isInteger(2))
console.log(isInteger(0.2))
console.log(Number.isInteger(2))
console.log(Number.isInteger(2.3))

function isArray(arr) {

    const mytype=typeof arr
    return (mytype === 'object') && Object.prototype.toString.call(arr) === '[object Array]'
}
console.log("array type or not : ")
console.log(isArray([1,2]))
console.log(isArray({a:1}))
console.log(isArray("a"))
console.log(Object.prototype.toString.call({a:1}))
console.log(Object.prototype.toString.call(function a() {return "1"}))
console.log(Object.prototype.toString.call([1, 2]))
console.log(Object.prototype.toString.call(""))
console.log(Object.prototype.toString.call(Number(1)))
console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(undefined))

console.log(Array.isArray("1"));
console.log(Array.isArray([1, 2]))

console.log("object type : ")
console.log(typeof Object);
console.log(typeof Array);
console.log(typeof Number);
console.log(typeof null);

const myfizbuzz2= () => {
    let result="";
   
    for (let i=0;i<100;i++) {
         let f=(i%3===0)
         let b=(i%5===0)
         result+=b?(f?"FizzBuzz":"Buzz"):f?"Fizz":i+"";
    }
    return result;
}
console.log("MY : \n"+ myfizbuzz2());

const anagram2 = (s1, s2) => {
   if  (s1.length !== s2.length) {
       return false;
   }
  
   return (s1.toLowerCase().split("").sort().join("") === s2.toLowerCase().split("").sort().join(""))
}
console.log("Is Anagram of each other : ")
console.log(anagram2("Mary", "Army"));
console.log(anagram2("Mary", "Brmy"));

async function mycallbackDemo(msg, callback1, argv) {
    try{
      console.log(msg)
      //console.log(argv)
      await callback1(argv);
    } catch(error) {
        console.log("here")
        if (!!error) {
          console.log("error happened")

        } else {
            console.log("error is undefined")
        }
        //throw Promise(error);
    }
    
}

async function mycallback(e)  {
    console.log(e)
    const fs=require('fs')
    
    await fs.writeFile("./myfile.out", "Hello World here", (error)=> {
        if (error) throw new error;
        console.log("successfully write to a file")
    }).catch(e1=>console.log(e1))
   
}

mycallbackDemo("testing p : ", mycallback, [0, 1, 2, 3])
//result.then(r=>console.log(r)).catch(e=>console.log(e))

//mycallbackDemo("testing n : ", mycallback, 1).then(r=>console.log("success"), err=>console.log(e.msg))
