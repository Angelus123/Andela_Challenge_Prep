// Firstly palindlome is a string that when reversed it still look like no change happen.
const palind = (str) =>{
    let temp = str;
    let isPalind =str.split("").reverse().join("");
    if(isPalind===temp) return "Is Palindlome"
    else return "Is not Palindlome"
}
console.log(palind("abba"))