/* algoritma

-membuat condition jika memberID kosong atau undefined
-membuat condition jika money <50000
-membuat loop untuk mendapatkan hasil changeMoney dan listPurchased
*/

function shoppingTime(memberId, money) {
  // you can only write your code here!
  var jenisBarang= ['Sepatu Stacattu','Baju Zoro','Baju H&N','Sweater Uniklooh','Casing Handphone'];
  var hargaBarang=[1500000,500000,250000,175000,50000];
  var kembalian=money;
  var obj={
   
  };
  
  if(memberId===''||memberId===undefined) {
      return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }else {
      obj.memberId=memberId;
    }
    
    if(money<50000){
      obj.money=money;
      return 'Mohon maaf, uang tidak cukup';
    }else{
      obj.money=money;
      obj.listPurchased=[];
    }
  
  for(var i=0;i<jenisBarang.length;i++) {
    
    
    if(hargaBarang[i]<=kembalian) {
      kembalian = kembalian-hargaBarang[i];
      obj.listPurchased.push(jenisBarang[i]);
    }
    
  }
  obj.changeMoney=kembalian;
  return obj;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja