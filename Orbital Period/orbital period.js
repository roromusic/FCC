function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var returnArr = [];
  
  //algorithm for finding the orbital period. pushes result to returnArr
  function pushArr(value){
    var op = Math.round(Math.sqrt(Math.pow(earthRadius + value.avgAlt, 3) / GM) * 2 * Math.PI);
    delete value.avgAlt;
    value.orbitalPeriod = op;
    returnArr.push(value);
  }
  
  for(var i=0, len=arr.length; i<len; i++) {
    pushArr(arr[i]);
  }
  
  return returnArr;  //[{name: "sputnik", orbitalPeriod: 86400}]
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
