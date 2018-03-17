function changeMe(arr) {
  // you can only write your code here!
  
          
  for(var i=0;i<arr.length;i++) {
    var obj={firstName:'',
           lastName:'',
           gender:'',
           age:''
          };
    for(var j=0;j<arr[i].length;j++) {
      if(j===0) {
        obj.firstName=arr[i][j]
      }
      if(j===1) {
        obj.lastName=arr[i][j]
      }
      if(j===2) {
        obj.gender=arr[i][j]
      }
      if(j===3 && arr[i][j]<2018) {
        obj.age=2018-arr[i][j]
      }else {
        obj.age='Invalid Birthday'
      }
      
    }
    console.log(i+1+'.'+obj.firstName+' '+obj.lastName);
    console.log(obj)
   
  }
 


}

//alternatif2
/*
function changeMe(arr) {
  // you can only write your code here!
  var obj=[];
  for(var i=0;i<arr.length;i++) {
    obj.firstName=arr[i][0];
    obj.lastName=arr[i][1];
    obj.gender=arr[i][2];
    obj.age=arr[i][3];
  
    console.log (i+1+'. '+obj.firstName+' '+obj.lastName+':');
    console.log(obj);
  }
  
}
*/

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""