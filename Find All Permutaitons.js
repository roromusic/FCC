function permAlone(str) {
  var arr = str.split("");
  var perm = [];
  var placeholder;
  
  function swap(num1, num2){
    placeholder = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = placeholder;
  }
  
  function generate(int) {
    if (int === 1) {
      perm.push(arr.join(""));
    }else {
      for (var i=0; i < int; ++i) {
        generate(int-1);
        swap(int % 2? i:0, int - 1);
      }
    }
  }
  generate(arr.length);
  
  return perm;
}

permAlone('aab');
