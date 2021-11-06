// Firstly palindlome is a number or string that when reversed it still look like no change happen.
const palind = (str) =>{
    let temp = str;
    let arr =str.split("");
    arr.reverse();
    let reversed = arr.join("");
    if(reversed===temp) return "Is Palindlome"
    else return "Is not Palindlome"
}
console.log(palind("abbac"))