function totalDigitRekursif(angka) {
  // you can only write your code here!
  var pisah=angka.toString().split('');
 
 
  if(count===pisah.length-1) {
    return 0;
  }else {
    count=count+1; 
    return Number(pisah[count]+totalDigitRekursif[angka]);
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5