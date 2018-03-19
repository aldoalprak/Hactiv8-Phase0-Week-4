
function totalDigitRekursif(angka) {
  // you can only write your code here!
  var pisah=angka.toString();
   
 
  if(pisah.length===1) {
    return Number(pisah);
  }else {
    var awal=Number(pisah[0]);
    pisah=pisah.slice(1); 
    return awal + totalDigitRekursif(Number(pisah));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
