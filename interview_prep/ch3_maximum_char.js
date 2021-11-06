//Find character that appears most in string
const checkMaxCharacter = (str) => {
     const arr = str.split("")
     let max =""
     let maxChar = 0
 
    for ( let ch of str){
        let countEach = 0
            for(i=0; i<= arr.length-1; i++){
                if(arr[i] === ch){
                countEach++        
                } 
                if(maxChar<countEach){
                    maxChar=countEach
                    max=ch
                }       
        }
    }
    return max
}
console.log(checkMaxCharacter("izi"))