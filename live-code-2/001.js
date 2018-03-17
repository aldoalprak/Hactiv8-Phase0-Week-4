/**
Graduates Count
Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.
Contoh:
- input: [70, 85, 65, 90]
  output: 2 orang lulus
- input: [0, 65, 30, 74]
  output: Tidak ada yang lulus
- input: [90, 100, 76, 85]
  output: Semua lulus
- input: []
  output: Data kosong


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()

*/

/*
algoritma
-Deklarasi var store berfungsi untuk menyimpan orang yang lulus (nilai >=75)
-Menggunakan for untuk melakukan iterasi dan melakuka pengecekan untuk nilai dalam array scores

-if statement berfungsi untuk melakukan pengecekan untuk nilai store.
Jika store < score.length&& !==0 -->output terdapat x orang yang lulus
JIka store ==scores.length -->output semua lulus
Jika store ===0 outut tidak ada yang lulus
Jika scores[0]===undefined output data kosong
*/

function graduatesCount (scores) {
  // Code disini
  var store=0;
  
  for(var i=0;i<scores.length;i++) {
    if(scores[i] >=75) {
      store+=1
    }
  }
    
  if(store<scores.length && store !==0) {
    return (store+' orang'+' lulus');
  }
    else if(scores[0]===undefined){
     return ('Data kosong')
    }
  else if(store==scores.length) {
    return ('Semua orang lulus');
  }
  else if(store===0){
    return("Tidak ada yang lulus")
  }  
   
  
    

  
  
}

// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong
