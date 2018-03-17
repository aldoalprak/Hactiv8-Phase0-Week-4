/**
Reverse All
Implementasikan function reverseAll untuk membalikkan `arr` DAN setiap elemen string yang ada di
dalamnya.
Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']
- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']
- input: []
  output: []


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .reverse()
  - .split()
  - .join()
*/

/*
algoritma

- Deklarisikan var newArr untuk menampung array baru
- Melakukan looping menggunakn for untuk setiap value yang terdapat dalam array, dimulai dar nilai paling belakang
- Menambah loop dalam loop (nested loop) untuk melakukan iterasi pada setiap value di arr.
- Deklarasikan var store untuk menampung kata per kata 
- Menggunakan newArr.push(store) untuk memasukan array baru yang sudah dibalik katanya.


*/

function reverseAll (arr) {
  // Code disini
  
  var newArr=[];
  for(var i=arr.length-1;i>=0;i--) {
    var store='';
    for(var j=arr[i].length-1;j>=0;j--) {
      store+=arr[i][j];
    }
    newArr.push(store);
  }
  return newArr;
}

console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']

console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(reverseAll([]));
// []
