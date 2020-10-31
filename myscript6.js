//converting string to base64
function mybtoa(str) {
  return Buffer.from(str, 'binary').toString('base64')
}

function myatob(str) {
  return Buffer.from(str, 'base64').toString()
}

function myCap(str) {
 return str.charAt(0).toUpperCase()+str.slice(1) 
}

function myCapAll(str) {
    arr1= (str.split(/\s+/g));
    return arr1.map(e=>e.charAt(0).toUpperCase()+e.slice(1))
}

const myany=(c, fn=Boolean) => c.some(fn)
console.log(myany([1, 0, 0])) 
console.log(myany([1, 0, 0], x=>x<0)) 

const mydelay=(fn, wait, ...args) => setTimeout(fn, wait, ...args)

mydelay(myCapAll, 2000, "a1 a2 a3")

console.log(myatob(mybtoa("any")))
console.log(myCap("any"))
console.log(myCapAll("any1 any2 any3"))



