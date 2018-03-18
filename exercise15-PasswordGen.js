function changeVocals (str) {
  //code di sini
  var store='';
  
  
  for(var i=0;i<str.length;i++) {
    if(str[i]==='a' ||str[i]==='i' ||str[i]==='u' ||str[i]==='e' ||str[i]==='o' ||str[i]==='A' ||str[i]==='I' ||str[i]==='U' ||str[i]==='E' ||str[i]==='O' ) {
      store+=String.fromCharCode(str.charCodeAt(i)+1);
    }else {
      store+=str[i];
    }
  }
  
  return store;
}

function reverseWord (str) {
  //code di sini
  var store='';
  
  for(var i=str.length-1;i>=0;i--) {
    store+=str[i];
  }

  return store;
}



function setLowerUpperCase (str) {
  //code di sini
  var store='';
  for(var i=0;i<str.length;i++) {
    if(str[i]===str[i].toLowerCase()) {
      store+=str[i].toUpperCase();
    }else {
      store+=str[i].toLowerCase();
    }
  }
  return store;
}

function removeSpaces (str) {
  //code di sini
  
  var store='';
  
  if(str.length<5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }else {
  for(var i=0;i<str.length;i++) {
    if(str[i]===' ') {
      store+='';
    }else {
      store+=str[i];
    }
  }
 }
  return store;
}


function passwordGenerator (name) {
  //code di sini
  var ubahVokal= changeVocals(name);
  var balikKata= reverseWord(ubahVokal);
  var ubahUkuran= setLowerUpperCase(balikKata);
  var hilangSpasi= removeSpaces(ubahUkuran);
 
 return hilangSpasi;
  
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'