'use strict';

var d = new Date();
document.getElementById('demo').innerHTML = d;


var List = function(myArr){
  this.myArr=myArr; // my array to push the object inside it
};

List.prototype.addTasks= function(name,date){
  var theTask = new Task(name,date);
  this.myArr.push(theTask);

};


List.prototype.saveToLocalStorage=function(){
  localStorage.myArr1=JSON.stringify(this.myArr);

};

var Task = function(name,date){
  this.name=name;
  this.date=date;
};

loadData();
function loadData(){
  if(localStorage.getItem('myArr')=== null){
    var newTask= new List([]);
    for(var j=0 ; j<this.myArr.length;j++){
      newTask.addTasks(event.target.name[j] , event.target.date[j]);
    }
    localStorage.myArr=JSON.stringify(newTask);
  }
}


var reg=document.getElementById('myForm');
reg.addEventListener('submit', addyourTask);

function addyourTask(){

  var theList = document.getElementById('oList');
  var olE1 = document.createElement('ol');
  theList.appendChild(olE1);

  for(var i=0 ; i< this.myArr.length ; i++){
    var liE1 = document.createElement('li');
    liE1.textContent=this.myArr.name[i];
    liE1.textContent=this.myArr.date[i];
    olE1.appendChild(liE1);

  }
}
