function urutkanAbjad(str) {
  // you can only write your code here!
  var arr=[];
  var store='';
  for(var i=0;i<str.length;i++) {
    arr.push(str.charCodeAt(i));
  }
  arr.sort(function(a,b){return a-b});
  for(var j=0;j<arr.length;j++) {
    store+=String.fromCharCode(arr[j]);
    
  }
  return (store);
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'