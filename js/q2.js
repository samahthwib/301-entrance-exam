'use strict';

function printPattern(){

  var y = 6;
  var x = 6;
  var str = '';

  for(var i = 0; i < y; i++ ){
    for(var j = 0; j < x; j++){
      if(i + j >= y){
        str = str.concat('*');
      }else{
        console.log('nothing');
      }
    }
    str = str.concat('\n');
  }
  console.log(str);

}


printPattern();




