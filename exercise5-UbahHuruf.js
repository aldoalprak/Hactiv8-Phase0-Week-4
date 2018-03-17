
function ubahHuruf(kata) {
  // you can only write your code here!
  var store='';
  for(var i=0;i<kata.length;i++) {
    if(kata.charCodeAt(i)===122) {
      store+=String.fromCharCode(97);
    }else {
    store+=String.fromCharCode(kata.charCodeAt(i)+1);
    }
      
  }
  return store;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zabz')); // abca