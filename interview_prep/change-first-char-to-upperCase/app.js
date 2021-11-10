//Change first character to upperCase

const dropFirstChar = (myString) => {
        myArr = myString.split(" ");
        const newArr = []
        for (let i = 0; i<=myArr.length-1; i++){
                let word = myArr[i]
                arrWord = word.split("")
                arrWord[0]=arrWord[0].toUpperCase()
                strword =arrWord.join("")
                newArr.push(strword)        
        }
       return newArr.join(" ")
    }
    console.log(dropFirstChar("i love my umwari"))


