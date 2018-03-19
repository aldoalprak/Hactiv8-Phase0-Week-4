function hitungHuruf(kata) {
  // you can only write your code here!
  var pisah=kata.split(' ');
  var ulangTer='';
  var count=0;
  var store=0;
  var duplikat=0;
  for(var i=0;i<pisah.length;i++) {
    for(var j=0;j<pisah[i].length;j++) {
      for(var k=0;k<pisah[i].length;k++) {
        if(pisah[i][j]===pisah[i][k]) {
          count++;
        }
        if(count>1){
          duplikat+=count;
          count=0;
        }
      }
    count=0;
    }
   // console.log(duplikat);
    //duplikat=0;
  if(duplikat>store) {
  ulangTer=pisah[i];
  store=duplikat;
    }
  duplikat=0;
  }
return ulangTer;  
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau

