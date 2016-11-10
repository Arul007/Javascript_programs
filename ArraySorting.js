var fruits = [10,98,50,30,10,40,60,30,90,45,40,67,23,76,98];

console.log("Sorted Array using Sort function ===>"+fruits.sort());
console.log("Sorted Array using reverse function ===>"+fruits.reverse());

var arr = fruits.sort(function(a, b){return a-b});
var tmp = [];
for(var i = 0; i < arr.length; i++){
    if(tmp.indexOf(arr[i]) == -1){
    tmp.push(arr[i]);
    }
}
console.log("Sorted Array without duplicates ===>"+tmp);
