function checkAB(num) {
  // you can only write your code here!
  var hitung=0;
  for(var i=0;i<num.length;i++) {
    for(var j=0;j<num.length;j++) {
      if(num[i]==='b' && num[j]==='a') {
         hitung=Math.abs(i-j)-1;
        if(hitung===3) {
          return true;
        }
      }else if(num[j]==='b' && num[i]==='a') {
         hitung=Math.abs(i-j)-1;
        if(hitung===3) {
          return true;
        }
      }
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false