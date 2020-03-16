'use strict';


var total=0;

function greaterThan(myDynamicArr,num){
  for (var i=0 ; i<myDynamicArr.length ; i++){
    if (myDynamicArr[i] > num){
      total ++;
    }else{
    //   console.log('it is smaller than the num');
    }
  }
  return total;
}

// greaterThan([1,2,3,4] ,2);
// console.log(total);

greaterThan([2,4,8] ,8);
console.log(total);
