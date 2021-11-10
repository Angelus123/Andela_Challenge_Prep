const dropFirstChar = (myString) => {
    myArr = myString.split(" ");
    const newArr = []
    for (let i = 0; i<=myArr.length-1; i++){
            let word = myArr[i]
           
            arrWord = word.split("")
            arrWord.pop()
            arrWord.shift()
            strword =arrWord.join("")
            newArr.push(strword)        
    }
   return newArr.join(" ")

}

console.log(dropFirstChar("Cyifuzo Felix"))


