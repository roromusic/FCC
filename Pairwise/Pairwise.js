function pairwise(arr, arg) {
  //an empty array should return 0
  if (arr.length === 0) return 0;
  //Create empty array to keep all the arrays we will add
  var skipIndex = [];
  
  //take each element in the array to compare it with the other elements
  arr.forEach(function(value, index, array){
    //loops through array, checking the sum of those values with constant value
    //adds indexes to skipIndex if both numbers don't exist in the array already
    for(var i=index+1, len=arr.length; i<len; i++){
      if(value + array[i] === arg && !skipIndex.includes(index) && !skipIndex.includes(i)) {
        skipIndex.push(index, i);
      }
    }
  });
  
  //adds values inside skipIndex and returns it
  return skipIndex.reduce(function(acc, val) {
    return acc + val;
  });
}

//test here
pairwise([], 100);
