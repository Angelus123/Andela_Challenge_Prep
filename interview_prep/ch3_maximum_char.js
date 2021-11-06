//Find character that appears most in string
const checkMaxCharacter = (str) => {
//      const arr = str.split("")
//      let max =""
//      let maxChar = 0
 
//     for ( let ch of str){
//         let countEach = 1
//             for(i=0; i<= arr.length-1; i++){
//                 if(arr[i] === ch){
//                 countEach++        
//                 } 
//                 if(maxChar<countEach){
//                     maxChar=countEach
//                     max=ch
//                 }       
//         }
//     }
//     return max


//---------------------best practice
let obj = {}
let maxChar=""
let maxCount=0
for(let char of str)
(!obj[char])? obj[char] =1:obj[char]++
for (let char in obj){
    if(obj[char]>=maxCount){
        maxChar =char
        maxCount=(obj[char])
    }
}
return maxChar
}
console.log(checkMaxCharacter("izere"))


