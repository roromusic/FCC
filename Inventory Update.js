function updateInventory(arr1, arr2) {
    arr2.forEach(function(value, index) {
      for (var i=0, len=arr1.length; i<len; i++) {
        if(value[1] === arr1[i][1]) {
          arr1[i][0] += value[0];
          break;
        }else if (value[1] !== arr1[i][1] && i===len-1){
          arr1.push(value);
        }
      }
    });
    if(arr1.length === 0){
      arr1 = arr2;
    }
  
    arr1.sort(function(a,b){
      return a[1] > b[1];
    });
  
    return arr1;
}

// Example inventory lists
var curInv = [
];

var newInv = [
    [2, "Hair Pin"], 
    [3, "Half-Eaten Apple"], 
    [67, "Bowling Ball"], 
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
