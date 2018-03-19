function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var numToStr=angka.toString();
  var hasil=1;
  if(numToStr.length===1) {
    return angka
  }else {
    for(var i=0;i<numToStr.length;i++) {
      hasil*= Number(numToStr[i])
    }
    return kaliTerusRekursif(hasil);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6