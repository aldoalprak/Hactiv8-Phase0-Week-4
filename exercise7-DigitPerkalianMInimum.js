function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var arr=[];
  for (var i=1;i<=angka;i++) {
    for(var j=i;j<=angka;j++) {
      if(i*j===angka) {
        var keString=i.toString()+j.toString()
        arr.push(keString);
      }
    }
  }
  arr.sort(function(a,b){return (a-b)});
  return arr[0].length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
