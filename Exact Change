var denom = [
  { name: 'PENNY', val: 0.01},
  { name: 'NICKEL', val: 0.05},
  { name: 'DIME', val: 0.10},
  { name: 'QUARTER', val: 0.25},
  { name: 'ONE', val: 1.00},
  { name: 'FIVE', val: 5.00},
  { name: 'TEN', val: 10.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'ONE HUNDRED', val: 100.00}
];

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var cashback = [];
  var total = cid.reduce(function(prev, curr){
    return prev += curr[1];
  }, 0);
  var canGive = denom.reduce(function(prev, curr, index){
    if(curr.val <= change) {
      return prev += cid[index][1];
    }else {
      return prev;
    }
  }, 0);
  
  if(change > canGive){
    return "Insufficient Funds";
  }
  if(total === change){
    return "Closed";
  }
 
  for (var i=8, count=1; i>=0; i--){
    //check if amount left is greater than denomination and the denomination is in the register
    if (Math.round(change *100)/100 >= denom[i].val && cid[i][1] > 0) {
      if(count>1) {
        cashback.pop();
        cashback.push([denom[i].name, denom[i].val * count]);
      }else {
        cashback.push([denom[i].name, denom[i].val]);
      }
      cid[i][1] -= denom[i].val;
      change -= denom[i].val;
      count++;
      i++;
      continue;
    }
    count=1;
  }
  return cashback;
}
