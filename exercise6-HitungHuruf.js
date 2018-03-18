function hitungHuruf(kata) {
  // you can only write your code here!
  var pisah=kata.split(' ');
  var arr=[];
  for(var i=0;i<pisah.length;i++) {
    for(var j=0;j<pisah[i].length;j++) {
      for(var k=j+1;k<pisah[i].length;k++) {
        if(pisah[i][j]===pisah[i][k]) {
          var count=1;
          count++;
          
        }
      }
    }
  arr.push(count);
  count=0;
  }
return arr;  
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau