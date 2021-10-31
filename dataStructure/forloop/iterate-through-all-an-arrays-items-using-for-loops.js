function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
for(let i = 0; i<=arr.length-1; i++){
  let nested = arr[i];
  // for(let i =0; i<=nested.length-1; i++){
    if(nested.indexOf(elem) ==-1 ){
    newArr.push(nested)
    }
  // }
}
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));