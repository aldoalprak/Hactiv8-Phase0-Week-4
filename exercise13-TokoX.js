/*algorit

-buat var arrObj untuk output yang akan dihasilkan
-gunakan for loop untuk melakukan iterasi antara parameter orang(shoppers) dengan list barang untuk mengecek apakah barang yang dibeli terdapat pada list barang
  --->jika produk yang ingin dibeli === list barang yang ada
     ---->dan jika produk yang ingin dibeli <= jumlah barang yang ada
        ---->push orang.name ke arrObj
        
        untuk leftOver dapat ditampung dengan mengunakan listBarang[i][2] sebagai penampung
        
        untuk totalProfit dapat dipisah per produk dengan membuat 3 variable profit.
        
*/        
        

function countProfit(orang) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  
  var profitSpt=0;
  var profitBju=0;
  var profitSwt=0;
  var arrObj=[
   {product:'Sepatu Stacattu',
    shoppers:[],
    leftOver:10,
    totalProfit:0},
   {product:'Baju Zoro',
    shoppers:[],
    leftOver:2,
    totalProfit:0},
   {product:'Sweater Uniklooh',
    shoppers:[],
    leftOver:1,
    totalProfit:0}, 
  ];
  for(var i=0;i<orang.length;i++) {
    for(var j=0;j<listBarang.length;j++) {
      if(orang[i].product ===listBarang[j][0]) {
        if(orang[i].amount<=listBarang[j][2]) {
          arrObj[j].shoppers.push(orang[i].name);
         
          listBarang[j][2]-=orang[i].amount;
          arrObj[j].leftOver=listBarang[j][2];
          
          if(j===0) {
            profitSpt+=listBarang[j][1]*orang[i].amount;
           arrObj[j].totalProfit=profitSpt;
          }else if(j===1){
            profitBju+=listBarang[j][1]*orang[i].amount;
            arrObj[j].totalProfit=profitBju;
          }else{
            profitSwt+=listBarang[j][1]*orang[i].amount;
            arrObj[j].totalProfit=profitSwt;
          }
          
        }
      }
    }
  }
  if(orang.length===0) {
    return [];
  }else {
  return arrObj;
  }
    
}

// TEST CASES

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]