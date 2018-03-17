function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var arr=[];
  var store='';
  for(var i=0;i<kalimat.length;i++) {
    arr.push(kalimat.charCodeAt(i));
  }
  for(var j=0;j<arr.length;j++) {
    if(arr[j]>=65 && arr[j]<=90) {
      store+=String.fromCharCode(arr[j]+32);
    }else if(arr[j]>=97 && arr[j]<=122){
      store+=String.fromCharCode(arr[j]-32);
    }else {
      store+=String.fromCharCode(arr[j]);
    }
  }
  return store;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"