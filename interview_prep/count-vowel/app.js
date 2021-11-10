const countVowel = (myString) =>{
    let pattern =/[A-Z]/ig;
    const arrChar = myString.match(pattern)
    return arrChar.length
}

console.log(countVowel("cyifuzo IZERE waje tukajyana"))