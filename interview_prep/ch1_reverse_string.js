// ===== reverse string
// const revString = (str) => {
//     let sr  = []
//     let news =""
//     for(i=0;i<str.length; i++){
//         sr.unshift(str[i])
//     }
//     for(i=0;i<sr.length; i++){
//     news =news+sr[i]
//     }
//     return news
// }
// console.log(revString("Izere"))


// const revString = (str) =>{
//     let arr = str.split("");
//     arr.reverse()
//     let arrstr =arr.join("")
//     console.log(arrstr)
// }
// revString("Izere")

(function(str){
    let reverse= ""
    for (let character of str){
        reverse=character+reverse
    }

    console.log({reversed:reverse })

})("Izere")
