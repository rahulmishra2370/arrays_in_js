const name1=["rahul","navdeep","piyush","nitish"]
let name2=[1,2,3,4,5]
 for(let i in name1)
 {
     console.log(name1[i])
 }

let a =name1.pop()
console.log(name1) 
 name1.push("yo boi")
 console.log(name1)

 name1.unshift("radhe")
 console.log(name1)
 delete name1[0]
 console.log(name1,name1.length)
 let newarry=name1.concat(name2)
 console.log(newarry)
 name1.sort()
 console.log(name1)
 console.log(newarry.sort())//alphabetically sort the array and modify the original array
 name1.reverse()
 console.log(name1)
 name1.splice(0,2,"honey","singh")
 console.log(name1)