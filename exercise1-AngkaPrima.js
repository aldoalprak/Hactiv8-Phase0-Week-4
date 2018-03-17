/*
-buat var store
-membuat for untuk 2-9 dengan pengulang i=2 i<=9
   ---->jika angka%i ===0 , store+=1
   ---->kalau store>1 bkn bil prima
-membuat for untuk >9 dengan pengulan i=2 i<=9
   ---->jika angka%i ===0 , store+=1
   ---->kalau store!==0 bkn bil prima
*/


function angkaPrima(angka) {
  // you can only write your code here!
  var store=0;
  if(angka>1 && angka<10) {
    for(var i=2;i<=9;i++) {
      if(angka%i===0) {
        store+=1;
      }
    }
  
    if(store>1) {
      return false
    }else {
      return true
    }
    }
    
  if(angka>=10) {
    for(var j=2;j<=9;j++) {
      if(angka%j===0) {
        store+=1;
      }
    }
  
    if(store!==0) {
      return false
    }else {
      return true
    }
    }
  
  
}


// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
