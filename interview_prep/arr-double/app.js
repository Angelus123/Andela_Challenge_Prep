const arrDouble =(arr) => {
    for(let i = 0; i<=arr.length-1; i++){
            arr[i]=arr[i]*2;
    }
    return arr
}
const arr =[6,2,3,4,5]
console.log(arrDouble(arr))